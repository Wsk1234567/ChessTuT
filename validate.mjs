// 校验 data.js 中所有 SAN 序列的合法性
import { REPERTOIRE } from './data.js';
import { Chess } from './chess.esm.js';

let errors = 0;
let moves = 0;

for (const line of REPERTOIRE) {
  const seqs = [
    { name: `main:${line.main.name}`, san: line.main.san },
    ...line.sidelines.map((s) => ({ name: `side:${s.name}`, san: s.san })),
  ];
  for (const seq of seqs) {
    const chess = new Chess();
    for (let i = 0; i < seq.san.length; i++) {
      const san = seq.san[i];
      let mv = null;
      try {
        mv = chess.move(san);
      } catch (e) {
        mv = null;
      }
      if (!mv) {
        console.error(
          `FAIL [${line.id}] ${seq.name}: ply ${i} SAN="${san}" 非法。走到此处 FEN=${chess.fen()} 已走=${seq.san.slice(0, i).join(' ')}`
        );
        errors++;
        break;
      }
      moves++;
    }
  }
}

console.log(`checked ${moves} moves, ${errors} errors`);
process.exit(errors ? 1 : 0);
