// 校验 REPERTOIRE 中所有 SAN 序列的合法性（主线、变着、错误序列、计划题局面）
import { REPERTOIRE } from './data.js';
import { Chess } from './chess.esm.js';

let errors = 0;
let moves = 0;

function play(label, sanList) {
  const chess = new Chess();
  for (let i = 0; i < sanList.length; i++) {
    const san = sanList[i];
    let mv = null;
    try {
      mv = chess.move(san);
    } catch {
      mv = null;
    }
    if (!mv) {
      console.error(
        `FAIL ${label}: ply ${i} SAN="${san}" 非法。FEN=${chess.fen()} 已走=${sanList.slice(0, i).join(' ')}`
      );
      errors++;
      return false;
    }
    moves++;
  }
  return true;
}

for (const line of REPERTOIRE) {
  const seqs = [
    { name: `[${line.id}] main:${line.main.name.en || line.main.name}`, san: line.main.san },
    ...line.sidelines.map((s) => ({ name: `[${line.id}] side:${s.name.en || s.name}`, san: s.san })),
    ...(line.mistakes || []).map((m, mi) => ({
      name: `[${line.id}] mistake${mi} wrong`,
      san: m.wrong,
    })),
    ...(line.plans || []).map((p, pi) => ({ name: `[${line.id}] plan${pi} after`, san: p.after })),
  ];
  for (const seq of seqs) {
    play(seq.name, seq.san);
  }

  // punish only makes sense continuing the wrong sequence
  (line.mistakes || []).forEach((m, mi) => {
    const combined = [...m.wrong, ...m.punish];
    play(`[${line.id}] mistake${mi} wrong+punish`, combined);
  });
}

console.log(`checked ${moves} moves, ${errors} errors`);
process.exit(errors ? 1 : 0);
