// Italian Game — deepened pilot content
// note: { brief: {en,zh}, detail?: {en,zh} }  ·  exit marks where theory stops
export const ITALIAN = {
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
    en: 'Pressure on f7 and e5; the d3–d4 break once pieces are out; knight tour Nbd2–f1–g3; f2–f4–f5 kingside attack with Re1 support; a better endgame after Bxe6–d4.',
    zh: '对 f7 和 e5 的压力；出子完成后 d3–d4 冲中心；马的 Nbd2–f1–g3 调运；Re1 支撑下的 f2–f4–f5 王翼进攻；Bxe6 后再 d4 拿到好残局。',
  },
  plan: {
    en: 'Development order: Nf3, Bc4, c3, d3, castle, Re1. Then Nbd2–f1–g3, challenge ...Bg4 with h3, meet ...Be6 with Bxe6, and break with d4 when their king is still finding shelter.',
    zh: '出子顺序：Nf3、Bc4、c3、d3、易位、Re1。然后 Nbd2–f1–g3，h3 应对 ...Bg4，...Be6 就 Bxe6，趁他王未稳用 d4 打开。',
  },
  main: {
    name: { en: 'Quiet System (Giuoco Pianissimo)', zh: '安静体系（Giuoco Pianissimo）' },
    drill: true,
    san: [
      'e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd3', 'd6',
      'O-O', 'O-O', 'Re1', 'h6', 'Nbd2', 'a6', 'Nf1', 'Re8', 'Ng3', 'Ba7',
      'h3', 'Be6', 'Bxe6', 'Rxe6', 'd4', 'exd4', 'cxd4',
    ],
    notes: {
      0: {
        brief: { en: 'Claim the center, open lines.', zh: '占领中心，打开通路。' },
        detail: {
          en: '1.e4 is the king of first moves: it opens the f1-bishop and d1-queen in one go. Whatever they answer, your plan stays the same — develop toward their king.',
          zh: '1.e4 是最好的开局着：一步打开 f1 象和 d1 后。无论对手怎么应，你的计划不变——向他的王翼发展。',
        },
      },
      2: {
        brief: { en: 'Knight out with tempo on e5.', zh: '出马带先手攻 e5。' },
        detail: {
          en: 'Two jobs in one move: development and a threat. If they do nothing, Nxe5 wins a pawn — so they must defend, and you get to choose the system.',
          zh: '一步两用：出子加威胁。他不理就 Nxe5 得兵——所以必须应，体系选择权在你。',
        },
      },
      4: {
        brief: { en: 'The Italian bishop: eyes f7.', zh: '意大利象：盯着 f7。' },
        detail: {
          en: 'c4 is the best square: from here the bishop aims at the weakest point of their camp and supports the future d4 break. Keep this bishop if you can — it is the soul of the opening.',
          zh: 'c4 是最好的格子：瞄准他阵营最弱的 f7，还支撑将来的 d4。尽量留住这颗象——它是本开局的灵魂。',
        },
      },
      6: {
        brief: { en: 'c3: prepare d4 properly.', zh: 'c3：为 d4 打好根基。' },
        detail: {
          en: 'Why not d4 immediately? After ...exd4 Nxd4 Bb4+! they seize the initiative with check. c3 covers d4, gives the queen c2, and makes d4 a real break instead of a gift. Compare the “d4 without c3” mistake below.',
          zh: '为什么不马上 d4？...exd4 Nxd4 Bb4+! 他带打将抢走先手。c3 护住 d4、给后 c2，让 d4 成为真正的反击而不是送礼。对照下方「没走 c3 就 d4」的常见错误。',
        },
      },
      8: {
        brief: { en: 'Quiet center — finish development first.', zh: '安静中心——先出完子。' },
        detail: {
          en: 'd3 supports e4 and frees the c2 square for the queen (the classic Bc2/Qd3 batteries later). It also keeps the option of Nbd2 without blocking anything.',
          zh: 'd3 支撑 e4，还给后让出 c2 格（将来经典的 Bc2/Qd3 火力）。Nbd2 的调运也不受阻挡。',
        },
      },
      10: {
        brief: { en: 'Castle first, attack later.', zh: '先易位，再进攻。' },
      },
      12: {
        brief: { en: 'Re1: support e4, prepare the break.', zh: 'Re1：支撑 e4，为冲中心做准备。' },
        detail: {
          en: 'The rook belongs on the e-file: it backs the e4 pawn and will support d3–d4 or e4–e5. The knight tour starts next: Nbd2–f1–g3.',
          zh: '车就该在 e 线：支撑 e4，配合 d3–d4 或 e4–e5。接下来是马的旅行：Nbd2–f1–g3。',
        },
      },
      14: {
        brief: { en: 'Nbd2 — the knight tour begins.', zh: 'Nbd2——马的调运开始。' },
        detail: {
          en: 'Nbd2 is the classic regrouping: d2–f1–g3, where the knight hits f5, h5 and e4. Do not rush Nf5 — build it slowly with h3 covering against ...Bg4 pins first.',
          zh: '经典的重新部署：d2–f1–g3，马到位后盯 f5、h5、e4。别急着跳 Nf5——先 h3 防 ...Bg4 牵制，慢慢把子摆到位。',
        },
      },
      16: {
        brief: { en: 'Nf1: transit square.', zh: 'Nf1：中转站。' },
      },
      18: {
        brief: { en: 'Ng3: the knight arrives home.', zh: 'Ng3：马到家了。' },
        detail: {
          en: 'From g3 the knight eyes f5 and h5 — both key squares around their king. Notice how little risk we took to get here: that is the quiet system.',
          zh: '从 g3 盯住 f5 和 h5——他王翼的关键格。注意我们几乎没冒任何险就完成了部署——这就是安静体系。',
        },
      },
      20: {
        brief: { en: 'h3: prophylactic — cover g4 before the bishop comes out.', zh: 'h3：预防着——象还没出来，先把 g4 护住。' },
      },
      22: {
        brief: { en: 'Bxe6: trade into a better structure.', zh: 'Bxe6：兑进更好的结构。' },
        detail: {
          en: 'Their light-squared bishop was their best piece. After ...Rxe6 the rook is exposed on the e-file and your d4 break hits e5 with full force — you keep the healthier structure and the initiative.',
          zh: '白格象是他最好的子。...Rxe6 之后车暴露在 e 线上，你的 d4 反击全力打击 e5——结构更健康，先手也在你手里。',
        },
      },
      24: {
        brief: { en: 'd4! — the break we prepared all opening.', zh: 'd4！——整个开局都在为它准备。' },
        detail: {
          en: 'Everything was for this: c3 backed it, Re1 supports it, their king took time to castle. If ...exd4 cxd4 the center opens with your rook already on e1 — active pieces, initiative.',
          zh: '一切都为了这一刻：c3 打根基，Re1 支撑，他易位花了不少步。...exd4 cxd4 之后中心打开，车已在 e1——子力活跃，先手在握。',
        },
      },
      26: {
        brief: { en: 'Recapture — center solid, enjoy the game.', zh: '吃回——中心稳固，享受中局。' },
      },
    },
    exit: {
      afterPly: 26,
      text: {
        en: 'Theory stops here. Your first plan moves: Qd3 or Qe2, then f2–f4 or Rad1/Re1 to improve the rooks; Nf5 if it lands safely; a slow kingside pawn storm only after every piece has a job.',
        zh: '谱到此为止。第一手计划：Qd3 或 Qe2，然后 f2–f4 或 Rad1/Re1 改善双车；Nf5 扎稳就跳；每个子都有活干之后才考虑王翼兵风暴。',
      },
    },
  },
  sidelines: [
    {
      name: { en: '3...Nf6 (Two Knights)', zh: '3...Nf6（双马防御）' },
      san: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6', 'd3', 'Bc5', 'c3', 'd6', 'O-O'],
      note: {
        en: 'They counterattack e4 early: just play 4.d3 and return to the same quiet system. Avoid the wild Ng5 lines until you have outgrown them.',
        zh: '对手抢先出马盯 e4：走 4.d3 回到安静体系即可。在水平到之前，先别碰尖锐的 Ng5 变化。',
      },
    },
    {
      name: { en: '3...Be7 (Hungarian)', zh: '3...Be7（匈牙利防御）' },
      san: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Be7', 'd3', 'Nf6', 'O-O', 'O-O', 'Re1', 'd6'],
      note: {
        en: 'They play solid and passive: same setup, you keep more space and freer pieces. Watch for ...Na5 hitting your bishop — then Bb3 or Bd3.',
        zh: '对手收象求稳：照常摆阵，你空间更好。留意 ...Na5 踩象——退 Bb3 或转 Bd3。',
      },
    },
    {
      name: { en: '2...Nf6 (Petrov)', zh: '2...Nf6（彼得罗夫）' },
      san: ['e4', 'e5', 'Nf3', 'Nf6', 'Nxe5', 'd6', 'Nf3', 'Nxe4', 'd4'],
      note: {
        en: 'The Petrov: they copy. 3.Nxe5 keeps a real advantage — d4 next, develop with tempo. The Cochrane Gambit (4.Nxf7) is fun but not necessary.',
        zh: '彼得罗夫：他学你走。3.Nxe5 保持真实优势——接下来 d4，带先手出子。4.Nxf7 的科克伦弃兵好玩但没必要。',
      },
      drill: true,
    },
    {
      name: { en: '3...Bc5 + 4...d5? (early counter)', zh: '3...Bc5 后 4...d5？（过早反击）' },
      san: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'd5', 'exd5', 'Qxd5', 'd4'],
      note: {
        en: 'A club favourite that surrenders the center: after exd5 Qxd5 d4! the game opens with their queen exposed and your development flowing. Note the c6-knight cannot recapture on d5 — that is not a knight jump.',
        zh: '业余常见着，白白让出中心：exd5 Qxd5 d4！局面打开时他的后暴露在外，你的出子顺风顺水。注意 c6 马根本吃不到 d5——那不是马步。',
      },
      drill: true,
    },
    {
      name: { en: '4.b4 Evans Gambit (optional)', zh: '4.b4 伊文斯弃兵（可选武器）' },
      san: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'b4', 'Bxb4', 'c3', 'Ba5', 'd4'],
      note: {
        en: 'The romantic weapon: a pawn for a big center and fast castling. Keep it in your pocket as a surprise — main repertoire stays the quiet system.',
        zh: '浪漫派武器：弃一兵换大中心和快速易位。留作奇兵——主力仍是安静体系。',
      },
    },
    {
      name: { en: '1...e6 (French) — Advance', zh: '1...e6（法兰西）推进变例' },
      san: ['e4', 'e6', 'd4', 'd5', 'e5'],
      note: {
        en: 'Against the French: take space with e5, then c3, Nf3, Bd3. Watch ...c5–...Qb6 hitting d4.',
        zh: '对法兰西：e5 抢空间，接着 c3、Nf3、Bd3。注意 ...c5–...Qb6 攻击 d4。',
      },
    },
    {
      name: { en: '1...c6 (Caro-Kann) — Advance', zh: '1...c6（卡罗-卡恩）推进变例' },
      san: ['e4', 'c6', 'd4', 'd5', 'e5'],
      note: {
        en: 'Same Advance structure: c3, Nf3, Bd3. You keep the space edge and a natural kingside initiative — unlike the French, their bishop does get out (...Bf5), so play against the e6-point and d5.',
        zh: '同样的推进结构：c3、Nf3、Bd3。你保持空间优势和自然的王翼先手——和法兰西不同，他的象能出来（...Bf5），所以针对 e6 点和 d5 作战。',
      },
    },
  ],
  mistakes: [
    {
      title: { en: 'd4 without c3', zh: '没走 c3 就冲 d4' },
      wrong: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'd4'],
      punish: ['exd4', 'Nxd4', 'Bb4+'],
      lesson: {
        en: 'After ...exd4 Nxd4 Bb4+! Black seizes the initiative with check: block with Bd2 or Nc3 and ...Bxc3 ideas (or a pin) leave you worse. c3 is d4’s foundation — build it first.',
        zh: '...exd4 Nxd4 Bb4+！黑方带打将抢走先手：你挡（Bd2 或 Nc3）之后他有 ...Bxc3 的手段（或牵制），局面更差。c3 是 d4 的根基——先打好。',
      },
    },
    {
      title: { en: 'Ng5 too early (hope chess)', zh: '过早 Ng5（一厢情愿）' },
      wrong: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'Ng5'],
      punish: ['d5', 'exd5', 'Na5'],
      lesson: {
        en: 'Against a ready opponent, ...d5 hits the center and Na5 harasses the bishop — you lose time without a real threat. Only Ng5 when the Fried Liver attack is fully prepared.',
        zh: '对手有备时 ...d5 冲中心、Na5 踩象——你没真威胁还丢了先手。只有在飞刀进攻完全成立时才 Ng5。',
      },
    },
    {
      title: { en: 'Premature Bxf7+ sacrifice', zh: '过早 Bxf7+ 弃子' },
      wrong: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'Bxf7+'],
      punish: ['Kxf7', 'Nxe5+', 'Ke8', 'd4'],
      lesson: {
        en: 'After Bxf7+ Kxf7 Nxe5+ White grabs two pawns — but a bishop is still worth more. The king walks away, and Black is simply up material. Save sacrifices for when the Fried Liver is fully justified.',
        zh: 'Bxf7+ Kxf7 Nxe5+ 之后白方能拿两个兵——但象还是比兵值钱。王走开后黑方就是多子。弃子要留给完全成立的飞刀进攻。',
      },
    },
    {
      title: { en: 'Committal Bg5–h4 (getting chased)', zh: '过早 Bg5–h4（被追着打）' },
      wrong: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd3', 'd6', 'Bg5'],
      punish: ['h6', 'Bh4', 'g5'],
      lesson: {
        en: 'Not losing by force — but you gave Black a clear plan (...h6/...g5) and the position sharpens against you. If you have no follow-up, the chase leaves you overextended. In the quiet system the bishop is happier on e3 or staying home until it has a real target.',
        zh: '不是立刻输——但你送给了黑方一个明确计划（...h6/...g5），局面朝对他有利的方向变尖锐。你若没有后续，被追就是过度扩张。安静体系里象放 e3 或先留在家里更舒服。',
      },
    },
    {
      title: { en: 'Trading on c6 without a reason', zh: '无理由地兑 c6 象' },
      wrong: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'Bb5'],
      punish: ['Bd6', 'Bxc6+', 'bxc6', 'O-O'],
      lesson: {
        en: 'Bxc6 is a real plan only when it wins something concrete. Here Black gets the bishop pair, an open b-file and easy development — for free. In the quiet system keep the Italian bishop on c4 and play d3–O-O–Re1.',
        zh: 'Bxc6 只有在能赢到具体东西时才是真计划。这里黑方白拿双象、开放 b 线和顺畅出子。安静体系里留住 c4 的意大利象，走 d3–O-O–Re1。',
      },
    },
  ],
  plans: [
    {
      after: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd3', 'd6', 'O-O', 'O-O', 'Re1'],
      question: {
        en: 'Development is done. What is the next regrouping?',
        zh: '出子完成。下一步怎么重新部署？',
      },
      choices: [
        {
          text: { en: 'Nbd2–f1–g3, the knight tour', zh: 'Nbd2–f1–g3 马的旅行' },
          correct: true,
          why: {
            en: 'The signature plan: the knight reaches g3 and eyes f5/h5. Everything is ready for the d4 break later.',
            zh: '标志性计划：马到 g3 盯 f5/h5，之后 d4 反击也准备好了。',
          },
        },
        {
          text: { en: 'f4–f5 attack immediately', zh: '立刻 f4–f5 进攻' },
          correct: false,
          why: {
            en: 'Too early: the attack works after the knight tour and Re1 support. Now it just weakens e4 and your king’s cover.',
            zh: '太早了：进攻要等马到位、Re1 支撑。现在冲只会松掉 e4 和王前。',
          },
        },
        {
          text: { en: 'a4–a5 on the queenside', zh: '后翼 a4–a5' },
          correct: false,
          why: {
            en: 'Nothing to attack there yet. The Italian is a kingside opening — improve pieces first.',
            zh: '后翼还没目标。意大利是王翼开局——先改善子力。',
          },
        },
        {
          text: { en: 'Bd2, developing the last piece', zh: 'Bd2 出最后一个子' },
          correct: false,
          why: {
            en: 'Passive: the bishop on d2 blocks the knight tour and eyes nothing. It goes to e3 only when needed.',
            zh: '太消极：d2 挡住马的路线还盯不到东西。需要时再 Be3。',
          },
        },
      ],
    },
    {
      after: [
        'e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd3', 'd6',
        'O-O', 'O-O', 'Re1', 'h6', 'Nbd2', 'a6', 'Nf1', 'Re8', 'Ng3', 'Ba7',
        'h3', 'Be6', 'Bxe6', 'Rxe6',
      ],
      question: {
        en: 'Their bishop is gone and the rook is on e6. How do you open the game?',
        zh: '他的象兑掉了，车在 e6。你怎么打开局面？',
      },
      choices: [
        {
          text: { en: 'd4! — the prepared central break', zh: 'd4！——准备好的中心反击' },
          correct: true,
          why: {
            en: 'c3 backs it, Re1 supports it. After ...exd4 cxd4 you play with more space and better structure — the whole opening was preparation for this moment.',
            zh: 'c3 打根基、Re1 支撑。...exd4 cxd4 之后你空间更好、结构更优——整个开局都在为这一刻铺垫。',
          },
        },
        {
          text: { en: 'd4–d5, locking the center', zh: 'd4–d5 封死中心' },
          correct: false,
          why: {
            en: 'd5 gains space but blocks your own pieces — and it gives Black the ...c5 break. Open the center while his king feels drafty.',
            zh: 'd5 抢空间但堵住自己的子，还送他 ...c5 反击。趁他王前透风，打开中心。',
          },
        },
        {
          text: { en: 'Nf5 immediately', zh: '立刻 Nf5' },
          correct: false,
          why: {
            en: 'Nice square, but without d4 first it is just one knight in the camp — they meet it with ...g6 or ...Bb6. Break first, then jump.',
            zh: '格子不错，但没有 d4 配合只是一颗孤马——他 ...g6 或 ...Bb6 就赶走。先冲中心再跳。',
          },
        },
        {
          text: { en: 'g4–g5 pawn storm now', zh: '现在就 g4–g5 兵风暴' },
          correct: false,
          why: {
            en: 'The attack needs every piece ready; right now it only loosens your own king. Structure first.',
            zh: '总攻需要所有子就位；现在只松自己的王。先把结构走对。',
          },
        },
      ],
    },
    {
      after: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd3', 'd6', 'Bg5'],
      question: {
        en: 'You played Bg5 and they answer ...h6. What is the plan?',
        zh: '你走了 Bg5，对手应 ...h6。计划是什么？',
      },
      choices: [
        {
          text: { en: 'Retreat Bh4 and keep the pin tension', zh: 'Bh4 保持张力' },
          correct: true,
          why: {
            en: 'If ...g5?! comes, Bg3 and their king is airy. If they do nothing, the pin on f6 annoys. Only retreat to g3 when challenged again.',
            zh: '他若 ...g5?! 就 Bg3，他王前透风。不走就继续钉住 f6。再被赶才退 g3。',
          },
        },
        {
          text: { en: 'Bxf6 right away', zh: '立刻 Bxf6' },
          correct: false,
          why: {
            en: 'Premature: after ...Qxf6 or ...gxf6 they get the open g-file or the bishop pair. Keep the pin until it wins something concrete.',
            zh: '过早：...Qxf6 或 ...gxf6 他得到开放线或双象。钉子要留到能赢到具体东西为止。',
          },
        },
        {
          text: { en: 'Bh4 then h3 anyway', zh: 'Bh4 后照样 h3' },
          correct: false,
          why: {
            en: 'h3 is useful before Bg5, but after the pin is established the tempo is better spent on Nbd2 or castle.',
            zh: 'h3 在 Bg5 之前有用；钉子扎稳后，这一步不如花在 Nbd2 或易位上。',
          },
        },
      ],
    },
  ],
};
