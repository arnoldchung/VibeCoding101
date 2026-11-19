// 처음에는 실패하는 과제용 검사입니다. npm test에는 포함하지 않습니다.
const { test } = require("node:test");
const assert = require("node:assert/strict");
const E = require("../src/engine.js");

function fixture(rows, cols, mines) {
  const g = E.createGame({ rows, cols, mines: mines.length });
  for (const [r, c] of mines) E.getCell(g, r, c).isMine = true;
  for (const cell of g.cells) {
    let count = 0;
    for (const mine of mines) if (Math.max(Math.abs(mine[0] - cell.row), Math.abs(mine[1] - cell.col)) === 1) count++;
    cell.adjacent = count;
  }
  g.minesPlaced = true;
  return g;
}

test("미션 1: 정확한 개수, 중복 없음, 첫 클릭 안전", { timeout: 1000 }, () => {
  const g = E.createGame();
  E.placeMines(g, 4, 4, () => 0.25);
  assert.equal(g.cells.filter(c => c.isMine).length, 10);
  assert.equal(E.getCell(g, 4, 4).isMine, false);
});
test("미션 1: 거의 꽉 찬 작은 보드에서도 첫 칸 보호", { timeout: 1000 }, () => {
  const g = E.createGame({ rows: 2, cols: 2, mines: 3 });
  E.placeMines(g, 0, 0, () => 0);
  assert.equal(g.cells.filter(c => c.isMine).length, 3);
  assert.equal(g.cells[0].isMine, false);
});
test("미션 2: 모서리·가장자리·중앙의 이웃만 센다", () => {
  const g = fixture(3, 3, [[0, 0], [0, 2], [2, 1]]);
  assert.equal(E.countAdjacentMines(g, 1, 1), 3);
  assert.equal(E.countAdjacentMines(g, 0, 1), 2);
  assert.equal(E.countAdjacentMines(g, 2, 0), 1);
  assert.equal(E.countAdjacentMines(g, 0, 0), 0);
});
test("미션 2: 행 끝을 다음 행 첫 칸과 이웃으로 오인하지 않는다", () => {
  const g = fixture(3, 3, [[1, 0]]);
  assert.equal(E.countAdjacentMines(g, 0, 2), 0);
});
test("미션 3: 연결된 빈 영역과 경계 숫자를 연다", () => {
  const g = fixture(4, 4, [[0, 0]]);
  const start = E.getCell(g, 3, 3);
  start.revealed = true;
  E.expandEmptyArea(g, start);
  assert.equal(g.cells.filter(c => c.revealed).length, 15);
  assert.equal(g.cells[0].revealed, false);
  assert.equal(E.getCell(g, 1, 1).revealed, true);
});
test("미션 3: 깃발 칸은 자동으로 열지 않는다", () => {
  const g = fixture(4, 4, [[0, 0]]);
  E.getCell(g, 2, 2).flagged = true;
  const start = E.getCell(g, 3, 3);
  start.revealed = true;
  E.expandEmptyArea(g, start);
  assert.equal(E.getCell(g, 2, 2).revealed, false);
  assert.equal(E.getCell(g, 3, 2).revealed, true);
});
test("미션 4: 모든 안전 칸을 연 뒤에만 승리", () => {
  const g = fixture(3, 3, [[0, 0]]);
  g.cells[0].flagged = true;
  assert.equal(E.hasWon(g), false);
  for (const cell of g.cells) if (!cell.isMine) cell.revealed = true;
  assert.equal(E.hasWon(g), true);
  g.cells[1].revealed = false;
  assert.equal(E.hasWon(g), false);
});
test("통합: 안전한 첫 클릭, 패배, 종료 후 입력 차단", { timeout: 1000 }, () => {
  const g = E.createGame();
  E.revealCell(g, 4, 4, () => 0.5);
  assert.equal(g.cells.filter(c => c.isMine).length, 10);
  assert.equal(E.getCell(g, 4, 4).isMine, false);
  if (g.status === "won") return; // 첫 클릭으로 모든 안전 칸을 연 배치도 유효합니다.
  const mine = g.cells.find(c => c.isMine);
  E.revealCell(g, mine.row, mine.col);
  assert.equal(g.status, "lost");
  assert.equal(E.toggleFlag(g, 8, 8), false);
});
