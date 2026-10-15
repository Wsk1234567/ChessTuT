// Opening repertoire data — assembled from line modules
// Pilots (deepened schema) override same-id entries from lines-*.js
import { WHITE_LINES } from './lines-white.js';
import { BLACK_LINES } from './lines-black.js';
import { ITALIAN } from './openings/italian.js';
import { CARO } from './openings/caro.js';
import { SLAV } from './openings/slav.js';

function merge(base, upgrades) {
  return base.map((l) => upgrades[l.id] || l);
}

const white = merge(WHITE_LINES, { italian: ITALIAN });
const black = merge(BLACK_LINES, { caro: CARO, slav: SLAV });

export const REPERTOIRE = [...white, ...black];

// Learning roadmap (Progress tab) — bilingual
export const ROADMAP = [
  {
    week: { en: 'Weeks 1–2', zh: '第 1–2 周' },
    text: {
      en: 'Italian Game main line only: walk all moves and say the reason for each. Five drill cards a day.',
      zh: '只学意大利主线：走完全部着法，每步能说出理由。每天 5 张钻练卡。',
    },
  },
  {
    week: { en: 'Weeks 3–4', zh: '第 3–4 周' },
    text: {
      en: 'Add the Caro-Kann (Advance + Classical). In games, use only the systems you have studied.',
      zh: '加入卡罗-卡恩（推进 + 经典）。对局中只用已学体系。',
    },
  },
  {
    week: { en: 'Weeks 5–6', zh: '第 5–6 周' },
    text: {
      en: 'Add the London as White vs 1.d4; start the Slav main line drills.',
      zh: '白棋对 1.d4 上伦敦；斯拉夫主线进入钻练。',
    },
  },
  {
    week: { en: 'Weeks 7–8', zh: '第 7–8 周' },
    text: {
      en: 'Finish the Grand Prix, add Ruy López and French. Push weak-card accuracy above 85%.',
      zh: '大错开局收官，加入西班牙和法兰西。薄弱卡正确率拉到 85% 以上。',
    },
  },
  {
    week: { en: 'Weeks 9–10', zh: '第 9–10 周' },
    text: {
      en: 'Scotch, King’s Indian, and Accelerated Dragon. Run the Tutorial for every line before drilling it.',
      zh: '苏格兰、王翼印度、加速龙。每条线先过教程再钻练。',
    },
  },
  {
    week: { en: 'After', zh: '之后' },
    text: {
      en: 'Four-week cycles: 3 weeks training + 1 week tournament. After each event, add the opponent’s new move to the matching sideline note.',
      zh: '每 4 周一个循环：3 周训练 + 1 周比赛。赛后把对手走出的新招补进对应变着笔记。',
    },
  },
];
