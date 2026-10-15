// Caro-Kann Defense — deepened pilot content
export const CARO = {
  id: 'caro',
  side: 'b',
  group: 'Black',
  title: { en: 'Caro-Kann Defense', zh: '卡罗-卡恩防御' },
  against: { en: '1.e4', zh: '1.e4' },
  eco: 'B10–B19',
  intro: {
    en: 'The most solid answer to 1.e4: challenge the center with ...c6–...d5, and get your light-squared bishop outside the pawn chain.',
    zh: '对 1.e4 最坚固的回答：用 ...c6–...d5 挑战中心，并把白格象放到兵链外面。',
  },
  purpose: {
    en: 'Use this when you want fortress-like safety and few tactical disasters. The structure is the point: no weaknesses, excellent endgames, and a bishop that French players never get.',
    zh: '想要堡垒般的安全、少战术崩盘时用它。结构本身就是武器：没有弱点、残局优秀，还有一个法兰西棋手永远得不到的象。',
  },
  potential: {
    en: 'The ...c5 break dismantling d4; the bishop on f5 as a long-term asset; ...Nb4 and ...Rc8 pressure; endgames where Black’s structure outlives White’s.',
    zh: '...c5 拆掉 d4；f5 象是长期财富；...Nb4 与 ...Rc8 的压力；黑方结构比白方更能耗的残局。',
  },
  plan: {
    en: 'Advance main line: ...Bf5 first, then ...e6 lock, ...c5 break, ...Nc6. After ...cxd4 cxd4: ...Nb4 (or ...Qb6), ...Rc8 on the open file, then ...Be7/...Bd6 and ...O-O.',
    zh: '推进主线：先 ...Bf5，再 ...e6 关链，...c5 反击，...Nc6。...cxd4 cxd4 之后：...Nb4（或 ...Qb6）、...Rc8 占开放线，然后 ...Be7/...Bd6、...O-O。',
  },
  main: {
    name: { en: 'Advance Variation (3.e5)', zh: '推进变例（3.e5）' },
    drill: true,
    san: [
      'e4', 'c6', 'd4', 'd5', 'e5', 'Bf5', 'Nf3', 'e6', 'Be2', 'c5',
      'c3', 'Nc6', 'O-O', 'cxd4', 'cxd4', 'Nb4', 'Nc3', 'Rc8', 'a3', 'Na6',
      'Be3',
    ],
    notes: {
      1: {
        brief: { en: 'Prepare ...d5 with a bishop’s retreat kept.', zh: '准备 ...d5，给象留退路。' },
        detail: {
          en: '...c6 is the Caro signature: it supports ...d5 and leaves c7–c6–b7 as a home for the bishop later. Compare the French (...e6), where the bishop gets locked in.',
          zh: '...c6 是卡罗的签名：支撑 ...d5，还给象留了 c7-c6-b7 的退路。对比法兰西（...e6），象就被关死了。',
        },
      },
      3: {
        brief: { en: 'Challenge the center now.', zh: '现在挑战中心。' },
      },
      5: {
        brief: { en: 'The key move: bishop out BEFORE ...e6.', zh: '关键着法：象在 ...e6 之前出来。' },
        detail: {
          en: 'This is the whole point of the Caro. The bishop finds its best diagonal, and only then does ...e6 close the chain. Players who go ...e6 first are just playing a bad French.',
          zh: '这就是卡罗的全部意义。象先上最好的斜线，然后 ...e6 才关链。先走 ...e6 的人只是在下坏的法兰西。',
        },
      },
      7: {
        brief: { en: 'Chain closed; ...c5 is loaded.', zh: '链关好，...c5 上膛。' },
      },
      9: {
        brief: { en: 'The thematic break: hit the base (d4).', zh: '主题反击：攻击根基 d4。' },
        detail: {
          en: 'White’s e5 wedge is only strong if d4 is strong. ...c5 puts the question to it immediately — this is why we spent two moves on ...c6 and ...e6.',
          zh: '白方 e5 楔子强不强取决于 d4。...c5 立刻质问它——这正是我们花两步走 ...c6、...e6 的原因。',
        },
      },
      11: {
        brief: { en: 'Nc6: pile on d4.', zh: 'Nc6：围攻 d4。' },
      },
      13: {
        brief: { en: 'Exchange: fix the structure in your favour.', zh: '兑兵：把结构定型成对你有利。' },
        detail: {
          en: 'After ...cxd4 cxd4 the e5 pawn is a fixed target and the c-file opens for the rook. The classic Caro grind: pressure d4 and e5 forever.',
          zh: '...cxd4 cxd4 之后 e5 兵成为固定目标，c 线为车打开。经典卡罗式研磨：永远围攻 d4 和 e5。',
        },
      },
      15: {
        brief: { en: 'Nb4: the knight hits c2 and d3.', zh: 'Nb4：马踩 c2、d3。' },
        detail: {
          en: 'The b4 knight is a real nuisance: it eyes c2 (the classic ...Nc2 fork ideas) and forces White to spend time with a3 or Nc3. Note the f5 bishop keeps its diagonal — do not trade it for nothing.',
          zh: 'b4 马很讨厌：盯 c2（还有 ...Nc2 捉双的手段），逼白方花时间走 a3 或 Nc3。注意 f5 象的斜线还在——别白兑掉。',
        },
      },
      17: {
        brief: { en: 'Rc8: the open file is yours.', zh: 'Rc8：开放线归你。' },
      },
      19: {
        brief: { en: 'Na6: the knight keeps looking at c5/b4.', zh: 'Na6：马保持对 c5/b4 的关注。' },
        detail: {
          en: 'After a3 the knight drops to a6 — not a retreat but a reroute: ...Nc5 hits e4/b3, and ...b4 ideas keep the queenside flexible. The structure remains healthy.',
          zh: 'a3 之后马退 a6——不是撤退而是换路：...Nc5 打 e4/b3，...b4 也让后翼保持灵活。结构依旧健康。',
        },
      },
      20: {
        brief: { en: 'Be3: they complete development too.', zh: 'Be3：他也出完了。' },
      },
    },
    exit: {
      afterPly: 20,
      text: {
        en: 'Theory loosens here. Your plan: ...Be7 or ...Bd6, ...O-O, ...Qb6 or ...Nc5. If White consolidates the center (Nc3/Qd2), strike with ...b6–...Ba6 or ...f6 when ready.',
        zh: '谱到此为止。你的计划：...Be7 或 ...Bd6、...O-O、...Qb6 或 ...Nc5；若他巩固中心（Nc3/Qd2），就用 ...b6–...Ba6 或时机成熟时 ...f6 反击。',
      },
    },
  },
  sidelines: [
    {
      name: { en: '3.Nc3 Classical', zh: '3.Nc3 经典变例' },
      san: ['e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Bf5', 'Ng3', 'Bg6', 'h4', 'h6', 'Nf3', 'Nd7', 'h5', 'Bh7'],
      note: {
        en: 'The main move order: trade central pawns, bishop out anyway. After h4–h5 the bishop hides on h7 — it is safe and still active on the b1–h7 diagonal.',
        zh: '最常见次序：先兑中心兵，象照样出链外。h4–h5 之后象躲 h7——安全，还统治 b1–h7 斜线。',
      },
      drill: true,
    },
    {
      name: { en: '3.exd5 Exchange', zh: '3.exd5 交换变例' },
      san: ['e4', 'c6', 'd4', 'd5', 'exd5', 'cxd5', 'Bd3', 'Nc6', 'Nf3', 'Bg4', 'c3', 'e6', 'O-O', 'Bd6'],
      note: {
        en: 'A symmetrical structure where both sides can play: develop ...Nc6, ...Bg4, ...e6, ...Be7/...Bd6 and look for ...e5 to fully equalize.',
        zh: '结构对称、双方好下：...Nc6、...Bg4、...e6、...Be7/...Bd6 出子，找机会 ...e5 完全均衡。',
      },
      drill: true,
    },
    {
      name: { en: '2.Nc3 (Two Knights move order)', zh: '2.Nc3（双马次序）' },
      san: ['e4', 'c6', 'Nc3', 'd5', 'Nf3', 'dxe4', 'Nxe4', 'Bf5', 'Ng3', 'Bg6'],
      note: {
        en: 'They delay d4 to keep options: after ...d5 and ...dxe4 we are back in the Classical Caro with the bishop already out. Plans unchanged.',
        zh: '他推迟 d4 保留选择：...d5、...dxe4 后又回到经典卡罗，象照常出链。计划不变。',
      },
      drill: true,
    },
    {
      name: { en: '3.f3 Fantasy (club gambit)', zh: '3.f3 幻想弃兵（业余弃兵）' },
      san: ['e4', 'c6', 'd4', 'd5', 'f3', 'dxe4', 'fxe4', 'e5'],
      note: {
        en: 'They try to build a huge center. Punish the looseness: ...dxe4 fxe4 e5! strikes at once — ...Qh4+ and ...Nf6 ideas follow.',
        zh: '他想筑大中心。惩罚它的松动：...dxe4 fxe4 e5！立刻反击——接下来有 ...Qh4+、...Nf6。',
      },
      drill: true,
    },
    {
      name: { en: '4.h4 Advance sideline', zh: '4.h4 推进侧线' },
      san: ['e4', 'c6', 'd4', 'd5', 'e5', 'Bf5', 'h4', 'h5', 'c4', 'e6', 'Nc3'],
      note: {
        en: 'They grab space on the kingside early: ...h5 stops the pawn, then the usual ...c5 / ...Nd7 plans. The h5 pawn can be a target later with ...g6–...Bg7 ideas.',
        zh: '他早早抢王翼空间：...h5 顶住，然后照常 ...c5、...Nd7。将来 g6–...Bg7 后 h5 兵反而是目标。',
      },
    },
    {
      name: { en: 'Advance: 6.Be3 Qb6 main fight', zh: '推进变例 6.Be3 Qb6 主战场' },
      san: ['e4', 'c6', 'd4', 'd5', 'e5', 'Bf5', 'Nf3', 'e6', 'Be2', 'c5', 'Be3', 'Qb6', 'O-O', 'cxd4', 'Nxd4'],
      note: {
        en: 'A sharper move order where ...Qb6 hits d4 and b2 early. Note: after Nxd4 the d4 knight can be chased with ...Nc6–...Nxd4 or met with ...Ne7–...Nc6.',
        zh: '更尖锐的次序：...Qb6 早攻 d4 和 b2。注意 Nxd4 后可用 ...Nc6–...Nxd4 赶马，或 ...Ne7–...Nc6 应对。',
      },
    },
  ],
  mistakes: [
    {
      title: { en: '...e6 before ...Bf5 (French bishop)', zh: '先 ...e6 再想出象（法兰西悲剧）' },
      wrong: ['e4', 'c6', 'd4', 'd5', 'e5', 'e6', 'Nf3', 'Ne7'],
      punish: ['Nc3', 'Nd7', 'Be2', 'Nef5'],
      lesson: {
        en: 'Now your light-squared bishop is locked behind the pawn chain — the one thing the Caro exists to avoid. Play ...Bf5 (or ...Bg4) BEFORE ...e6, always.',
        zh: '白格象被锁死在兵链后——这恰恰是卡罗要避免的。永远先 ...Bf5（或 ...Bg4）再 ...e6。',
      },
    },
    {
      title: { en: '...c5 too early without ...Nc6', zh: '没 ...Nc6 就 ...c5' },
      wrong: ['e4', 'c6', 'd4', 'd5', 'e5', 'Bf5', 'Nf3', 'e6', 'Be2', 'c5', 'c3', 'cxd4'],
      punish: ['cxd4'],
      lesson: {
        en: 'Trading on d4 without a piece hitting it just opens the c-file for their rook. Add ...Nc6 first — pressure, then exchange on your terms.',
        zh: '没有子围攻就兑 d4，只是帮他开 c 线。先 ...Nc6 施压，再按你的节奏兑。',
      },
    },
    {
      title: { en: '5...Be7 too slow (miss ...c5)', zh: '5...Be7 太慢（错过 ...c5）' },
      wrong: ['e4', 'c6', 'd4', 'd5', 'e5', 'Bf5', 'Nf3', 'e6', 'Be2', 'Be7'],
      punish: ['O-O', 'Nf6', 'Nh4'],
      lesson: {
        en: 'Be7 is natural but passive: the Advance Caro wants ...c5 hitting d4 right away. After Be7 White simply castles and plays Nh4–f5 with a grip on the position, and you still need ...c5/...Nc6.',
        zh: 'Be7 自然但太被动：推进卡罗要立刻 ...c5 打 d4。Be7 之后白方从容易位、Nh4–f5 顺手掐住局面，而你还要补 ...c5/...Nc6。',
      },
    },
    {
      title: { en: 'Forgetting ...O-O and playing ...Rc8', zh: '没易位就走 ...Rc8' },
      wrong: ['e4', 'c6', 'd4', 'd5', 'e5', 'Bf5', 'Nf3', 'e6', 'Be2', 'c5', 'c3', 'Nc6', 'O-O', 'cxd4', 'cxd4', 'Rc8'],
      punish: ['Nc3', 'Nh6', 'Bf4', 'Be7', 'Na4', 'O-O'],
      lesson: {
        en: 'Development first: dark bishop and ...O-O before rook lifts. Notice the punish: White gets Nc3/Bf4/Na4 in with tempo while you untangle with ...Nh6/...Be7/...O-O.',
        zh: '先出子易位，再起车。看惩罚序列：白方 Nc3/Bf4/Na4 带先手摆好，你还在 ...Nh6/...Be7/...O-O 里拆线。',
      },
    },
    {
      title: { en: '...f6 break too early', zh: '过早 ...f6 反击' },
      wrong: ['e4', 'c6', 'd4', 'd5', 'e5', 'Bf5', 'Nf3', 'e6', 'Be2', 'c5', 'c3', 'Nc6', 'O-O', 'f6'],
      punish: ['exf6', 'Nxf6', 'Bd3'],
      lesson: {
        en: 'The ...f6 lever is real, but only with the king safe and pieces ready. Here White simply takes and plays Bd3 hitting your f5-bishop — the structure is ruined and your pieces are loose.',
        zh: '...f6 杠杆是真的，但要王安全、子力到位。这里白方直接吃，再 Bd3 攻击 f5 象——结构破碎，子力散乱。',
      },
    },
  ],
  plans: [
    {
      after: ['e4', 'c6', 'd4', 'd5', 'e5', 'Bf5', 'Nf3', 'e6', 'Be2', 'c5', 'c3', 'Nc6', 'O-O'],
      question: {
        en: 'White has castled; the center is under tension. What is Black’s plan?',
        zh: '白方已易位，中心张力还在。黑方的计划是什么？',
      },
      choices: [
        {
          text: { en: '...cxd4, then ...Nb4 or ...Qb6 + ...Rc8', zh: '...cxd4，然后 ...Nb4 或 ...Qb6 + ...Rc8' },
          correct: true,
          why: {
            en: 'Fix the structure: e5 becomes a target, the c-file opens for the rook, and the knight/queen add pressure on d4 and c2.',
            zh: '定型结构：e5 成目标，c 线为车打开，马和后对 d4、c2 施压。',
          },
        },
        {
          text: { en: '...cxd4, then ...b5 queenside play', zh: '...cxd4 后 ...b5 后翼推进' },
          correct: false,
          why: {
            en: 'b5 is a plan later, after development (...Be7/...O-O/...Qb6). Now it just loosens squares before your pieces are out.',
            zh: 'b5 是以后的计划（出完子、...Qb6 之后）。现在走只是子还没出就先松了格子。',
          },
        },
        {
          text: { en: '...f6 break immediately', zh: '立刻 ...f6 反击' },
          correct: false,
          why: {
            en: 'Too early: it opens the f-file toward your own uncastled king. The ...f6 break is real, but only after ...O-O and with pieces around.',
            zh: '太早：f 线打开对着自己未易位的王。...f6 反击是真的，但要等易位后、子力到位。',
          },
        },
        {
          text: { en: '...h5–...h4 attack', zh: '...h5–...h4 进攻' },
          correct: false,
          why: {
            en: 'Space on the wrong wing — White is not living on the kingside. Target d4, not empty squares.',
            zh: '进攻方向错了——白方并不住在王翼。目标是 d4，不是空格子。',
          },
        },
      ],
    },
    {
      after: ['e4', 'c6', 'd4', 'd5', 'e5', 'Bf5', 'Nf3', 'e6', 'Be2', 'c5', 'c3', 'Nc6', 'O-O', 'cxd4', 'cxd4', 'Nb4', 'Nc3', 'Rc8'],
      question: {
        en: 'White plays a3, attacking the b4-knight. Where does it go?',
        zh: '白走 a3 攻击 b4 马。马去哪里？',
      },
      choices: [
        {
          text: { en: '...Na6 — reroute toward c5', zh: '...Na6——改道去 c5' },
          correct: true,
          why: {
            en: 'The knight keeps options: ...Nc5 hits e4/b3, and the a6 square is temporary. Caro knights reroute; they never just “go back”.',
            zh: '马保留选择：...Nc5 打 e4/b3，a6 只是中转。卡罗的马是改道，不是逃跑。',
          },
        },
        {
          text: { en: '...Nc6 going back', zh: '...Nc6 退回' },
          correct: false,
          why: {
            en: 'Legal but empty: the knight has nothing to do on c6 anymore (that was its old home). You lose two tempi and the c5 route disappears.',
            zh: '合法但空虚：c6 是它的旧家，已经无事可做。白丢两先，去 c5 的路线也没了。',
          },
        },
        {
          text: { en: '...N4xa2 grabbing the pawn', zh: '...N4xa2 贪兵' },
          correct: false,
          why: {
            en: 'a2 is empty — the pawn went to a3! The knight lands on a2 attacking Ra1, but after Qa4+ or Ra2 it is trapped or driven back. The knight belongs on a6–c5.',
            zh: 'a2 是空的——兵已经走到 a3！马跳 a2 攻 a1 车，但 Qa4+ 或 Ra2 之后它被抓住或被赶回。马该走 a6–c5。',
          },
        },
      ],
    },
    {
      after: ['e4', 'c6', 'd4', 'd5', 'e5', 'Bf5', 'Nf3', 'e6', 'Be2', 'c5', 'c3', 'Nc6', 'O-O', 'cxd4', 'cxd4', 'Nb4', 'Nc3', 'Rc8', 'a3', 'Na6', 'Be3'],
      question: {
        en: 'White finishes development with Be3. What is Black’s plan now?',
        zh: '白方 Be3 出完子。黑方接下来的计划？',
      },
      choices: [
        {
          text: { en: '...Be7/...Bd6, ...O-O, then ...Qb6 or ...Nc5', zh: '...Be7/...Bd6、...O-O，然后 ...Qb6 或 ...Nc5' },
          correct: true,
          why: {
            en: 'Standard Caro improvements: king safe, dark bishop active, queen or knight pressuring d4/e4. Slow moves win these structures.',
            zh: '标准卡罗改善：王安全、黑格象活跃、后或马施压 d4/e4。这种结构靠慢着赢。',
          },
        },
        {
          text: { en: '...Qa5 pinning the knight', zh: '...Qa5 钉马' },
          correct: false,
          why: {
            en: 'Qa5 is offside — it pins nothing (the king is on g1) and a3 already covers b4. Improve with ...Be7/...O-O first.',
            zh: 'Qa5 偏离主战场——什么也没钉住（王在 g1），a3 已经覆盖 b4。先 ...Be7/...O-O 改善子力。',
          },
        },
        {
          text: { en: '...g5–...g4 attack now', zh: '现在 ...g5–...g4 进攻' },
          correct: false,
          why: {
            en: 'The Caro is not a wing-attack opening until the center is secure. Your king is still in the middle!',
            zh: '中心不稳时卡罗不是边翼进攻开局。你的王还在中间呢！',
          },
        },
      ],
    },
  ],
};
