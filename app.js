// Opening Trainer — application logic
import { REPERTOIRE, ROADMAP } from './data.js';
import { Chess } from './chess.esm.js';
import { getLang, setLang, t, bi, sideName } from './i18n.js';

/* ═══════════ helpers ═══════════ */
const $ = (sel) => document.querySelector(sel);
const PIECE_FILE = { k: 'K', q: 'Q', r: 'R', b: 'B', n: 'N', p: 'P' };
const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const lineById = Object.fromEntries(REPERTOIRE.map((l) => [l.id, l]));
const moveNo = (i) => Math.floor(i / 2) + 1;
/** note may be {en,zh} (plain) or {brief:{en,zh}, detail:{en,zh}} (layered) */
const briefOf = (n) => (n && n.brief ? bi(n.brief) : bi(n));
const detailOf = (n) => (n && n.detail ? bi(n.detail) : null);

/* ═══════════ storage ═══════════ */
const STORE_KEY = 'ot-progress-v1';
const TUT_KEY = 'ot-tut-v1';
let stats = {};
let tutDone = {};
try {
  stats = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
} catch {
  stats = {};
}
try {
  tutDone = JSON.parse(localStorage.getItem(TUT_KEY) || '{}');
} catch {
  tutDone = {};
}
function saveStats() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(stats));
  } catch {}
}
function saveTut() {
  try {
    localStorage.setItem(TUT_KEY, JSON.stringify(tutDone));
  } catch {}
}
function record(cardId, ok) {
  const s = stats[cardId] || (stats[cardId] = { c: 0, w: 0 });
  if (ok) s.c++;
  else s.w++;
  saveStats();
}
function acc(s) {
  if (!s || s.c + s.w === 0) return null;
  return s.c / (s.c + s.w);
}

/* ═══════════ drill cards ═══════════ */
function buildCards() {
  const cards = [];
  for (const line of REPERTOIRE) {
    const seqs = [];
    if (line.main.drill) seqs.push({ name: line.main.name, san: line.main.san, notes: line.main.notes || {}, note: null });
    for (const s of line.sidelines) if (s.drill) seqs.push({ name: s.name, san: s.san, notes: {}, note: s.note });
    seqs.forEach((seq, si) => {
      const ch = new Chess();
      for (let i = 0; i < seq.san.length; i++) {
        const fenBefore = ch.fen();
        const prevSan = i > 0 ? seq.san[i - 1] : null;
        const mv = ch.move(seq.san[i]);
        if (mv.color !== line.side) continue;
        cards.push({
          id: `${line.id}:${si}:${i}`,
          lineId: line.id,
          title: line.title,
          seqName: seq.name,
          side: line.side,
          fen: fenBefore,
          uci: mv.from + mv.to + (mv.promotion || ''),
          san: mv.san,
          note: seq.notes[i] || seq.note || null,
          oppPrev: prevSan,
          fullMove: moveNo(i),
        });
      }
    });
    (line.plans || []).forEach((p, pi) => {
      const ch = new Chess();
      for (const s of p.after) ch.move(s);
      cards.push({
        id: `${line.id}:plan:${pi}`,
        type: 'plan',
        lineId: line.id,
        title: line.title,
        seqName: { en: 'Plan quiz', zh: '计划选择题' },
        side: line.side,
        fen: ch.fen(),
        question: p.question,
        choices: p.choices,
        fullMove: moveNo(p.after.length),
        note: null,
      });
    });
  }
  return cards;
}
const CARDS = buildCards();
const cardById = Object.fromEntries(CARDS.map((c) => [c.id, c]));

let lastCardId = null;
function pickCard() {
  const scored = CARDS.map((c) => {
    const s = stats[c.id];
    const seen = s && s.c + s.w > 0;
    const a = seen ? acc(s) : 1;
    return { c, key: [seen ? 1 : 0, a, c.id === lastCardId ? 1 : 0, Math.random()] };
  });
  scored.sort((x, y) => {
    for (let i = 0; i < x.key.length; i++) {
      if (x.key[i] !== y.key[i]) return x.key[i] - y.key[i];
    }
    return 0;
  });
  return scored[0].c;
}

/* ═══════════ board ═══════════ */
function centerOf(sq, orientation) {
  const f = sq.charCodeAt(0) - 97;
  const r = sq.charCodeAt(1) - 49;
  if (orientation === 'w') return [(f + 0.5) * 100, (7 - r + 0.5) * 100];
  return [(7 - f + 0.5) * 100, (r + 0.5) * 100];
}

function drawArrow(svg, from, to, orientation, color = '#3E7A52') {
  const [x1, y1] = centerOf(from, orientation);
  const [x2, y2] = centerOf(to, orientation);
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ex = x2 - (dx / len) * 34, ey = y2 - (dy / len) * 34;
  const id = svg.id + '-ah';
  svg.innerHTML =
    `<defs><marker id="${id}" markerWidth="7" markerHeight="7" refX="4.2" refY="3" orient="auto">` +
    `<path d="M0,0 L6.5,3 L0,6 Z" fill="${color}"/></marker></defs>` +
    `<line x1="${x1}" y1="${y1}" x2="${ex}" y2="${ey}" stroke="${color}" stroke-width="15" ` +
    `stroke-linecap="round" opacity="0.82" marker-end="url(#${id})"/>`;
}
function clearArrow(svg) {
  svg.innerHTML = '';
}

/* ── interactive square references in prose ── */
let pinnedSq = null;
function applySquareHighlight(sq, cls) {
  document.querySelectorAll('[data-sq]').forEach((el) => {
    el.classList.remove('sq-focus', 'sq-pin');
    if (sq && el.dataset.sq === sq) el.classList.add(cls);
  });
}
function linkSquaresIn(root) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const texts = [];
  while (walker.nextNode()) texts.push(walker.currentNode);
  for (const node of texts) {
    const parent = node.parentElement;
    if (!parent || parent.closest('.sq-ref') || parent.closest('script')) continue;
    const src = node.nodeValue;
    if (!/[a-h][1-8]/.test(src)) continue;
    const wrapped = src.replace(/([a-h][1-8])/g, '<span class="sq-ref" data-sqref="$1">$1</span>');
    const span = document.createElement('span');
    span.innerHTML = wrapped;
    node.replaceWith(span);
  }
}
document.addEventListener('mouseover', (e) => {
  const el = e.target.closest && e.target.closest('.sq-ref');
  if (el && !pinnedSq) applySquareHighlight(el.dataset.sqref, 'sq-focus');
});
document.addEventListener('mouseout', (e) => {
  const el = e.target.closest && e.target.closest('.sq-ref');
  if (el && !pinnedSq) applySquareHighlight(pinnedSq, pinnedSq ? 'sq-pin' : '');
});
document.addEventListener('click', (e) => {
  const el = e.target.closest && e.target.closest('.sq-ref');
  if (el) {
    e.stopPropagation();
    e.preventDefault();
    const sq = el.dataset.sqref;
    pinnedSq = pinnedSq === sq ? null : sq;
    applySquareHighlight(pinnedSq, pinnedSq ? 'sq-pin' : '');
    return;
  }
  if (pinnedSq) {
    pinnedSq = null;
    applySquareHighlight(null, '');
  }
}, true);

function renderBoard(el, chess, opts = {}) {
  const ori = opts.orientation || 'w';
  const files = ori === 'w' ? FILES : [...FILES].reverse();
  const ranks = ori === 'w' ? [8, 7, 6, 5, 4, 3, 2, 1] : [1, 2, 3, 4, 5, 6, 7, 8];
  const boardMap = {};
  for (const row of chess.board())
    for (const sq of row) if (sq) boardMap[sq.square] = sq;

  let html = '';
  for (const r of ranks) {
    for (const f of files) {
      const name = f + r;
      const light = (f.charCodeAt(0) - 97 + r) % 2 === 0;
      const cls = ['sq', light ? 'l' : 'd'];
      if (opts.lastMove && (opts.lastMove.from === name || opts.lastMove.to === name)) cls.push('last');
      if (opts.sel === name) cls.push('sel');
      if (opts.hint && opts.hint.from === name) cls.push('hint-from');
      if (opts.hint && opts.hint.to === name) cls.push('hint-to');
      const p = boardMap[name];
      let inner = '';
      if (p) {
        const code = PIECE_FILE[p.type];
        inner += `<img class="pc" src="pieces/${p.color}${code}.svg" alt="${p.color}${code}" draggable="false">`;
      }
      const visRow = ranks.indexOf(r), visCol = files.indexOf(f);
      if (visCol === 0) inner += `<span class="coord r">${r}</span>`;
      if (visRow === 7) inner += `<span class="coord f">${f}</span>`;
      html += `<div class="${cls.join(' ')}" data-sq="${name}">${inner}</div>`;
    }
  }
  el.innerHTML = html;
}

/* ═══════════ views ═══════════ */
const views = {
  browse: $('#view-browse'),
  drill: $('#view-drill'),
  tutorial: $('#view-tutorial'),
  progress: $('#view-progress'),
};
let currentView = 'browse';
function showView(name) {
  currentView = name;
  for (const [k, v] of Object.entries(views)) v.classList.toggle('on', k === name);
  document.querySelectorAll('nav.tabs button').forEach((b) => b.classList.toggle('on', b.dataset.view === name));
  if (name === 'progress') renderProgress();
  if (name === 'drill' && !drill.card) nextCard();
  if (name === 'tutorial' && !tut.lineId) renderTutList();
}
document.querySelectorAll('nav.tabs button').forEach((b) =>
  b.addEventListener('click', () => showView(b.dataset.view))
);

/* ═══════════ i18n static + re-render ═══════════ */
function applyI18n() {
  document.documentElement.lang = getLang() === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    el.title = t(el.dataset.i18nTitle);
  });
  renderLineList();
  renderDetail();
  renderBrowseBoard();
  renderTutList();
  if (tut.lineId) {
    renderTutNarration();
    renderTutBoard();
    setTutButtons();
  } else {
    renderTutNarration();
    setTutButtons();
  }
  if (drill.card) loadCard(drill.card);
}
$('#lang-btn').addEventListener('click', () => {
  setLang(getLang() === 'zh' ? 'en' : 'zh');
  applyI18n();
});

/* ═══════════ library browse ═══════════ */
const browse = { lineId: REPERTOIRE[0].id, seqIdx: 0, ply: 0, mistakeIdx: null };

function currentSeq(b = browse) {
  const line = lineById[b.lineId];
  if (b.mistakeIdx != null && line.mistakes && line.mistakes[b.mistakeIdx]) {
    const m = line.mistakes[b.mistakeIdx];
    return {
      name: m.title,
      san: [...m.wrong, ...m.punish],
      notes: { [m.wrong.length - 1]: { brief: m.title, detail: m.lesson } },
      note: m.lesson,
      isMistake: true,
    };
  }
  return b.seqIdx === 0
    ? { name: line.main.name, san: line.main.san, notes: line.main.notes || {}, note: null }
    : line.sidelines[b.seqIdx - 1];
}

function renderLineList() {
  const el = $('#line-list');
  let html = '';
  for (const group of ['White', 'Black']) {
    html += `<div class="group-label">${group === 'White' ? t('side.white') : t('side.black')}</div>`;
    for (const line of REPERTOIRE.filter((l) => l.group === group)) {
      html += `<button class="line-item ${line.id === browse.lineId ? 'on' : ''}" data-id="${line.id}">
        <div class="t"><span>${bi(line.title)}</span>${tutDone[line.id] ? `<span class="badge">${t('line.badge.tut')}</span>` : ''}</div>
        <div class="a">${bi(line.against)} · ${t('line.plies', line.main.san.length)}</div>
      </button>`;
    }
  }
  el.innerHTML = html;
  el.querySelectorAll('.line-item').forEach((b) =>
    b.addEventListener('click', () => {
      browse.lineId = b.dataset.id;
      browse.seqIdx = 0;
      browse.ply = 0;
      browse.mistakeIdx = null;
      renderLineList();
      renderDetail();
      renderBrowseBoard();
    })
  );
}

function replayB() {
  const seq = currentSeq();
  const ch = new Chess();
  let last = null;
  for (let i = 0; i < browse.ply; i++) {
    const mv = ch.move(seq.san[i]);
    last = { from: mv.from, to: mv.to };
  }
  return { ch, last, seq };
}

function renderBrowseBoard() {
  const { ch, last } = replayB();
  const line = lineById[browse.lineId];
  renderBoard($('#browse-board'), ch, { orientation: line.side, lastMove: last });
  const arrow = $('#browse-arrow');
  if (last) drawArrow(arrow, last.from, last.to, line.side, '#A87A2C');
  else clearArrow(arrow);
  $('#nav-ply').textContent =
    browse.ply === 0 ? t('nav.start') : t('nav.ply', Math.ceil(browse.ply / 2), browse.ply);

  const mvEls = document.querySelectorAll('#detail .movelist .mv');
  mvEls.forEach((m) => m.classList.toggle('cur', Number(m.dataset.i) === browse.ply - 1));
}

function noteBoxHtml(tag, note) {
  const d = detailOf(note);
  return (
    `<div class="note-box"><span class="tag">${tag}</span>${briefOf(note)}` +
    (d
      ? `<div class="note-detail" style="display:none">${d}</div><button type="button" class="note-more">Detail ▾</button>`
      : '') +
    `</div>`
  );
}

function renderDetail() {
  renderDetailRaw();
  linkSquaresIn($('#detail'));
}

function renderDetailRaw() {
  const line = lineById[browse.lineId];
  const seq = currentSeq();
  const el = $('#detail');

  let switchHtml = `<div class="seq-switch">`;
  switchHtml += `<button class="${browse.seqIdx === 0 && browse.mistakeIdx == null ? 'on' : ''}" data-seq="0">${t('seq.main', bi(line.main.name))}</button>`;
  line.sidelines.forEach((s, i) => {
    switchHtml += `<button class="${browse.seqIdx === i + 1 && browse.mistakeIdx == null ? 'on' : ''}" data-seq="${i + 1}">${bi(s.name)}</button>`;
  });
  switchHtml += `</div>`;

  let ml = `<div class="movelist">`;
  const n = seq.san.length;
  for (let i = 0; i < n; i += 2) {
    ml += `<div class="no">${i / 2 + 1}.</div>`;
    ml += `<div class="mv ${browse.ply === i + 1 ? 'cur' : ''}" data-i="${i}">${seq.san[i]}</div>`;
    ml +=
      i + 1 < n
        ? `<div class="mv ${browse.ply === i + 2 ? 'cur' : ''}" data-i="${i + 1}">${seq.san[i + 1]}</div>`
        : `<div class="mv empty"></div>`;
  }
  ml += `</div>`;

  let noteHtml = '';
  if (browse.ply === 0) {
    noteHtml = noteBoxHtml(t('note.howto'), { en: t('note.howto.body'), zh: t('note.howto.body') });
  } else if (seq.notes[browse.ply - 1]) {
    noteHtml = noteBoxHtml(`${t('note.thismove')} · ${seq.san[browse.ply - 1]}`, seq.notes[browse.ply - 1]);
  } else {
    let idx = -1;
    for (let i = browse.ply - 1; i >= 0; i--) {
      if (seq.notes[i]) { idx = i; break; }
    }
    if (idx >= 0) {
      noteHtml = noteBoxHtml(t('note.key.at', seq.san[idx], moveNo(idx)), seq.notes[idx]);
    } else if (seq.note) {
      noteHtml = noteBoxHtml(seq.isMistake ? bi(seq.name) : bi(seq.name), seq.note);
    } else {
      noteHtml = noteBoxHtml(t('note.tip'), { en: t('note.tip.body'), zh: t('note.tip.body') });
    }
  }

  // theory-end banner (main line only)
  let exitHtml = '';
  const exit = !seq.isMistake && browse.seqIdx === 0 ? line.main.exit : null;
  if (exit && browse.ply >= exit.afterPly) {
    exitHtml = `<div class="exit-banner"><span class="tag">${getLang() === 'zh' ? '离开开局' : 'Theory ends'}</span>${bi(exit.text)}</div>`;
  }

  // mistakes library
  let missHtml = '';
  if (line.mistakes && line.mistakes.length) {
    missHtml = `<h3 style="margin-top:16px">${getLang() === 'zh' ? '常见错误' : 'Common mistakes'}</h3><div class="mistake-list">`;
    line.mistakes.forEach((m, i) => {
      missHtml += `<div class="mistake-item"><span>${bi(m.title)}</span>
        <button class="btn" data-mistake="${i}">${getLang() === 'zh' ? '推演' : 'Replay'}</button></div>`;
    });
    missHtml += `</div>`;
  }

  el.innerHTML = `
    <div class="meta-row">
      <span class="chip ${line.side === 'w' ? 'side-w' : 'side-b'}">${line.group === 'White' ? t('side.white') : t('side.black')} · ${bi(line.title)}</span>
      <span class="chip">${t('detail.vs', bi(line.against))}</span>
      <span class="chip">${t('detail.eco', line.eco)}</span>
    </div>
    <p class="intro">${bi(line.intro)}</p>
    <div class="callout purpose"><span class="tag">${t('callout.purpose')}</span>${bi(line.purpose)}</div>
    <div class="callout potential"><span class="tag">${t('callout.potential')}</span>${bi(line.potential)}</div>
    ${switchHtml}
    <h3>${t('moves')}</h3>
    ${ml}
    ${noteHtml}
    ${exitHtml}
    ${missHtml}
    <div class="plan-box"><b>${t('plan.middlegame')}:</b> ${bi(line.plan)}</div>
  `;

  el.querySelectorAll('.seq-switch button').forEach((b) =>
    b.addEventListener('click', () => {
      browse.seqIdx = Number(b.dataset.seq);
      browse.ply = 0;
      browse.mistakeIdx = null;
      renderDetail();
      renderBrowseBoard();
    })
  );
  el.querySelectorAll('.movelist .mv:not(.empty)').forEach((m) =>
    m.addEventListener('click', () => {
      browse.ply = Number(m.dataset.i) + 1;
      renderDetail();
      renderBrowseBoard();
    })
  );
  el.querySelectorAll('.note-more').forEach((b) =>
    b.addEventListener('click', () => {
      const d = b.previousElementSibling;
      const open = d.style.display !== 'none';
      d.style.display = open ? 'none' : 'block';
      b.textContent = open ? 'Detail ▾' : 'Detail ▴';
    })
  );
  el.querySelectorAll('button[data-mistake]').forEach((b) =>
    b.addEventListener('click', () => {
      browse.mistakeIdx = Number(b.dataset.mistake);
      browse.ply = 0;
      renderDetail();
      renderBrowseBoard();
    })
  );
}

function navPly(delta) {
  const n = currentSeq().san.length;
  browse.ply = Math.max(0, Math.min(n, browse.ply + delta));
  renderDetail();
  renderBrowseBoard();
}
$('#nav-first').addEventListener('click', () => { browse.ply = 0; renderDetail(); renderBrowseBoard(); });
$('#nav-last').addEventListener('click', () => { browse.ply = currentSeq().san.length; renderDetail(); renderBrowseBoard(); });
$('#nav-prev').addEventListener('click', () => navPly(-1));
$('#nav-next').addEventListener('click', () => navPly(1));
document.addEventListener('keydown', (e) => {
  if (currentView !== 'browse') return;
  if (e.key === 'ArrowLeft') navPly(-1);
  if (e.key === 'ArrowRight') navPly(1);
});

/* ═══════════ drill mode ═══════════ */
const drill = {
  card: null,
  chess: null,
  sel: null,
  wrong: 0,
  hinted: false,
  status: 'play',
  sessionOk: 0,
  sessionAll: 0,
  lastMove: null,
};

function setFb(kind, html) {
  const fb = $('#drill-fb');
  fb.className = 'feedback' + (kind ? ' ' + kind : '');
  fb.innerHTML = html;
  linkSquaresIn(fb);
}

function renderDrillBoard() {
  const c = drill.card;
  if (!c) return;
  const showing = drill.status === 'reveal' || drill.hinted
    ? { from: c.uci.slice(0, 2), to: c.uci.slice(2, 4) }
    : null;
  renderBoard($('#drill-board'), drill.chess, { orientation: c.side, sel: drill.sel, hint: showing });
  const arrow = $('#drill-arrow');
  if (showing) drawArrow(arrow, showing.from, showing.to, c.side, '#3E7A52');
  else if (drill.status === 'done' && drill.lastMove) drawArrow(arrow, drill.lastMove.from, drill.lastMove.to, c.side, '#3E7A52');
  else clearArrow(arrow);
}

function pctText(cardId) {
  const s = stats[cardId];
  const a = acc(s);
  return a === null ? '—' : Math.round(a * 100) + '%';
}

function loadCard(card) {
  loadCardRaw(card);
  linkSquaresIn($('#drill-ctx'));
  linkSquaresIn($('#drill-fb'));
}

function loadCardRaw(card) {
  drill.card = card;
  drill.chess = new Chess(card.fen);
  drill.sel = null;
  drill.wrong = 0;
  drill.hinted = false;
  drill.status = 'play';
  drill.lastMove = null;
  lastCardId = card.id;

  if (card.type === 'plan') {
    $('#drill-q').textContent = t('drill.q', sideName(card.side), bi(card.title));
    const s = stats[card.id];
    const seenTxt = s && s.c + s.w > 0 ? t('drill.history', s.c, s.c + s.w) : t('drill.new');
    $('#drill-stat').innerHTML = `${t('drill.set', drill.sessionOk, drill.sessionAll)} · <span class="streak">${seenTxt}</span>`;
    $('#drill-ctx').innerHTML = `<b>${bi(card.seqName)}</b> · move ${card.fullMove} — ${bi(card.question)}`;
    renderDrillBoard();
    renderPlanChoices(card);
    return;
  }

  $('#drill-q').textContent = t('drill.q', sideName(card.side), bi(card.title));
  const s = stats[card.id];
  const seenTxt = s && s.c + s.w > 0 ? t('drill.history', s.c, s.c + s.w) : t('drill.new');
  $('#drill-stat').innerHTML = `${t('drill.set', drill.sessionOk, drill.sessionAll)} · <span class="streak">${seenTxt}</span>`;
  const opp = card.oppPrev ? t('drill.opp', card.oppPrev) : '';
  $('#drill-ctx').innerHTML = `${t('drill.ctx', bi(card.seqName), card.fullMove)}${opp}${t('drill.ctxEnd')}`;
  setFb('', t('drill.fb.default'));
  renderDrillBoard();
}

function renderPlanChoices(card) {
  const fb = $('#drill-fb');
  fb.className = 'feedback';
  fb.innerHTML = `<span class="fb-title">${bi(card.question)}</span><div class="plan-choices"></div>`;
  const box = fb.querySelector('.plan-choices');
  card.choices.forEach((ch, i) => {
    const b = document.createElement('button');
    b.innerHTML = `${bi(ch.text)}`;
    b.addEventListener('click', () => {
      if (drill.status !== 'play') return;
      const ok = !!ch.correct;
      record(card.id, ok);
      drill.sessionAll++;
      if (ok) drill.sessionOk++;
      drill.status = ok ? 'done' : 'play';
      box.querySelectorAll('button').forEach((btn, j) => {
        const c = card.choices[j];
        if (c.correct) {
          btn.classList.add('correct');
          btn.innerHTML = `${bi(c.text)}<span class="why">${bi(c.why)}</span>`;
          linkSquaresIn(btn);
        } else if (j === i) {
          btn.classList.add('wrong');
          btn.innerHTML = `${bi(c.text)}<span class="why">${bi(c.why)}</span>`;
          linkSquaresIn(btn);
        }
      });
      $('#drill-stat').innerHTML = `${t('drill.set', drill.sessionOk, drill.sessionAll)} · <span class="streak">${t('drill.accuracy', pctText(card.id))}</span>`;
      if (ok) {
        setTimeout(() => {
          if (drill.status === 'done') nextCard();
        }, 2200);
      }
    });
    box.appendChild(b);
  });
  linkSquaresIn(fb);
}

function nextCard() {
  loadCard(pickCard());
}

function onSquareClick(sq) {
  if (!drill.card || drill.status !== 'play' || drill.card.type === 'plan') return;
  const chess = drill.chess;
  const piece = chess.get(sq);

  if (!drill.sel) {
    if (piece && piece.color === chess.turn()) {
      drill.sel = sq;
      renderDrillBoard();
    }
    return;
  }
  if (sq === drill.sel) {
    drill.sel = null;
    renderDrillBoard();
    return;
  }
  if (piece && piece.color === chess.turn()) {
    drill.sel = sq;
    renderDrillBoard();
    return;
  }

  let mv = null;
  try {
    mv = chess.move({ from: drill.sel, to: sq, promotion: 'q' });
  } catch {
    mv = null;
  }
  if (!mv) {
    setFb('bad', t('drill.fb.illegal'));
    drill.sel = null;
    renderDrillBoard();
    return;
  }

  const uci = mv.from + mv.to + (mv.promotion || '');
  const card = drill.card;

  if (uci === card.uci) {
    drill.sel = null;
    drill.status = 'done';
    drill.lastMove = { from: mv.from, to: mv.to };
    record(card.id, true);
    drill.sessionOk++;
    drill.sessionAll++;
    const note = card.note ? `<div style="margin-top:4px">${briefOf(card.note)}</div>` : '';
    setFb('ok', `<span class="fb-title">${t('drill.fb.correct')} ${mv.san}</span>${note}`);
    $('#drill-stat').innerHTML = `${t('drill.set', drill.sessionOk, drill.sessionAll)} · <span class="streak">${t('drill.accuracy', pctText(card.id))}</span>`;
    renderDrillBoard();
    setTimeout(() => {
      if (drill.status === 'done') nextCard();
    }, card.note ? 2600 : 1300);
    return;
  }

  chess.undo();
  drill.sel = null;
  drill.wrong++;
  record(card.id, false);
  drill.sessionAll++;
  if (drill.wrong >= 2) {
    drill.status = 'reveal';
    setFb('bad', t('drill.fb.reveal', card.san) + (card.note ? briefOf(card.note) : t('drill.fb.revealNote')));
  } else {
    setFb('bad', t('drill.fb.notquite'));
  }
  renderDrillBoard();
}

$('#drill-board').addEventListener('click', (e) => {
  const sq = e.target.closest('[data-sq]');
  if (sq) onSquareClick(sq.dataset.sq);
});
$('#drill-board').classList.add('playing');

$('#btn-hint').addEventListener('click', () => {
  if (!drill.card || drill.status !== 'play') return;
  drill.hinted = true;
  setFb('', t('drill.fb.hint'));
  renderDrillBoard();
});
$('#btn-skip').addEventListener('click', () => nextCard());
$('#btn-next').addEventListener('click', () => nextCard());

/* ═══════════ tutorial mode ═══════════ */
const tut = {
  lineId: null,
  ply: -1,
  chess: null,
  sel: null,
  revealed: false,
  mode: 'idle',
  lastMove: null,
};

function tutLine() {
  return tut.lineId ? lineById[tut.lineId] : null;
}
function tutSeq() {
  const line = tutLine();
  return line ? line.main : null;
}

function renderTutList() {
  const el = $('#tut-list');
  let html = '';
  for (const group of ['White', 'Black']) {
    html += `<div class="group-label">${group === 'White' ? t('side.white') : t('side.black')}</div>`;
    for (const line of REPERTOIRE.filter((l) => l.group === group)) {
      html += `<button class="line-item ${line.id === tut.lineId ? 'on' : ''}" data-id="${line.id}">
        <div class="t"><span>${bi(line.title)}</span>${tutDone[line.id] ? `<span class="badge">${t('line.badge.done')}</span>` : ''}</div>
        <div class="a">${bi(line.against)} · ${t('line.guided')}</div>
      </button>`;
    }
  }
  el.innerHTML = html;
  el.querySelectorAll('.line-item').forEach((b) =>
    b.addEventListener('click', () => startTutorial(b.dataset.id))
  );
}

function setTutFb(kind, html) {
  const fb = $('#tut-fb');
  fb.className = 'tut-feedback' + (kind ? ' ' + kind : '');
  fb.innerHTML = html;
  linkSquaresIn(fb);
}

function renderTutBoard() {
  const line = tutLine();
  if (!line || !tut.chess) return;
  let hint = null;
  if (tut.revealed && tut.mode === 'await') {
    const ch = new Chess();
    for (let i = 0; i < tut.ply; i++) ch.move(tutSeq().san[i]);
    const mv = ch.move(tutSeq().san[tut.ply]);
    if (mv) hint = { from: mv.from, to: mv.to };
  }
  renderBoard($('#tut-board'), tut.chess, {
    orientation: line.side,
    sel: tut.sel,
    hint,
    lastMove: tut.lastMove,
  });
  const arrow = $('#tut-arrow');
  if (hint) drawArrow(arrow, hint.from, hint.to, line.side, '#3E7A52');
  else if (tut.lastMove) drawArrow(arrow, tut.lastMove.from, tut.lastMove.to, line.side, '#A87A2C');
  else clearArrow(arrow);
}

function startTutorial(lineId) {
  tut.lineId = lineId;
  tut.ply = -1;
  tut.chess = new Chess();
  tut.sel = null;
  tut.revealed = false;
  tut.mode = 'intro';
  tut.lastMove = null;
  renderTutList();
  renderTutNarration();
  renderTutBoard();
  setTutFb('', t('tut.fb.read'));
  setTutButtons();
}

function renderTutNarration() {
  renderTutNarrationRaw();
  linkSquaresIn($('#tut-narr'));
}

function renderTutNarrationRaw() {
  const line = tutLine();
  const el = $('#tut-narr');
  if (!line) {
    el.innerHTML = `<span class="step-tag">${t('tut.pick')}</span><h4>${t('tut.pickH')}</h4>
      <div>${t('tut.pickB')}</div>`;
    return;
  }
  const seq = tutSeq();

  if (tut.mode === 'intro' || tut.ply < 0) {
    el.innerHTML = `
      <span class="step-tag">${t('tut.overview')} · ${line.group === 'White' ? t('side.white') : t('side.black')}</span>
      <h4>${bi(line.title)} <span style="color:var(--ink-3);font-weight:400">${t('detail.vs', bi(line.against))}</span></h4>
      <div style="color:var(--ink-2)">${bi(line.intro)}</div>
      <div class="callout purpose"><span class="tag">${t('callout.purpose')}</span>${bi(line.purpose)}</div>
      <div class="callout potential"><span class="tag">${t('callout.potential')}</span>${bi(line.potential)}</div>
      <div class="plan-box" style="margin-top:10px"><b>${t('plan.middlegame')}:</b> ${bi(line.plan)}</div>`;
    return;
  }

  if (tut.mode === 'done') {
    el.innerHTML = `
      <span class="step-tag">${t('tut.complete')}</span>
      <h4>${t('tut.completeH', bi(line.title))}</h4>
      <div style="color:var(--ink-2)">${t('tut.completeB')}</div>
      <div class="callout purpose"><span class="tag">${t('callout.purpose')}</span>${bi(line.purpose)}</div>
      <div class="callout potential"><span class="tag">${t('callout.potential')}</span>${bi(line.potential)}</div>`;
    return;
  }

  const san = seq.san[tut.ply];
  const yours = (tut.ply % 2 === 0 ? 'w' : 'b') === line.side;
  const noteEntry = seq.notes[tut.ply];
  const brief = noteEntry ? briefOf(noteEntry) : yours ? t('tut.note.yourDefault') : t('tut.note.oppDefault');
  const detail = noteEntry ? detailOf(noteEntry) : null;
  const note = detail ? `${brief}<div class="note-detail">${detail}</div>` : brief;
  const header = yours
    ? t('tut.moveTag', moveNo(tut.ply), true) + ' · ' + (tut.revealed || tut.mode === 'ready' ? san : t('tut.play'))
    : t('tut.moveTag', moveNo(tut.ply), false) + ' ' + san;
  let exitHtml = '';
  const exit = line.main.exit;
  if (exit && tut.ply + 1 >= exit.afterPly) {
    exitHtml = `<div class="exit-banner"><span class="step-tag">${getLang() === 'zh' ? '离开开局' : 'Theory ends'}</span>${bi(exit.text)}</div>`;
  }
  el.innerHTML = `
    <span class="step-tag">${header}</span>
    <h4>${yours ? (tut.revealed || tut.mode === 'ready' ? `▶ ${san}` : t('tut.play')) : t('tut.theyPlay', san)}</h4>
    <div style="color:var(--ink-2)">${note}</div>${exitHtml}`;
}

function setTutButtons() {
  const next = $('#tut-next');
  const show = $('#tut-show');
  if (tut.mode === 'intro') {
    next.textContent = t('btn.begin');
    next.disabled = false;
    show.disabled = true;
  } else if (tut.mode === 'await') {
    next.textContent = t('btn.continue');
    next.disabled = true;
    show.disabled = false;
  } else if (tut.mode === 'ready') {
    next.textContent = t('btn.continue');
    next.disabled = false;
    show.disabled = true;
  } else if (tut.mode === 'done') {
    next.textContent = t('btn.drillLine');
    next.disabled = false;
    show.disabled = true;
  } else {
    next.textContent = t('btn.continue');
    next.disabled = true;
    show.disabled = true;
  }
}

function tutGoNext() {
  const line = tutLine();
  const seq = tutSeq();
  if (!line) return;

  if (tut.mode === 'intro') {
    tut.ply = 0;
    beginPly();
    return;
  }
  if (tut.mode === 'ready') {
    const sideToMove = tut.ply % 2 === 0 ? 'w' : 'b';
    if (sideToMove === line.side) {
      tut.ply++;
    } else {
      const mv = tut.chess.move(seq.san[tut.ply]);
      if (mv) tut.lastMove = { from: mv.from, to: mv.to };
      tut.ply++;
    }
    if (tut.ply >= seq.san.length) {
      finishTut();
      return;
    }
    beginPly();
    return;
  }
  if (tut.mode === 'done') {
    const card = CARDS.find((c) => c.lineId === line.id && c.seqName === line.main.name);
    if (card) {
      showView('drill');
      loadCard(card);
    }
    return;
  }
}

function beginPly() {
  const line = tutLine();
  const seq = tutSeq();
  tut.sel = null;
  tut.revealed = false;
  const sideToMove = tut.ply % 2 === 0 ? 'w' : 'b';
  const yours = sideToMove === line.side;
  tut.mode = yours ? 'await' : 'ready';
  renderTutNarration();
  renderTutBoard();
  setTutButtons();
  if (yours) {
    setTutFb('', t('tut.fb.yourTurn'));
    $('#tut-board').classList.add('playing');
  } else {
    setTutFb('', t('tut.fb.opp', seq.san[tut.ply]));
    $('#tut-board').classList.remove('playing');
  }
}

function finishTut() {
  tut.mode = 'done';
  tutDone[tut.lineId] = true;
  saveTut();
  renderTutList();
  renderTutNarration();
  renderTutBoard();
  setTutButtons();
  setTutFb('ok', t('tut.fb.done'));
}

function onTutSquare(sq) {
  const line = tutLine();
  if (!line || tut.mode !== 'await') return;
  const chess = tut.chess;
  const piece = chess.get(sq);
  const seq = tutSeq();

  if (!tut.sel) {
    if (piece && piece.color === chess.turn()) {
      tut.sel = sq;
      renderTutBoard();
    }
    return;
  }
  if (sq === tut.sel) {
    tut.sel = null;
    renderTutBoard();
    return;
  }
  if (piece && piece.color === chess.turn()) {
    tut.sel = sq;
    renderTutBoard();
    return;
  }

  let mv = null;
  try {
    mv = chess.move({ from: tut.sel, to: sq, promotion: 'q' });
  } catch {
    mv = null;
  }
  if (!mv) {
    setTutFb('bad', t('tut.fb.illegal'));
    tut.sel = null;
    renderTutBoard();
    return;
  }

  const expected = seq.san[tut.ply];
  const uci = mv.from + mv.to + (mv.promotion || '');
  const ch2 = new Chess();
  for (let i = 0; i < tut.ply; i++) ch2.move(seq.san[i]);
  const expMv = ch2.move(expected);
  const expUci = expMv.from + expMv.to + (expMv.promotion || '');

  if (uci === expUci) {
    tut.sel = null;
    tut.mode = 'ready';
    tut.lastMove = { from: mv.from, to: mv.to };
    renderTutNarration();
    renderTutBoard();
    setTutButtons();
    setTutFb('ok', t('tut.fb.correct', mv.san));
  } else {
    chess.undo();
    tut.sel = null;
    renderTutBoard();
    setTutFb('bad', t('tut.fb.notLine'));
  }
}

$('#tut-board').addEventListener('click', (e) => {
  const sq = e.target.closest('[data-sq]');
  if (sq) onTutSquare(sq.dataset.sq);
});
$('#tut-show').addEventListener('click', () => {
  if (tut.mode !== 'await') return;
  tut.revealed = true;
  renderTutNarration();
  renderTutBoard();
  setTutFb('', t('tut.fb.show'));
});
$('#tut-restart').addEventListener('click', () => {
  if (!tut.lineId) return;
  startTutorial(tut.lineId);
});
$('#tut-next').addEventListener('click', () => tutGoNext());

/* ═══════════ progress ═══════════ */
function renderProgress() {
  let total = CARDS.length, seen = 0, ok = 0, bad = 0;
  for (const c of CARDS) {
    const s = stats[c.id];
    if (s && s.c + s.w > 0) { seen++; ok += s.c; bad += s.w; }
  }
  const a = ok + bad ? ok / (ok + bad) : null;
  const tuts = REPERTOIRE.filter((l) => tutDone[l.id]).length;
  $('#prog-stats').innerHTML = `
    <div class="item"><div class="n">${total}</div><div class="l">${t('prog.cards')}</div></div>
    <div class="item"><div class="n">${seen}</div><div class="l">${t('prog.seen')}</div></div>
    <div class="item"><div class="n">${a === null ? '—' : Math.round(a * 100) + '%'}</div><div class="l">${t('prog.acc')}</div></div>
    <div class="item"><div class="n">${tuts}/${REPERTOIRE.length}</div><div class="l">${t('prog.tuts')}</div></div>
  `;

  let bars = '';
  for (const line of REPERTOIRE) {
    const cs = CARDS.filter((c) => c.lineId === line.id);
    let s = 0, o = 0, b = 0;
    for (const c of cs) {
      const st = stats[c.id];
      if (st && st.c + st.w > 0) { s++; o += st.c; b += st.w; }
    }
    const pct = o + b ? Math.round((o / (o + b)) * 100) : 0;
    const sub = o + b ? t('prog.started', s, cs.length, pct) : t('prog.notStarted', cs.length);
    const gname = line.group === 'White' ? t('side.white') : t('side.black');
    bars += `<div class="bar-row">
      <div class="lbl"><span>${gname} · ${bi(line.title)}</span><span class="pct">${sub}</span></div>
      <div class="bar"><i style="width:${o + b ? pct : 0}%"></i></div>
    </div>`;
  }
  $('#prog-bars').innerHTML = bars;

  const weak = CARDS
    .filter((c) => {
      const s = stats[c.id];
      return s && s.c + s.w >= 1 && acc(s) < 1;
    })
    .sort(
      (x, y) =>
        acc(stats[x.id]) - acc(stats[y.id]) ||
        stats[y.id].c + stats[y.id].w - (stats[x.id].c + stats[x.id].w)
    )
    .slice(0, 8);
  if (!weak.length) {
    $('#weak-list').innerHTML = `<div class="empty-tip">${t('prog.weakEmpty')}</div>`;
  } else {
    $('#weak-list').innerHTML = weak
      .map((c) => {
        const s = stats[c.id];
        return `<div class="weak-item">
          <span>${bi(c.title)} · <b>${c.san}</b> <span style="color:var(--ink-3)">${bi(c.seqName)}</span></span>
          <span style="display:flex;gap:10px;align-items:center">
            <span class="w-acc">${s.c}/${s.c + s.w}</span>
            <button class="btn" data-card="${c.id}">${t('btn.retry')}</button>
          </span>
        </div>`;
      })
      .join('');
    $('#weak-list').querySelectorAll('button[data-card]').forEach((b) =>
      b.addEventListener('click', () => {
        showView('drill');
        loadCard(cardById[b.dataset.card]);
      })
    );
  }

  $('#road-list').innerHTML = ROADMAP.map(
    (r) => `<li><span class="wk">${bi(r.week)}</span><span>${bi(r.text)}</span></li>`
  ).join('');
}

/* ═══════════ boot ═══════════ */
applyI18n();

