/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */

type Board = string[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

function moveTrainTS(board: Board, mov: Movement): Result {
  const MOVES: Record<Movement, [number, number]> = {
    U: [0, -1],
    D: [0, 1],
    R: [1, 0],
    L: [-1, 0],
  };

  for (let y = 0; y < board.length; y++) {
    const x = board[y].indexOf("@");
    if (x !== -1) {
      const [dx, dy] = MOVES[mov];
      const newX = x + dx;
      const newY = y + dy;

      if (newY < 0 || newY >= board.length || newX < 0 || newX >= board[0].length) {
        return "crash";
      }

      const destChar = board[newY][newX];
      return destChar === "*" ? "eat" : destChar === "o" ? "crash" : "none";
    }
  }

  return "crash";
}
