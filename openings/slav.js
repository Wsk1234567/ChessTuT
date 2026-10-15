// Slav Defense — deepened pilot content
export const SLAV = {
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
    en: 'Use this when you want queen’s-gambit positions without giving up the light-squared bishop. Strong enough for world championship matches — and simple enough to memorize.',
    zh: '想要后翼弃兵式局面、又不肯关死白格象时用它。世界冠军赛级别的可靠，还能背得住。',
  },
  potential: {
    en: 'Extra pawns when ...dxc4 sticks; the bishop on f5 as a permanent asset; ...Ne4 blockades and ...Bb4 pressure; endgames where the central mass grinds.',
    zh: '...dxc4 站住时多一兵；f5 象是永久财富；...Ne4 封锁、...Bb4 施压；中心厚实能磨的残局。',
  },
  plan: {
    en: 'Main line: ...dxc4, ...Bf5, ...e6, ...Bb4 pin, castle. Then ...Nbd7, meet Nh4 with ...Bg6, and improve with ...Qe7/...Rfd8, ...Ne4 or ...b5.',
    zh: '主线：...dxc4、...Bf5、...e6、...Bb4 钉马、易位。然后 ...Nbd7，Nh4 就 ...Bg6，再 ...Qe7/...Rfd8、...Ne4 或 ...b5 改善。',
  },
  main: {
    name: { en: 'Main line (Bishop outside)', zh: '主线（象出链外）' },
    drill: true,
    san: [
      'd4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bf5',
      'e3', 'e6', 'Bxc4', 'Bb4', 'O-O', 'O-O', 'Nh4', 'Bg6', 'Nxg6', 'hxg6',
      'Qe2', 'Nbd7', 'Rd1',
    ],
    notes: {
      3: {
        brief: { en: 'Slav signature: ...c6 makes ...dxc4 real.', zh: '斯拉夫签名：...c6 让 ...dxc4 成立。' },
        detail: {
          en: '...c6 supports the center AND keeps the option of grabbing the c4 pawn. In the Queen’s Gambit Declined (...e6) the bishop gets locked; here it will go to f5 happily.',
          zh: '...c6 既支撑中心，又保留吃 c4 兵的选择。后翼弃兵拒收（...e6）里象被关死；这里它可以愉快地去 f5。',
        },
      },
      7: {
        brief: { en: 'Grab the tempo-pawn — White will regain it while you develop.', zh: '吃掉这个先手兵——他会得回，而你借机出子。' },
        detail: {
          en: 'The c4 pawn is actually loose (the c6 pawn covers b5/d5, not c4). That is fine: White must spend time with e3/Bxc4 or a4–e3 to get it back, and you use that time to play ...Bf5 and ...e6 — or hold the pawn with ...b5.',
          zh: 'c4 兵其实没根（c6 兵护的是 b5/d5，不是 c4）。没关系：白方必须花时间用 e3/Bxc4 或 a4–e3 取回，而你趁机 ...Bf5、...e6——或者用 ...b5 把兵保住。',
        },
      },
      9: {
        brief: { en: 'Bf5: the prize of the Slav.', zh: 'Bf5：斯拉夫的奖品。' },
        detail: {
          en: 'The light-squared bishop escapes before ...e6 locks the chain — the one thing QGD players envy. From f5 it controls e4 and the b1–h7 diagonal.',
          zh: '象在 ...e6 关链前逃出监狱——这是后翼弃兵棋手最羡慕的。f5 控制 e4 和 b1–h7 斜线。',
        },
      },
      11: {
        brief: { en: '...e6: chain closed, center solid.', zh: '...e6：链关上，中心结实。' },
      },
      13: {
        brief: { en: 'Bb4: pin the knight, hit e4.', zh: 'Bb4：钉马，瞄 e4。' },
        detail: {
          en: 'The pin restricts their knight manoeuvres and keeps pressure on c3/e4. If they play Qb3, the bishop can retreat to e7 or a5 keeping the structure healthy.',
          zh: '钉子限制他的马的调动，持续给 c3/e4 施压。若他 Qb3，象退 e7 或 a5，结构依旧健康。',
        },
      },
      15: {
        brief: { en: 'Castle: development complete.', zh: '易位：出子完成。' },
      },
      16: {
        brief: { en: 'They play Nh4 — your bishop is attacked.', zh: '他走 Nh4——象被攻击。' },
      },
      18: {
        brief: { en: 'Nxg6 hxg6: accept the trade.', zh: 'Nxg6 hxg6：接受兑换。' },
        detail: {
          en: 'White trades a knight for your light-squared bishop. The h-file is half-open (a rook can land there later), your structure stays solid, and the g6 pawn supports ...f5. Nothing wrong with this trade.',
          zh: '白方用马换了你的白格象。h 线半开放（将来车可以占），结构依旧结实，g6 兵还支撑 ...f5。这个兑换完全没问题。',
        },
      },
      20: {
        brief: { en: 'They play Qe2 — keep improving.', zh: '他 Qe2——你继续改善。' },
      },
      22: {
        brief: { en: 'Nbd7: connect and prepare ...c5/...Nf6.', zh: 'Nbd7：连马，准备 ...c5/...Nf6。' },
        detail: {
          en: 'The d7 knight supports ...c5 and can go to f6 or c5 (not e4 — that is a knight jump from f6). Typical Slav: no rush, every piece finds its best square.',
          zh: 'd7 马支撑 ...c5，可去 f6 或 c5（去不了 e4——那是 f6 马的跳法）。典型的斯拉夫：不急，每个子都去最好的格子。',
        },
      },
    },
    exit: {
      afterPly: 22,
      text: {
        en: 'Theory ends around here. Plans: ...Ne4 or ...Nf6–...Nd5, ...b5–...b4 expansion, ...c5 break when ready. Trade into the endgame only when your structure or activity is clearly better.',
        zh: '谱到此为止。计划：...Ne4 或 ...Nf6–...Nd5、...b5–...b4 扩张、时机成熟 ...c5。只有结构或子力活跃明显占优时才兑残局。',
      },
    },
  },
  sidelines: [
    {
      name: { en: 'Semi-Slav (4...e6)', zh: '半斯拉夫（4...e6）' },
      san: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6', 'Bg5', 'h6', 'Bh4', 'dxc4', 'e4', 'g5', 'Bg3', 'b5'],
      note: {
        en: 'The sharp Semi-Slav: ...dxc4 followed by ...b5 keeping the pawn. The Meran move order (6...Nbd7) is the calmer cousin — both give you the bishop on b7 or a6 later.',
        zh: '尖锐的半斯拉夫：...dxc4 后 ...b5 保兵。梅兰（6...Nbd7）更平稳——两条路将来象都能到 b7 或 a6。',
      },
      drill: true,
    },
    {
      name: { en: '3.Nc3 move order', zh: '3.Nc3 次序' },
      san: ['d4', 'd5', 'c4', 'c6', 'Nc3', 'Nf6', 'Nf3', 'e6', 'Bg5', 'h6', 'Bh4', 'Be7'],
      note: {
        en: 'They develop first: ...Nf6 and ...e6 drift the game into Semi-Slav structures. Same plans: ...dxc4–...b5, or ...Ne4 and ...f5 breaks in the Meran.',
        zh: '对手先出子：...Nf6、...e6 多半转入半斯拉夫。计划相同：...dxc4–...b5，或梅兰里的 ...Ne4、...f5。',
      },
      drill: true,
    },
    {
      name: { en: '3.cxd5 Exchange Slav', zh: '3.cxd5 交换斯拉夫' },
      san: ['d4', 'd5', 'c4', 'c6', 'cxd5', 'cxd5', 'Nc3', 'Nf6', 'Bf4', 'Nc6', 'e3', 'a6'],
      note: {
        en: 'Symmetrical and calm: after ...a6/...Bf5 the game is about one tempo. Look for ...e5 or ...b5 breaks — the minority attack ...b5–...b4 is thematic.',
        zh: '对称和平静：...a6/...Bf5 后比的是先手。找 ...e5 或 ...b5 反击——少数进攻 ...b5–...b4 是主题。',
      },
      drill: true,
    },
    {
      name: { en: '4.a4 clamp (4.a4 Bf5)', zh: '4.a4 钳制（4.a4 Bf5）' },
      san: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bf5', 'e3', 'e6', 'Bxc4', 'Bb4', 'O-O', 'Nbd7'],
      note: {
        en: 'The a4 clamp stops ...b5 but costs a tempo — you get easy development. Plan: ...Nbd7, ...Bxc3 bxc3, then ...e5 or ...Ne4 fixing the structure.',
        zh: 'a4 钳制住 ...b5 但失一先——你顺利出子。计划：...Nbd7、...Bxc3 bxc3，然后 ...e5 或 ...Ne4 定型。',
      },
    },
    {
      name: { en: '5.e3 early (slow White)', zh: '5.e3 慢棋次序' },
      san: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'e3', 'b5', 'a4', 'b4', 'Ne4', 'e6'],
      note: {
        en: 'They decline the a4 plan: ...b5! is the standard answer, then ...e6 and ...Bb7. The b4 pawn is a strength, not a weakness — it cramps their c3 knight.',
        zh: '他们不走 a4：标准答案是 ...b5！然后 ...e6、...Bb7。b4 兵是优势不是弱——它压住他 c3 的马。',
      },
    },
  ],
  mistakes: [
    {
      title: { en: '...e6 with the bishop still home (move order)', zh: '象还在家就 ...e6（次序错误）' },
      wrong: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'e6'],
      punish: ['cxd5', 'exd5', 'Bg5', 'Be7', 'Ne5'],
      lesson: {
        en: 'This is Semi-Slav move order — fine if you know it, but the bishop no longer gets to f5 easily. The Slav order exists to play ...Bf5 first: c6, dxc4, Bf5, then e6. The punish shows White seizing the e5 outpost while you untangle.',
        zh: '这是半斯拉夫次序——懂的话没问题，但象再想去 f5 就难了。斯拉夫次序的意义就是先出象：c6、dxc4、Bf5，然后才 e6。惩罚序列里白方占住了 e5 前哨，你还在拆线。',
      },
    },
    {
      title: { en: '...dxc4 then slow moves (pawn returns for free)', zh: '吃 c4 后走慢棋（兵白还回去）' },
      wrong: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'e3', 'a6', 'Bxc4'],
      punish: ['b5', 'Bb3', 'Bb7'],
      lesson: {
        en: 'If you take on c4, follow up instantly with ...b5 or get the bishop out (...Bf5). Slow moves (...a6) let White regain the pawn with Bxc4 and a comfortable lead in development.',
        zh: '吃 c4 就要立刻接 ...b5，或者把象放出来（...Bf5）。慢着（...a6）让白方 Bxc4 白得回兵，出子还领先。',
      },
    },
    {
      title: { en: '...Bxc3 at the wrong moment', zh: '不合时宜地 ...Bxc3' },
      wrong: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bf5', 'e3', 'e6', 'Bxc4', 'Bb4', 'O-O', 'O-O', 'Qe2', 'Bxc3'],
      punish: ['bxc3', 'Nbd7', 'd5'],
      lesson: {
        en: 'Bxc3 at the wrong moment gives White the bishop pair and a free hand in the center (c3 supports d4). Keep the pin until it really restricts them — trade only when it wins something concrete.',
        zh: '不合时宜的 Bxc3 白送双象，还让白方中心自由（c3 支撑 d4）。钉子要留到真让他难受为止——只有赢到具体东西才兑。',
      },
    },
    {
      title: { en: '...b5 too early (the a4 trap)', zh: '过早 ...b5（a4 陷阱）' },
      wrong: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bf5', 'e3', 'e6', 'Bxc4', 'Bb4', 'O-O', 'O-O', 'Qe2', 'b5'],
      punish: ['axb5', 'cxb5', 'Nxb5'],
      lesson: {
        en: 'White’s a4 was played precisely to punish ...b5: axb5 cxb5 Nxb5 wins a pawn. The b5 break needs preparation (...Nbd7, ...Qe7 first) — never just push it.',
        zh: '白方 a4 就是为了惩罚 ...b5：axb5 cxb5 Nxb5 白得一兵。b5 反击需要准备（先 ...Nbd7、...Qe7）——绝不能随手推。',
      },
    },
    {
      title: { en: '...c5 break too early', zh: '过早 ...c5 反击' },
      wrong: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bf5', 'e3', 'e6', 'Bxc4', 'Bb4', 'O-O', 'O-O', 'Qe2', 'c5'],
      punish: ['e4', 'Bg6', 'd5'],
      lesson: {
        en: '...c5 is the right break — but only with pieces ready to use the opening. After e4–d5 White gets a dangerous passed-pawn wedge. Complete ...Nbd7/...Qe7 first.',
        zh: '...c5 反击方向对——但要有子利用打开的线。e4–d5 后白方出现危险的通路兵楔子。先走完 ...Nbd7/...Qe7。',
      },
    },
  ],
  plans: [
    {
      after: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bf5', 'e3', 'e6', 'Bxc4', 'Bb4', 'O-O', 'O-O'],
      question: {
        en: 'Development is complete. What is Black’s first improving move?',
        zh: '出子完成。黑方第一手改善是什么？',
      },
      choices: [
        {
          text: { en: '...Nbd7 (or ...Ne4), connecting knights', zh: '...Nbd7（或 ...Ne4），连马' },
          correct: true,
          why: {
            en: 'Standard Slav improvement: the d7 knight supports ...e5/...c5 breaks and can jump to b6/c5. Slow moves win Slav positions.',
            zh: '标准改善：d7 马支撑 ...e5/...c5，还可跳 b6/c5。斯拉夫局面靠慢着赢。',
          },
        },
        {
          text: { en: '...b5?! grabbing space', zh: '...b5?! 抢空间' },
          correct: false,
          why: {
            en: 'Premature: after axb5 cxb5? the structure is loose and White plays Nxb5 tricks or simply Bb3 improving.',
            zh: '过早：axb5 cxb5? 结构松动，他有 Nxb5 战术或简单 Bb3 改善。',
          },
        },
        {
          text: { en: '...Bxc3 right away', zh: '立刻 ...Bxc3' },
          correct: false,
          why: {
            en: 'Only when the pin loses its bite (e.g. after they play Qe2/c3 ideas) and trading fixes their pawns or wins the bishop pair for real. Trading early gives the bishop pair for nothing.',
            zh: '只有钉子失去价值（比如他 Qe2/c3 之后）、且兑子能定型他兵形或真拿到双象时才兑。早兑白送双象。',
          },
        },
        {
          text: { en: '...h6 waiting move', zh: '...h6 等着' },
          correct: false,
          why: {
            en: 'Losing a tempo in a position that needs every improving move. Nbd7 does the same job and actually develops.',
            zh: '局面需要每一步改善时，这是浪费一先。Nbd7 同样用途还真的在出子。',
          },
        },
      ],
    },
    {
      after: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bf5', 'e3', 'e6', 'Bxc4', 'Bb4', 'O-O', 'O-O', 'Nh4'],
      question: {
        en: 'White plays Nh4 attacking your f5-bishop. How do you react?',
        zh: '白走 Nh4 攻击 f5 象。怎么应对？',
      },
      choices: [
        {
          text: { en: '...Bg6 — offer the trade', zh: '...Bg6——接受兑换' },
          correct: true,
          why: {
            en: 'The bishop has done its job (it got out of the chain). After Nxg6 hxg6 the structure is solid and ...f5 later uses the g6 pawn.',
            zh: '象的任务完成了（出了兵链）。Nxg6 hxg6 后结构结实，将来 ...f5 还能用上 g6 兵。',
          },
        },
        {
          text: { en: '...Be4 keeping the bishop', zh: '...Be4 保象' },
          correct: false,
          why: {
            en: 'After f3/Nxe4 dxe4 White gets a strong center and the e4 pawn becomes a target. The bishop is traded anyway under worse circumstances.',
            zh: 'f3/Nxe4 dxe4 后他中心强大，e4 兵反而成了目标。象还是要兑，但条件更差。',
          },
        },
        {
          text: { en: '...Bg4 chasing the queen', zh: '...Bg4 攻后' },
          correct: false,
          why: {
            en: 'Bg4 looks active but the f5-bishop is still the piece White wants to trade — and ...Bg4 runs into f3/h3 with tempo. Bg6 is the solid answer.',
            zh: 'Bg4 看着积极，但 f5 象才是白方想兑的子——而且 ...Bg4 会撞上 f3/h3 的先手。Bg6 才是扎实答案。',
          },
        },
      ],
    },
    {
      after: ['d4', 'd5', 'c4', 'c6', 'Nf3', 'Nf6', 'Nc3', 'dxc4', 'a4', 'Bf5', 'e3', 'e6', 'Bxc4', 'Bb4', 'O-O', 'O-O', 'Nh4', 'Bg6', 'Nxg6', 'hxg6', 'Qe2', 'Nbd7'],
      question: {
        en: 'Your bishop sits on b4 pinning c3. When do you trade it?',
        zh: '象在 b4 钉着 c3。什么时候兑掉它？',
      },
      choices: [
        {
          text: { en: 'When the pin stops restricting them (e.g. after Rd1/c3 ideas)', zh: '钉子不再限制对手时（如 Rd1/c3 之后）' },
          correct: true,
          why: {
            en: 'The pin is an asset while it restricts their pieces. Once solved, ...Bxc3 bxc3 can fix their pawns as targets — or simply keep the bishop if it has squares.',
            zh: '钉子限制对手时才是资产。他解决后，...Bxc3 bxc3 可把兵形变成目标——有格子时留着也行。',
          },
        },
        {
          text: { en: 'Immediately — damage the pawns', zh: '立刻兑——毁兵形' },
          correct: false,
          why: {
            en: 'bxc3 gives White a strong bishop and no weaknesses to attack. Your own b7 pawn becomes the weakness instead.',
            zh: 'bxc3 给他强象又没有弱兵可攻。反倒是你 b7 成了弱兵。',
          },
        },
        {
          text: { en: 'Never — keep it forever', zh: '永远不兑' },
          correct: false,
          why: {
            en: 'Dogma: bishops can be strong, but if their position is fixed and your bishop has no targets, the trade can favour you. Flexibility is the Slav way.',
            zh: '教条：象是好子，但若他已站稳、你的象没目标，兑掉可能对你有利。灵活才是斯拉夫之道。',
          },
        },
      ],
    },
  ],
};
