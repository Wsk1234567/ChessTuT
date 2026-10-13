// 开局训练手册 — 应用逻辑
import { REPERTOIRE, ROADMAP } from './data.js';
import { Chess } from './chess.esm.js';

/* ═══════════ 基础工具 ═══════════ */
const $ = (sel) => document.querySelector(sel);
const GLYPH = { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' };
const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const lineById = Object.fromEntries(REPERTOIRE.map((l) => [l.id, l]));

/* ═══════════ 进度存储 ═══════════ */
const STORE_KEY = 'ot-progress-v1';
let stats = {};
try {
  stats = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
} catch {
  stats = {};
}
function saveStats() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(stats));
  } catch {
    /* 隐私模式下忽略 */
  }
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

/* ═══════════ 钻练卡片生成 ═══════════ */
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
          fullMove: Math.floor(i / 2) + 1,
        });
      }
    });
  }
  return cards;
}
const CARDS = buildCards();
const cardById = Object.fromEntries(CARDS.map((c) => [c.id, c]));

/* 卡片取序：未见过 → 正确率低 → 其余随机 */
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

/* ═══════════ 棋盘渲染 ═══════════ */
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

/**
 * 渲染棋盘。
 * opts: { orientation, lastMove:{from,to}, sel: sq, hint:{from,to} }
 */
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
      if (p) inner += `<span class="pc ${p.color === 'w' ? 'w' : 'b'}">${GLYPH[p.type]}</span>`;
      const visRow = ranks.indexOf(r), visCol = files.indexOf(f);
      if (visCol === 0) inner += `<span class="coord r">${r}</span>`;
      if (visRow === 7) inner += `<span class="coord f">${f}</span>`;
      html += `<div class="${cls.join(' ')}" data-sq="${name}">${inner}</div>`;
    }
  }
  el.innerHTML = html;
}

/* ═══════════ 视图切换 ═══════════ */
const views = { browse: $('#view-browse'), drill: $('#view-drill'), progress: $('#view-progress') };
let currentView = 'browse';
function showView(name) {
  currentView = name;
  for (const [k, v] of Object.entries(views)) v.classList.toggle('on', k === name);
  document.querySelectorAll('nav.tabs button').forEach((b) => b.classList.toggle('on', b.dataset.view === name));
  if (name === 'progress') renderProgress();
  if (name === 'drill' && !drill.card) nextCard();
}
document.querySelectorAll('nav.tabs button').forEach((b) => b.addEventListener('click', () => showView(b.dataset.view)));

/* ═══════════ 开局库浏览 ═══════════ */
const browse = { lineId: REPERTOIRE[0].id, seqIdx: 0, ply: 0 };

function currentSeq(b = browse) {
  const line = lineById[b.lineId];
  return b.seqIdx === 0 ? { name: line.main.name, san: line.main.san, notes: line.main.notes || {}, note: null } : line.sidelines[b.seqIdx - 1];
}

function renderLineList() {
  const el = $('#line-list');
  let html = '';
  for (const group of ['白棋', '黑棋']) {
    html += `<div class="group-label">${group}</div>`;
    for (const line of REPERTOIRE.filter((l) => l.group === group)) {
      const done = line.main.san.length;
      html += `<button class="line-item ${line.id === browse.lineId ? 'on' : ''}" data-id="${line.id}">
        <div class="t">${line.title}</div>
        <div class="a">${line.against} · ${done} 步主线</div>
      </button>`;
    }
  }
  el.innerHTML = html;
  el.querySelectorAll('.line-item').forEach((b) =>
    b.addEventListener('click', () => {
      browse.lineId = b.dataset.id;
      browse.seqIdx = 0;
      browse.ply = 0;
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
  const { ch, last, seq } = replayB();
  const line = lineById[browse.lineId];
  renderBoard($('#browse-board'), ch, { orientation: line.side, lastMove: last });
  const arrow = $('#browse-arrow');
  if (last) drawArrow(arrow, last.from, last.to, line.side, '#A87A2C');
  else clearArrow(arrow);
  $('#nav-ply').textContent =
    browse.ply === 0 ? '开局' : `第 ${Math.ceil(browse.ply / 2)} 回合 · ${browse.ply} 步`;

  // 着法列表高亮
  const mvEls = document.querySelectorAll('#detail .movelist .mv');
  mvEls.forEach((m) => m.classList.toggle('cur', Number(m.dataset.i) === browse.ply - 1));
}

function renderDetail() {
  const line = lineById[browse.lineId];
  const seq = currentSeq();
  const el = $('#detail');

  let switchHtml = `<div class="seq-switch">`;
  switchHtml += `<button class="${browse.seqIdx === 0 ? 'on' : ''}" data-seq="0">主线 · ${line.main.name}</button>`;
  line.sidelines.forEach((s, i) => {
    switchHtml += `<button class="${browse.seqIdx === i + 1 ? 'on' : ''}" data-seq="${i + 1}">${s.name}</button>`;
  });
  switchHtml += `</div>`;

  // 着法网格
  let ml = `<div class="movelist">`;
  const n = seq.san.length;
  for (let i = 0; i < n; i += 2) {
    ml += `<div class="no">${i / 2 + 1}.</div>`;
    ml += `<div class="mv ${browse.ply === i + 1 ? 'cur' : ''}" data-i="${i}">${seq.san[i]}</div>`;
    ml += i + 1 < n
      ? `<div class="mv ${browse.ply === i + 2 ? 'cur' : ''}" data-i="${i + 1}">${seq.san[i + 1]}</div>`
      : `<div class="mv empty"></div>`;
  }
  ml += `</div>`;

  // 注释
  let noteHtml = '';
  if (browse.ply === 0) {
    noteHtml = `<div class="note-box"><span class="tag">整体计划</span>${line.plan}</div>`;
  } else if (seq.notes[browse.ply - 1]) {
    noteHtml = `<div class="note-box"><span class="tag">这一步 · ${seq.san[browse.ply - 1]}</span>${seq.notes[browse.ply - 1]}</div>`;
  } else {
    let idx = -1;
    for (let i = browse.ply - 1; i >= 0; i--) {
      if (seq.notes[i]) { idx = i; break; }
    }
    if (idx >= 0) {
      noteHtml = `<div class="note-box"><span class="tag">要点 · ${seq.san[idx]}（第 ${Math.floor(idx / 2) + 1} 回合）</span>${seq.notes[idx]}</div>`;
    } else if (seq.note) {
      noteHtml = `<div class="note-box"><span class="tag">${seq.name}</span>${seq.note}</div>`;
    } else {
      noteHtml = `<div class="note-box"><span class="tag">提示</span>用 ▶ 逐步推演，重点着法都有注释。整体计划见下方。</div>`;
    }
  }

  el.innerHTML = `
    <div class="meta-row">
      <span class="chip ${line.side === 'w' ? 'side-w' : 'side-b'}">${line.group} · ${line.title}</span>
      <span class="chip">vs ${line.against}</span>
      <span class="chip">ECO ${line.eco}</span>
    </div>
    <p class="intro">${line.intro}</p>
    ${switchHtml}
    <h3>着法</h3>
    ${ml}
    ${noteHtml}
    <div class="plan-box"><b>中局计划：</b>${line.plan}</div>
  `;

  el.querySelectorAll('.seq-switch button').forEach((b) =>
    b.addEventListener('click', () => {
      browse.seqIdx = Number(b.dataset.seq);
      browse.ply = 0;
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

/* ═══════════ 钻练模式 ═══════════ */
const drill = {
  card: null,
  chess: null,
  sel: null,
  wrong: 0,
  hinted: false,
  status: 'play', // play | done | reveal
  sessionOk: 0,
  sessionAll: 0,
};

function setFb(kind, html) {
  const fb = $('#drill-fb');
  fb.className = 'feedback' + (kind ? ' ' + kind : '');
  fb.innerHTML = html;
}

function renderDrillBoard() {
  const c = drill.card;
  if (!c) return;
  renderBoard($('#drill-board'), drill.chess, {
    orientation: c.side,
    sel: drill.sel,
    hint: drill.status === 'reveal' || drill.hinted
      ? { from: c.uci.slice(0, 2), to: c.uci.slice(2, 4) }
      : null,
  });
  const arrow = $('#drill-arrow');
  if (drill.status === 'reveal' || drill.hinted) {
    drawArrow(arrow, c.uci.slice(0, 2), c.uci.slice(2, 4), c.side, '#3E7A52');
  } else if (drill.status === 'done') {
    const mv = drill.lastMove;
    if (mv) drawArrow(arrow, mv.from, mv.to, c.side, '#3E7A52');
  } else {
    clearArrow(arrow);
  }
}

function loadCard(card) {
  drill.card = card;
  drill.chess = new Chess(card.fen);
  drill.sel = null;
  drill.wrong = 0;
  drill.hinted = false;
  drill.status = 'play';
  drill.lastMove = null;
  lastCardId = card.id;

  $('#drill-q').textContent = `${card.side === 'w' ? '白' : '黑'}方走 · ${card.title}`;
  const s = stats[card.id];
  const seenTxt = s && s.c + s.w > 0 ? `历史 ${s.c}/${s.c + s.w}` : '未练过';
  $('#drill-stat').innerHTML =
    `本组 ${drill.sessionOk}/${drill.sessionAll} · <span class="streak">${seenTxt}</span>`;
  const opp = card.oppPrev ? `对手上一步 <b>${card.oppPrev}</b>，` : '';
  $('#drill-ctx').innerHTML =
    `<b>${card.seqName}</b> · 第 ${card.fullMove} 回合 —— ${opp}轮到你走。想好整步（起点和终点）再点棋子。`;
  setFb('', '点击棋子走出你认为正确的着法。');
  renderDrillBoard();
}

function nextCard() {
  loadCard(pickCard());
}

function onSquareClick(sq) {
  if (!drill.card || drill.status !== 'play') return;
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

  // 尝试走子
  let mv = null;
  try {
    mv = chess.move({ from: drill.sel, to: sq, promotion: 'q' });
  } catch {
    mv = null;
  }
  if (!mv) {
    setFb('bad', '<span class="fb-title">不合法</span>这步走不出来，换个想法。');
    drill.sel = null;
    renderDrillBoard();
    return;
  }

  const uci = mv.from + mv.to + (mv.promotion || '');
  const card = drill.card;

  if (uci === card.uci) {
    // 正确
    drill.sel = null;
    drill.status = 'done';
    drill.lastMove = { from: mv.from, to: mv.to };
    record(card.id, true);
    drill.sessionOk++;
    drill.sessionAll++;
    const note = card.note ? `<div style="margin-top:4px">${card.note}</div>` : '';
    setFb('ok', `<span class="fb-title">正确！ ${mv.san}</span>${note}`);
    $('#drill-stat').innerHTML =
      `本组 ${drill.sessionOk}/${drill.sessionAll} · <span class="streak">正确率 ${pctText(card.id)}</span>`;
    renderDrillBoard();
    setTimeout(() => { if (drill.status === 'done') nextCard(); }, card.note ? 2600 : 1300);
    return;
  }

  // 合法但不是推荐着法
  chess.undo();
  drill.sel = null;
  drill.wrong++;
  record(card.id, false);
  drill.sessionAll++;
  if (drill.wrong >= 2) {
    drill.status = 'reveal';
    setFb(
      'bad',
      `<span class="fb-title">正确着法是 ${card.san}</span>` +
      (card.note ? card.note : '把这步收进你的开局笔记，稍后回来重练。')
    );
    renderDrillBoard();
  } else {
    setFb('bad', `<span class="fb-title">不是这步</span>再想想——这局已经错 1 次，再错一次会亮出答案。`);
    renderDrillBoard();
  }
}

function pctText(cardId) {
  const s = stats[cardId];
  const a = acc(s);
  if (a === null) return '—';
  return Math.round(a * 100) + '%';
}

$('#drill-board').addEventListener('click', (e) => {
  const sq = e.target.closest('[data-sq]');
  if (sq) onSquareClick(sq.dataset.sq);
});
$('#drill-board').classList.add('playing');

$('#btn-hint').addEventListener('click', () => {
  if (!drill.card || drill.status !== 'play') return;
  drill.hinted = true;
  setFb('', '<span class="fb-title">提示已亮出</span>箭头指向推荐着法——试着理解为什么，再点它。');
  renderDrillBoard();
});
$('#btn-skip').addEventListener('click', () => nextCard());
$('#btn-next').addEventListener('click', () => nextCard());

/* ═══════════ 进度页 ═══════════ */
function lineCards(lineId) {
  return CARDS.filter((c) => c.lineId === lineId);
}

function renderProgress() {
  let total = CARDS.length, seen = 0, ok = 0, bad = 0;
  for (const c of CARDS) {
    const s = stats[c.id];
    if (s && s.c + s.w > 0) { seen++; ok += s.c; bad += s.w; }
  }
  const a = ok + bad ? ok / (ok + bad) : null;
  $('#prog-stats').innerHTML = `
    <div class="item"><div class="n">${total}</div><div class="l">卡片总数</div></div>
    <div class="item"><div class="n">${seen}</div><div class="l">已练卡片</div></div>
    <div class="item"><div class="n">${a === null ? '—' : Math.round(a * 100) + '%'}</div><div class="l">总正确率</div></div>
    <div class="item"><div class="n">${ok + bad}</div><div class="l">累计作答</div></div>
  `;

  let bars = '';
  for (const line of REPERTOIRE) {
    const cs = lineCards(line.id);
    let s = 0, o = 0, b = 0;
    for (const c of cs) {
      const st = stats[c.id];
      if (st && st.c + st.w > 0) { s++; o += st.c; b += st.w; }
    }
    const pct = o + b ? Math.round((o / (o + b)) * 100) : 0;
    const sub = o + b ? `${s}/${cs.length} 卡 · 正确率 ${pct}%` : `${cs.length} 卡 · 尚未开始`;
    bars += `<div class="bar-row">
      <div class="lbl"><span>${line.group} · ${line.title}</span><span class="pct">${sub}</span></div>
      <div class="bar"><i style="width:${o + b ? pct : 0}%"></i></div>
    </div>`;
  }
  $('#prog-bars').innerHTML = bars;

  // 薄弱卡片
  const weak = CARDS
    .filter((c) => { const s = stats[c.id]; return s && s.c + s.w >= 1 && acc(s) < 1; })
    .sort((x, y) => acc(stats[x.id]) - acc(stats[y.id]) || stats[y.id].c + stats[y.id].w - stats[x.id].c - stats[x.id].w)
    .slice(0, 8);
  if (!weak.length) {
    $('#weak-list').innerHTML = `<div class="empty-tip">还没有错题记录。先去钻练刷一轮，错题会自动汇总到这里。</div>`;
  } else {
    $('#weak-list').innerHTML = weak
      .map((c) => {
        const s = stats[c.id];
        return `<div class="weak-item">
          <span>${c.title} · <b>${c.san}</b> <span style="color:var(--ink-3)">${c.seqName}</span></span>
          <span style="display:flex;gap:10px;align-items:center">
            <span class="w-acc">${s.c}/${s.c + s.w}</span>
            <button class="btn" data-card="${c.id}">重练</button>
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

  $('#road-list').innerHTML = ROADMAP.map((r) => `<li><span class="wk">${r.week}</span><span>${r.text}</span></li>`).join('');
}

/* ═══════════ 启动 ═══════════ */
renderLineList();
renderDetail();
renderBrowseBoard();

