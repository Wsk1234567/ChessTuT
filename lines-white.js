// White repertoire — bilingual teaching content ({en, zh} fields)
export const WHITE_LINES = [
  {
    id: 'italian',
    side: 'w',
    group: 'White',
    title: { en: 'Italian Game', zh: '意大利开局' },
    against: { en: '1...e5', zh: '1...e5' },
    eco: 'C50–C54',
    intro: {
      en: 'The most classical wing opening: your bishop stares at f7, and the c3–d3 quiet system develops everything before opening the center.',
      zh: '最经典的王翼开局：白象直指 f7，c3–d3 安静体系先出完子再打开中心。',
    },
    purpose: {
      en: 'Use this when you want a solid, low-theory game with clear plans. Ideal for club players: few forced lines, natural development, and you never fall into prepared novelties.',
      zh: '适合想要局面扎实、理论量小、计划清晰的时候。业余赛场利器：强制变化少、出子自然，不容易掉进对手准备的飞刀。',
    },
    potential: {
      en: 'Pressure on f7 and e5; a future d3–d4 break in the center; regrouping knights via Nbd2–f1–g3; a kingside attack with f2–f4–f5 once your rook sits on e1.',
      zh: '对 f7 和 e5 的压力；将来 d3–d4 冲中心；马经 Nbd2–f1–g3 调运；车占 e1 后 f2–f4–f5 的王翼进攻。',
    },
    plan: {
      en: 'Development order: Nf3, Bc4, c3, d3, castle, Re1. Then fight for e4/e5, swing the knight to g3, and open the center with d4 when ready.',
      zh: '出子顺序：Nf3、Bc4、c3、d3、易位、Re1。然后争夺 e4/e5，马调 g3，时机成熟用 d4 打开中心。',
    },
    main: {
      name: { en: 'Quiet System (Giuoco Pianissimo)', zh: '安静体系（Giuoco Pianissimo）' },
      drill: true,
      san: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd3', 'd6', 'O-O', 'O-O', 'Re1'],
      notes: {
        0: { en: 'Claim the center and open lines for the queen and bishop.', zh: '占领中心，打开后和象的通路。' },
        2: { en: 'Develops with tempo — the knight attacks e5.', zh: '马跳出，同时攻击 e5——带先手的发展。' },
        4: { en: 'The Italian bishop: aimed straight at the soft f7 square.', zh: '意大利象：直指黑王最弱的 f7。' },
        6: { en: 'The soul of the system: prepare a later d4, and give the queen the c2 square.', zh: '本体系灵魂：准备将来 d4，也给后留出 c2 格。' },
        8: { en: 'Quiet center. Don’t rush d4 — finish development first.', zh: '安静中心。不急于 d4，先把子力摆好。' },
        10: { en: 'King safety before any adventure.', zh: '先王车易位，王安全优先于一切。' },
        12: { en: 'Rook supports the e-pawn and eyes the e-file; next comes Nbd2–f1–g3.', zh: '车占 e 线支撑 e4；下一步 Nbd2–f1–g3 调马。' },
      },
    },
    sidelines: [
      {
        name: { en: '3...Nf6 (Two Knights)', zh: '3...Nf6（双马防御）' },
        san: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6', 'd3', 'Bc5', 'c3', 'd6', 'O-O'],
        note: {
          en: 'They counterattack e4 early: just play 4.d3 and return to the same quiet system. Avoid the wild Ng5 lines until you want them.',
          zh: '对手抢先出马盯 e4：走 4.d3 回到安静体系即可。在想下尖锐变化前，先避开 Ng5 的复杂理论。',
        },
      },
      {
        name: { en: '3...Be7 (Hungarian)', zh: '3...Be7（匈牙利防御）' },
        san: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Be7', 'd3', 'Nf6', 'O-O', 'O-O', 'Re1', 'd6'],
        note: {
          en: 'They play solid and passive: same setup, you keep more space and freer pieces.',
          zh: '对手收象求稳：照常摆阵，你的空间更好、子力更活跃。',
        },
      },
      {
        name: { en: '1...e6 (French) — Advance', zh: '1...e6（法兰西）推进变例' },
        san: ['e4', 'e6', 'd4', 'd5', 'e5'],
        note: {
          en: 'Against the French: take space with e5, then c3, Nf3, Bd3. Watch ...c5–...Qb6 hitting d4.',
          zh: '对法兰西：e5 抢空间，接着 c3、Nf3、Bd3。注意对手 ...c5–...Qb6 攻击 d4。',
        },
      },
      {
        name: { en: '1...c6 (Caro-Kann) — Advance', zh: '1...c6（卡罗-卡恩）推进变例' },
        san: ['e4', 'c6', 'd4', 'd5', 'e5'],
        note: {
          en: 'Same Advance structure: c3, Nf3, Bd3. Their light-squared bishop is the long-term problem you keep.',
          zh: '同样的推进结构：c3、Nf3、Bd3。他的白格象出不来，是你的长期优势。',
        },
      },
    ],
  },

  {
    id: 'gp',
    side: 'w',
    group: 'White',
    title: { en: 'Grand Prix Attack', zh: '大错开局（Grand Prix）' },
    against: { en: '1...c5 (Sicilian)', zh: '1...c5（西西里）' },
    eco: 'B20–B21',
    intro: {
      en: 'The simplest anti-Sicilian: push f4, swing the queen to h4, and attack before theory ever begins.',
      zh: '对抗西西里最省心的武器：冲 f 兵、后调 h4，在对手理论开始之前就发起进攻。',
    },
    purpose: {
      en: 'Use this when you want to skip Sicilian theory entirely. Your setup is fixed from move 3, so memorization is minimal and the attacking plan is automatic.',
      zh: '想完全绕开西西里理论时用它。第 3 步起套路固定，几乎不用背谱，进攻计划自动执行。',
    },
    potential: {
      en: 'A direct kingside assault: f4–f5 to rip open the f-file, Qh4 eyeing h7, Ng5/Rf3–h3 doubling on the king. Black often collapses under pressure they have never studied.',
      zh: '直接的王翼总攻：f4–f5 撕开 f 线，Qh4 瞄 h7，Ng5 或 Rf3–h3 叠加火力。对手常在没研究过的压力下崩盘。',
    },
    plan: {
      en: 'Routine: Nc3, f4, Nf3, d3, Be2, castle, Qe1–Qh4. Then f5 or Rf3–h3 with everything aimed at g7/h7.',
      zh: '固定套路：Nc3、f4、Nf3、d3、Be2、易位、Qe1–Qh4。然后 f5 或 Rf3–h3，全部火力对准 g7/h7。',
    },
    main: {
      name: { en: 'Classic attacking recipe', zh: '经典进攻套路' },
      drill: true,
      san: ['e4', 'c5', 'Nc3', 'Nc6', 'f4', 'g6', 'Nf3', 'Bg7', 'd3', 'd6', 'Be2', 'Nf6', 'O-O', 'O-O', 'Qe1', 'a6', 'Qh4'],
      notes: {
        2: { en: 'Against the Sicilian, Nc3 keeps the f-pawn road open for f4.', zh: '对西西里，Nc3 给 f 兵让路，准备 f4。' },
        4: { en: 'The Grand Prix move: f4 aims at f5 or helps the Qe1–h4 lift.', zh: '大错核心：f 兵冲锋，目标 f5 或配合 Qe1–h4 调后。' },
        8: { en: 'd3 supports the center and opens the c1-bishop.', zh: 'd3 补中心，c1 象打开斜线。' },
        10: { en: 'Develop the bishop first (it must not block the f-pawn), then castle.', zh: '象先出来（别挡 f 兵的路），再易位。' },
        12: { en: 'Safety first — attacks only work with a castled king.', zh: '先易位再进攻——王没安全时别全军出击。' },
        14: { en: 'The queen starts the lift to h4.', zh: '后准备经 e1 调往 h4。' },
        16: { en: 'Classic Qh4! Next: f5, Ng5, or Rf3–h3 — everything targets g7/h7.', zh: '经典 Qh4！下一步 f5、Ng5 或 Rf3–h3，全部冲着 g7/h7。' },
      },
    },
    sidelines: [
      {
        name: { en: '2...e6', zh: '2...e6 应法' },
        san: ['e4', 'c5', 'Nc3', 'e6', 'f4', 'd5', 'exd5', 'exd5', 'd4', 'Nf6', 'Nf3', 'Be7'],
        note: {
          en: 'They strike in the center early: take, play d4, and continue with normal development — your f-pawn space edge remains.',
          zh: '对手早早在中心动手：兑掉后走 d4，照常出子——f 兵的空间优势仍在。',
        },
      },
      {
        name: { en: '2...Nc6 with ...e6', zh: '2...Nc6 转 ...e6' },
        san: ['e4', 'c5', 'Nc3', 'Nc6', 'f4', 'e6', 'Nf3', 'Nf6', 'Bb5'],
        note: {
          en: 'They skip ...g6: the plan does not change. Bb5 pins the c6 knight and pressures e6/d5.',
          zh: '对手不出侧象：计划完全不变。Bb5 钉住 c6 马，给 e6/d5 施压。',
        },
      },
    ],
  },

  {
    id: 'london',
    side: 'w',
    group: 'White',
    title: { en: 'London System', zh: '伦敦体系' },
    against: { en: '1.d4 (as White)', zh: '1.d4（白方开局）' },
    eco: 'D02',
    intro: {
      en: 'One system to answer everything Black plays after your 1.d4: Bf4–e3–Nf3–Bd3, every game.',
      zh: '一套体系应对黑方对 1.d4 的所有走法：Bf4–e3–Nf3–Bd3，每局都一样。',
    },
    purpose: {
      en: 'Use this when you want zero theory against the Nimzo, King’s Indian, Dutch — anything. One setup, one plan, endless practice value.',
      zh: '想零理论应对尼姆佐、王翼印度、荷兰——任何体系时用它。一套阵型、一个计划，练习价值极高。',
    },
    potential: {
      en: 'A rock-solid center with a dangerous bishop on f4; e3–e4 or c4–c5 pawn breaks; a real kingside attack down the b1–h7 diagonal once Bd3 and Qe2 are in place.',
      zh: '坚固的中心加危险的 f4 象；e3–e4 或 c4–c5 冲兵；Bd3、Qe2 就位后沿 b1–h7 斜线的王翼进攻。',
    },
    plan: {
      en: 'Order: Bf4 (before e3!), e3, Nf3, h3 (a loft for the bishop), Bd3, castle. Then c3, Nbd2, Re1, and expand with e4 or c4.',
      zh: '顺序：Bf4（先于 e3！）、e3、Nf3、h3（给象留退路）、Bd3、易位。然后 c3、Nbd2、Re1，用 e4 或 c4 撑开。',
    },
    main: {
      name: { en: 'Main setup', zh: '主线结构' },
      drill: true,
      san: ['d4', 'd5', 'Bf4', 'Nf6', 'e3', 'e6', 'Nf3', 'Be7', 'h3', 'O-O', 'Bd3', 'Nbd7', 'O-O'],
      notes: {
        2: { en: 'The London signature: develop the bishop outside the pawn chain first.', zh: '伦敦标志：象先出到兵链外面。' },
        6: { en: 'Nf3 controls e5 and supports the bishop.', zh: 'Nf3 控制 e5，与象呼应。' },
        8: { en: 'h3 is insurance — against ...Nh5 the bishop drops back to h2 and keeps the diagonal.', zh: 'h3 是保险：对手 ...Nh5 时象退 h2 继续统治大斜线。' },
        10: { en: 'Bd3 points at h7; the battery is aimed at their king.', zh: 'Bd3 锁准 h7，象后火力对准黑王。' },
        12: { en: 'Development complete: c3, Nbd2, Qe2, Re1, then e3–e4 to open the center.', zh: '出子完成：c3、Nbd2、Qe2、Re1，然后 e3–e4 打开中心。' },
      },
    },
    sidelines: [
      {
        name: { en: '1...Nf6', zh: '1...Nf6 应法' },
        san: ['d4', 'Nf6', 'Bf4', 'e6', 'e3', 'd5', 'Nf3', 'Be7', 'h3', 'O-O', 'Bd3'],
        note: {
          en: 'Move order changes, idea does not: bishop, e3, knight, Bd3, castle.',
          zh: '顺序微调，方子不变：象、e3、马、Bd3、易位。',
        },
      },
      {
        name: { en: '1...c5', zh: '1...c5 应法' },
        san: ['d4', 'c5', 'd5', 'Nf6', 'c4', 'e6', 'Nc3', 'exd5', 'cxd5', 'g6'],
        note: {
          en: 'They challenge with c5: take space with d5, support it with c4/Nc3, then use the extra space as usual.',
          zh: '对手 c5 反击：d5 占空间，c4/Nc3 撑住，然后照常利用空间优势。',
        },
      },
      {
        name: { en: '1...f5 (Dutch)', zh: '1...f5（荷兰防御）' },
        san: ['d4', 'f5', 'Bf4', 'Nf6', 'e3', 'e6', 'Nf3', 'Be7', 'Bd3'],
        note: {
          en: 'Against the Dutch: normal London setup. Their kingside is loosened — the e4 break will hit hard.',
          zh: '对荷兰：照常伦敦结构。他王前变松，e4 一冲会很痛。',
        },
      },
    ],
  },

  {
    id: 'ruy',
    side: 'w',
    group: 'White',
    title: { en: 'Ruy López (Spanish)', zh: '西班牙开局（Ruy López）' },
    against: { en: '1...e5', zh: '1...e5' },
    eco: 'C60–C99',
    intro: {
      en: 'The most respected opening in chess: 3.Bb5 puts lasting pressure on the e5 pawn’s defender and builds a long-term, classical squeeze.',
      zh: '国际象棋最受推崇的开局：3.Bb5 长期施压 e5 的保护子，形成经典的持久挤压。',
    },
    purpose: {
      en: 'Use this when you want rich, strategic middlegames and a repertoire that scales with your level. Unlike the Italian, the Ruy keeps tension for 20+ moves.',
      zh: '想要内涵丰富、讲战略的中局，且谱系能随水平成长时用它。和意大利不同，西班牙的张力能保持 20 步以上。',
    },
    potential: {
      en: 'The c3–d4 central break at the right moment; knight tours (Nbd2–f1–g3 or Nb1–d2–c4); kingside expansion with Nf1–g3, f4, and a slow h-file attack. Top players win Ruy endgames — the pressure never ends.',
      zh: '恰当时机的 c3–d4 冲中心；马的调运（Nbd2–f1–g3 或 Nb1–d2–c4）；Nf1–g3、f4 与 h 线的慢攻王翼。顶尖棋手赢西班牙残局——压力从不停止。',
    },
    plan: {
      en: 'Play Bb5–Ba4–Bb3 (keep the bishop!), O-O, Re1, c3, h3, d4 when prepared. Then reroute knights and expand.',
      zh: '走 Bb5–Ba4–Bb3（留住象！）、O-O、Re1、c3、h3，准备好就 d4。然后调马、扩张。',
    },
    main: {
      name: { en: 'Main line (Closed Spanish)', zh: '主线（闭式西班牙）' },
      drill: true,
      san: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Ba4', 'Nf6', 'O-O', 'Be7', 'Re1', 'b5', 'Bb3', 'O-O', 'c3', 'd6', 'h3'],
      notes: {
        4: { en: 'The Spanish bishop pins the knight — indirectly pressuring e5.', zh: '西班牙象钉住马，间接施压 e5。' },
        6: { en: 'Retreat to a4 and keep the pin. Trading on c6 is a different (good but easier) system.', zh: '退 a4 保持牵制。在 c6 兑子是另一套（也好但更简单的）体系。' },
        8: { en: 'Castle before anything else.', zh: '先易位，再想别的。' },
        10: { en: 'Re1 supports e4 and prepares d4.', zh: 'Re1 支撑 e4，为 d4 做准备。' },
        12: { en: 'They push b5 to free the bishop: step to b3 and keep the diagonal.', zh: '对手 b5 送象出链：走到 b3，守住斜线。' },
        14: { en: 'c3 is the Ruy’s key move: d4 is coming, and the bishop keeps b3.', zh: 'c3 是西班牙的关键：d4 即将到来，象稳坐 b3。' },
        16: { en: 'h3 preserves the bishop against ...Bg4 pins and prepares a kingside lift later.', zh: 'h3 保象防 ...Bg4 牵制，也为将来王翼加压留后路。' },
      },
    },
    sidelines: [
      {
        name: { en: 'Berlin (3...Nf6) — avoid the endgame', zh: '柏林防马（3...Nf6）——避开和棋变例' },
        san: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'Nf6', 'O-O', 'Nxe4', 'd4', 'Nd6', 'Bxc6', 'dxc6', 'dxe5', 'Nf5', 'Qxd8+', 'Kxd8'],
        note: {
          en: 'If you ever enter the famous Berlin Wall endgame: equal material, opposite-coloured bishops. 4.d3 (transposing to the Italian structure) is the practical club weapon instead.',
          zh: '著名的柏林墙残局：子力相等、异色格象。实战武器是 4.d3（转入意大利结构），避开这堵墙。',
        },
        drill: true,
      },
      {
        name: { en: 'Exchange Variation (4.Bxc6)', zh: '兑换变例（4.Bxc6）' },
        san: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5', 'a6', 'Bxc6', 'dxc6', 'O-O', 'Bd6', 'd4', 'exd4', 'Nxd4', 'Ne7'],
        note: {
          en: 'Simpler and positional: Black gets the bishop pair, you get easy development and an e5 outpost. Great when you want a clean game.',
          zh: '更简单更局面型：黑得双象，你得顺畅出子和 e5 前哨。想下干净一局时很好用。',
        },
        drill: true,
      },
    ],
  },

  {
    id: 'scotch',
    side: 'w',
    group: 'White',
    title: { en: 'Scotch Game', zh: '苏格兰开局' },
    against: { en: '1...e5', zh: '1...e5' },
    eco: 'C44–C45',
    intro: {
      en: 'Kasparov’s weapon: 3.d4 immediately opens the center and forces Black to know concrete theory — many club opponents do not.',
      zh: '卡斯帕罗夫的武器：3.d4 立刻打开中心，逼黑方掌握具体理论——业余对手多半不会。',
    },
    purpose: {
      en: 'Use this when you want active, open games and to punish passive play. Less maneuvering than the Ruy, more direct tactics.',
      zh: '想要积极开放的棋、惩罚消极走法时用它。比西班牙少调运、多直接战术。',
    },
    potential: {
      en: 'A space edge with e5 driving a wedge; the half-open d- and e-files; knight pressure on c6 and d5 weaknesses after ...bxc6; quick queenside or central play with c4.',
      zh: 'e5 打楔子的空间优势；半开放 d 线和 e 线；...bxc6 之后对 c6/d5 弱点的马压力；c4 快速展开后翼或中心。',
    },
    plan: {
      en: 'Take on d4, exchange knights on c6, push e5, and bring the queen to e2 to support c4. Open the position while their king is still stuck.',
      zh: '吃回 d4、在 c6 兑马、推 e5、后到 e2 支撑 c4。趁他王还没安全就打开局面。',
    },
    main: {
      name: { en: 'Main line (Mieses)', zh: '主线（Mieses）' },
      drill: true,
      san: ['e4', 'e5', 'Nf3', 'Nc6', 'd4', 'exd4', 'Nxd4', 'Nf6', 'Nxc6', 'bxc6', 'e5', 'Qe7', 'Qe2', 'Nd5', 'c4'],
      notes: {
        4: { en: 'The Scotch: open the center immediately.', zh: '苏格兰核心：立刻打开中心。' },
        6: { en: 'Recapture with the knight and eye c6/f5.', zh: '马吃回，盯住 c6/f5。' },
        8: { en: 'Exchange on c6 damages their pawn structure — doubled c-pawns, no light bishop partner.', zh: 'c6 兑马毁掉他的兵形——叠兵，白格象没了伙伴。' },
        10: { en: 'e5 kicks the knight and grabs space.', zh: 'e5 赶马抢空间。' },
        12: { en: 'Qe2 defends e5 and prepares c4.', zh: 'Qe2 保 e5，准备 c4。' },
        14: { en: 'c4 hits the d5 knight — space and tempo. Then Nc3 and Bd3/Bc4 follow.', zh: 'c4 攻击 d5 马——空间加先手。然后 Nc3、Bd3/Bc4。' },
      },
    },
    sidelines: [
      {
        name: { en: '4...Bc5 (Classical Scotch)', zh: '4...Bc5（古典苏格兰）' },
        san: ['e4', 'e5', 'Nf3', 'Nc6', 'd4', 'exd4', 'Nxd4', 'Bc5', 'Be3', 'Qf6', 'c3', 'Nge7', 'Bc4', 'Ne5'],
        note: {
          en: 'They keep the bishop active: Be3 challenges it, c3 covers d4, then Bc4 develops with tempo against f7.',
          zh: '对手保持象的活性：Be3 挑战它，c3 护 d4，然后 Bc4 带先手攻 f7。',
        },
        drill: true,
      },
    ],
  },
];
