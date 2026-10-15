// Black repertoire — bilingual teaching content ({en, zh} fields)
export const BLACK_LINES = [
  {
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
      en: 'The ...c5 break dismantling d4; the bishop on f5 as a long-term asset; opposite-side attacks when White overextends; endgames where Black’s structure simply outlives White’s.',
      zh: '...c5 拆掉 d4；f5 象是长期财富；白方过度扩张时的对攻；黑方结构比白方更能耗的残局。',
    },
    plan: {
      en: 'Advance main line: ...Bf5 first, then ...e6 to lock the chain, then ...c5 to hit the base of the e5 wedge, then ...Nc6 and queenside play.',
      zh: '推进主线：先 ...Bf5，再 ...e6 关链，然后 ...c5 攻击 e5 楔子的根，接着 ...Nc6 和后翼展开。',
    },
    main: {
      name: { en: 'Advance Variation (3.e5)', zh: '推进变例（3.e5）' },
      drill: true,
      san: ['e4', 'c6', 'd4', 'd5', 'e5', 'Bf5', 'Nf3', 'e6', 'Be2', 'c5', 'c3', 'Nc6', 'O-O'],
      notes: {
        1: { en: 'The Caro-Kann: prepare ...d5 while keeping a retreat for the bishop.', zh: '卡罗-卡恩：准备 ...d5，同时给象留退路。' },
        3: { en: 'Challenge the center directly.', zh: '直接挑战中心。' },
        5: { en: 'The key idea — the bishop comes out BEFORE ...e6 locks the chain.', zh: '核心思想：象在 ...e6 关链之前先出来。' },
        7: { en: 'Chain secured (e6); ...c5 is prepared.', zh: '兵链补牢（e6），准备 ...c5。' },
        9: { en: 'The thematic break: strike at the base (d4) of White’s e5 wedge.', zh: '主题反击：攻击白棋 e5 楔子的根（d4）。' },
        11: { en: 'Piece pressure on d4 and the center. White’s space advantage is under fire.', zh: '子力围攻 d4 和中心，白棋的空间优势正在被打击。' },
      },
    },
    sidelines: [
      {
        name: { en: '3.Nc3 Classical', zh: '3.Nc3 经典变例' },
        san: ['e4', 'c6', 'd4', 'd5', 'Nc3', 'dxe4', 'Nxe4', 'Bf5', 'Ng3', 'Bg6'],
        note: {
          en: 'The main move order: trade central pawns, then play ...Bf5 anyway. Later ...Nf6, ...e6, ...Be7 and the h4–h5 idea is just a paper tiger.',
          zh: '最常见次序：先兑中心兵，象照样出链外。之后 ...Nf6、...e6、...Be7，h4–h5 只是纸老虎。',
        },
        drill: true,
      },
      {
        name: { en: '3.exd5 Exchange', zh: '3.exd5 交换变例' },
        san: ['e4', 'c6', 'd4', 'd5', 'exd5', 'cxd5', 'Bd3', 'Nc6', 'Nf3', 'Bg4'],
        note: {
          en: 'A symmetrical structure where both sides can play: develop ...Nc6, ...Bg4, ...e6, ...Be7 and look for ...e5 to equalize fully.',
          zh: '结构对称、双方好下：...Nc6、...Bg4、...e6、...Be7 出子，寻找 ...e5 完全取得均衡。',
        },
        drill: true,
      },
    ],
  },

  {
    id: 'slav',
    side: 'b',
    group: 'Black',
    title: { en: 'Slav Defense', zh: '斯拉夫防御' },
    against: { en: '1.d4', zh: '1.d4' },
    eco: 'D10–D19',
    intro: {
      en: 'The rock-solid reply to 1.d4: ...c6 supports ...d5 and keeps the plan of ...dxc4, getting your bishop outside the pawn chain.',
      zh: '对 1.d4 最扎实的回答：...c6 支撑 ...d5，还保留 ...dxc4 让象出链外的计划。',
    },
    purpose: {
      en: 'Use this when you want queen’s-gambit positions without giving up the light-squared bishop (the French/Caro problem). Strong enough for world championship matches.',
      zh: '想要后翼弃兵式局面、又不肯关死白格象（法兰西/卡罗的烦恼）时用它。世界冠军赛级别的可靠。',
    },
    potential: {
      en: 'Extra pawns when ...dxc4 sticks; the bishop on f5 as a permanent asset; ...e6–...Bb4 pressure on c3; endgames where Black’s central mass grinds.',
      zh: '...dxc4 站住时多一兵；f5 象是永久财富；...e6–...Bb4 对 c3 施压；黑方中心厚实能磨的残局。',
    },
    plan: {
      en: 'Main line: ...dxc4, ...Bf5, ...e6, ...Bb4 pin, castle. Then ...Ne4 or ...Nbd7–b6 with steady improvement.',
      zh: '主线：...dxc4、...Bf5、...e6、...Bb4 钉马、易位。然后 ...Ne4 或 ...Nbd7–b6 稳步改善。',
    },
    main: {
      name: { en: 'Main line (Bishop outside)', zh: '主线（象出链外）' },
      drill: true,
      san: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bf5', 'e3', 'e6', 'Bxc4', 'Bb4', 'O-O', 'O-O'],
      notes: {
        3: { en: 'The Slav signature: ...c6 makes ...dxc4 real, and supports the center.', zh: '斯拉夫标志：...c6 让 ...dxc4 成立，同时支撑中心。' },
        7: { en: 'Grab the pawn! ...dxc4 is backed by the c6 pawn — that is the whole point.', zh: '吃兵！...dxc4 有 c6 撑腰——这正是 ...c6 的全部意义。' },
        9: { en: 'The bishop escapes the chain before ...e6 — the key advantage over the Queen’s Gambit Declined.', zh: '象在 ...e6 之前出链外——相对后翼弃兵拒收的核心优点。' },
        11: { en: 'Chain closed (e6); your center is healthy.', zh: '链关上（e6），中心健康完整。' },
        13: { en: 'Bb4 pins the knight and pressures e4/c3.', zh: 'Bb4 钉住马，给 e4/c3 施压。' },
        15: { en: 'Development complete. Then ...Ne4, or ...Nbd7–b6–...Re8 improving.', zh: '出子完成。然后 ...Ne4，或 ...Nbd7–b6–...Re8 慢慢改善。' },
      },
    },
    sidelines: [
      {
        name: { en: 'Semi-Slav (4...e6)', zh: '半斯拉夫（4...e6）' },
        san: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'Bg5', 'h6', 'Bh4', 'Be7'],
        note: {
          en: 'The cautious cousin: close the chain first. After ...dxc4 you later free the bishop with ...b5. Rock solid at club level.',
          zh: '更稳妥的亲戚：先补链。...dxc4 之后用 ...b5 把象放出来。业余赛场极扎实。',
        },
        drill: true,
      },
      {
        name: { en: '3.Nc3 move order', zh: '3.Nc3 次序' },
        san: ['d4', 'd5', 'c4', 'c6', 'Nc3', 'Nf6', 'Nf3', 'e6'],
        note: {
          en: 'They develop first: play ...Nf6 and ...e6 — most of the time the game drifts back into Semi-Slav structures with the same plans.',
          zh: '对手先出子：走 ...Nf6、...e6——多数会转回半斯拉夫结构，计划不变。',
        },
        drill: true,
      },
    ],
  },

  {
    id: 'french',
    side: 'b',
    group: 'Black',
    title: { en: 'French Defense', zh: '法兰西防御' },
    against: { en: '1.e4', zh: '1.e4' },
    eco: 'C00–C19',
    intro: {
      en: 'A counterpunching fortress: give White the center, then destroy it with ...c5 and ...f6. Attacker’s spirit inside a solid shell.',
      zh: '反击型堡垒：让白棋占中心，再用 ...c5 和 ...f6 拆掉它。坚固外壳里藏着进攻的灵魂。',
    },
    purpose: {
      en: 'Use this when you like clear pawn structures and plan-based play. You trade space for targets: every French player knows exactly which pawn to hit.',
      zh: '喜欢清晰兵形和按计划作战时用它。用空间换攻击目标：每个法兰西棋手都清楚该打哪个兵。',
    },
    potential: {
      en: 'The ...c5 break against d4’s base; the ...f6 break ripping open the kingside (often a direct attack on the White king); queenside expansion with ...c4–...Na5; opposite-side castling fireworks.',
      zh: '攻击 d4 根基的 ...c5；撕开王翼的 ...f6（常常直攻白王）；...c4–...Na5 的后翼扩张；异向易位的对攻。',
    },
    plan: {
      en: 'Advance main line: ...c5 immediately, ...Nc6 and ...Qb6 piling on d4, ...c4 to clamp the queenside, then ...Na5 and ...f6 or a knight invasion.',
      zh: '推进主线：立刻 ...c5，...Nc6 和 ...Qb6 围攻 d4，...c4 钳住后翼，然后 ...Na5、...f6 或马入侵。',
    },
    main: {
      name: { en: 'Advance Variation (3.e5)', zh: '推进变例（3.e5）' },
      drill: true,
      san: ['e4', 'e6', 'd4', 'd5', 'e5', 'c5', 'c3', 'Nc6', 'Nf3', 'Qb6', 'a3', 'c4', 'Be2', 'Na5', 'O-O'],
      notes: {
        1: { en: 'The French: build a solid chain and dare White to overextend.', zh: '法兰西：筑起坚固兵链，看他敢不敢过度扩张。' },
        3: { en: 'Challenge d4 before they cement it.', zh: '在他巩固之前挑战 d4。' },
        5: { en: 'Strike at the base of the e5 wedge immediately.', zh: '立刻攻击 e5 楔子的根。' },
        7: { en: 'Develop with pressure: Nc6 and Qb6 both stare at d4.', zh: '带压力出子：Nc6 和 Qb6 都盯着 d4。' },
        9: { en: 'Qb6 is thematic — battery on d4 and b2.', zh: 'Qb6 是主题着法——火力压 d4 和 b2。' },
        11: { en: 'Clamp the queenside with ...c4, then hop to Na5 and fix the structure in your favor.', zh: '用 ...c4 钳住后翼，跳马 Na5，把结构定型成对你有利。' },
      },
    },
    sidelines: [
      {
        name: { en: '3.Nc3 (Winawer complex)', zh: '3.Nc3（温纳变例）' },
        san: ['e4', 'e6', 'd4', 'd5', 'Nc3', 'Bb4', 'e5', 'c5', 'a3', 'Bxc3+', 'bxc3', 'Ne7'],
        note: {
          en: 'The sharp Winawer: you give up the bishop pair to wreck their pawns. Plans: ...Qc7–...b6–...Ba6, ...f6 breaks, opposite-side attacks.',
          zh: '尖锐的温纳：弃双象换他兵形破碎。计划：...Qc7–...b6–...Ba6、...f6 反击、异向对攻。',
        },
        drill: true,
      },
      {
        name: { en: '3.Nd2 (Tarrasch)', zh: '3.Nd2（塔拉什变例）' },
        san: ['e4', 'e6', 'd4', 'd5', 'Nd2', 'c5', 'exd5', 'exd5', 'Ngf3', 'Nc6'],
        note: {
          en: 'The quiet Tarrasch: take on d4 (or play ...c5 first), develop ...Nc6–...Nf6–...Be7–...O-O and look for ...cxd4 with IQP play.',
          zh: '平稳的塔拉什：兑 d4（或先 ...c5），...Nc6–...Nf6–...Be7–...O-O 出子，找 ...cxd4 的孤兵中心棋。',
        },
        drill: true,
      },
    ],
  },

  {
    id: 'kid',
    side: 'b',
    group: 'Black',
    title: { en: "King's Indian Defense", zh: '王翼印度防御' },
    against: { en: '1.d4', zh: '1.d4' },
    eco: 'E60–E99',
    intro: {
      en: 'The sharpest weapon against 1.d4: let White build a big center, then smash it with ...e5 and hurl pawns at their king.',
      zh: '对 1.d4 最锋利的武器：让白棋筑起大中心，再用 ...e5 砸开它，向他的王扔兵。',
    },
    purpose: {
      en: 'Use this when you want wins, not draws. Risky but rewarding: every piece has one home, and the kingside attack is a system you can memorize.',
      zh: '想要赢棋而不是和棋时用它。有风险但回报高：每个子都有固定去处，王翼进攻是一套能背下来的体系。',
    },
    potential: {
      en: 'The ...f5–...f4 pawn storm; knight leaps (...Nh5–f4, ...Ne8–f6–g4); the g7-bishop as a long-range sniper; mate on the kingside while White dithers on the queenside.',
      zh: '...f5–...f4 的兵风暴；马的跃进（...Nh5–f4、...Ne8–f6–g4）；g7 象是远程狙击手；白棋还在后翼磨蹭时王翼已经杀到。',
    },
    plan: {
      en: 'Setup: ...g6, ...Bg7, ...d6, ...O-O, ...e5, ...Nc6, ...Ne7. Then ...Nd7–f6, ...f5, ...f4 and throw everything at the White king.',
      zh: '阵型：...g6、...Bg7、...d6、...O-O、...e5、...Nc6、...Ne7。然后 ...Nd7–f6、...f5、...f4，全部火力砸向白王。',
    },
    main: {
      name: { en: 'Main line (Classical Attack)', zh: '主线（古典攻击）' },
      drill: true,
      san: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'e4', 'd6', 'Nf3', 'O-O', 'Be2', 'e5', 'O-O', 'Nc6', 'd5', 'Ne7', 'Ne1', 'Nd7', 'f3', 'f5'],
      notes: {
        1: { en: 'Develop first; the center will come later.', zh: '先出子，中心的事以后再说。' },
        3: { en: 'The King’s Indian fianchetto — bishop aimed at the long diagonal.', zh: '王翼印度侧翼象——瞄准长斜线。' },
        5: { en: 'The d6–e5 chain: give them the center, prepare to break it.', zh: 'd6–e5 兵链：中心让给他，准备砸开。' },
        9: { en: 'Castle early; the king is safe while the attack brews.', zh: '早早易位；进攻酝酿时王要安全。' },
        11: { en: 'The ...e5 break — this is the moment the game becomes a fight.', zh: '...e5 反击——从这一刻起棋变成战斗。' },
        13: { en: 'Knight to c6 then e7: heading for f5 via d7.', zh: '马 c6 再 e7：经 d7 奔向 f5。' },
        15: { en: 'Knight on e7 is the signature regrouping: f5 is coming.', zh: '马到 e7 是标志性的调运：f5 就要来了。' },
        17: { en: 'The standard attack: knight to d7–f6–g4, pawns to f5–f4.', zh: '标准进攻：马 d7–f6–g4，兵 f5–f4。' },
        19: { en: 'The storm begins: ...f5–...f4 opens lines toward the White king.', zh: '风暴开始：...f5–...f4 打开通往白王的线路。' },
      },
    },
    sidelines: [
      {
        name: { en: 'vs 5.Nf3 + Be2 setups', zh: '对 5.Nf3+Be2 体系' },
        san: ['d4', 'Nf6', 'c4', 'g6', 'Nc3', 'Bg7', 'e4', 'd6', 'Nf3', 'O-O', 'Be2', 'c5', 'd5', 'e6', 'O-O', 'exd5', 'cxd5'],
        note: {
          en: 'If they refuse ...e5 play (fianchetto systems): switch to a Benoni-style ...c5 break with ...e6 and queenside play — same pieces, different pawn lever.',
          zh: '如果对手回避 ...e5（侧翼象体系）：转成别诺尼式 ...c5 反击，配合 ...e6 和后翼作战——同样的子，不同的兵杠杆。',
        },
        drill: true,
      },
    ],
  },

  {
    id: 'dragon',
    side: 'b',
    group: 'Black',
    title: { en: 'Sicilian — Accelerated Dragon', zh: '西西里——加速龙变例' },
    against: { en: '1.e4', zh: '1.e4' },
    eco: 'B27, B36–B39',
    intro: {
      en: 'The Sicilian with a fianchetto: unbalanced, aggressive, and the ...d5 central break arrives with full force.',
      zh: '带侧翼象的西西里：不平衡、有攻击性，...d5 中心反击全力杀到。',
    },
    purpose: {
      en: 'Use this when you want winning chances with Black against 1.e4. Fewer forced lines than the Najdorf, same Sicilian punch: imbalance by design.',
      zh: '执黑对 1.e4 想要赢棋机会时用它。比纳道尔夫少背强制变着，同样的西西里重拳：设计上就不平衡。',
    },
    potential: {
      en: 'The ...d5 break equalizing or better in one shot; the g7-bishop raking the long diagonal; ...Nxd4 trades leading to dark-square play; queenside expansion ...b5–...b4 while White attacks on the kingside.',
      zh: '一步到位的 ...d5 均衡甚至占优；g7 象横扫长斜线；...Nxd4 兑子转黑格作战；白攻王翼时 ...b5–...b4 后翼扩张。',
    },
    plan: {
      en: 'Take on c4, fianchetto, develop ...Nf6 and castle. Then strike ...d5 (or ...d6 then ...b5). Keep pieces on and trade into good endgames only when ahead.',
      zh: '吃 c4、侧翼象、...Nf6、易位。然后 ...d5 反击（或 ...d6 后 ...b5）。保持子力，只有占优时才兑进好残局。',
    },
    main: {
      name: { en: 'Main line', zh: '主线' },
      drill: true,
      san: ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'g6', 'Nc3', 'Bg7', 'Be3', 'Nf6', 'Bc4', 'O-O', 'Bb3', 'd6', 'O-O'],
      notes: {
        1: { en: 'The Sicilian: fight for the center from the flank and keep an unbalanced game.', zh: '西西里：从侧翼争夺中心，保持不平衡。' },
        3: { en: 'Main development: pressure e4 and prepare the ...d5 break.', zh: '主力出子：施压 e4，准备 ...d5。' },
        5: { en: 'Trade the c-pawn for the d-pawn — you get an open c-file and a central majority.', zh: 'c 兵换 d 兵——得到开放 c 线和中心多兵。' },
        7: { en: 'The Dragon fianchetto: g7 becomes a monster on the long diagonal.', zh: '龙式侧翼象：g7 在长斜线上是怪兽。' },
        11: { en: 'Standard development against the English Attack setup.', zh: '对英式攻击的标准出子。' },
        13: { en: 'White’s bishop goes to c4 — watch the ...d5 break later.', zh: '白象到 c4——留心将来的 ...d5。' },
        15: { en: 'd6 supports e5 and controls the c5 and e5 squares.', zh: 'd6 支撑 e5，控制 c5 和 e5 格。' },
        17: { en: 'Complete development; next: ...Bd7–Qa5, or ...a6–...b5 expanding on the queenside.', zh: '出子完成；下一步 ...Bd7–Qa5，或 ...a6–...b5 后翼扩张。' },
      },
    },
    sidelines: [
      {
        name: { en: 'vs the Maróczy Bind (5.c4)', zh: '对马罗茨绑定（5.c4）' },
        san: ['e4', 'c5', 'Nf3', 'Nc6', 'd4', 'cxd4', 'Nxd4', 'g6', 'c4', 'Bg7', 'Be3', 'Nf6', 'Nc3', 'O-O'],
        note: {
          en: 'If they play the Bind (c4): your break becomes ...d6, ...Nxd4, ...Bd7 and ...Qa5/a6–...b5 hitting the c4 wedge. Patience, then the lever.',
          zh: '对手走绑定（c4）：你的突破口是 ...d6、...Nxd4、...Bd7 和 ...Qa5/a6–...b5 打击 c4 楔子。耐心，然后扳机。',
        },
        drill: true,
      },
    ],
  },
];
