const { test } = require("node:test");
const assert = require("node:assert/strict");
const E = require("../src/engine.js");

test("기본 보드는 독립적인 81개 칸과 목표 지뢰 10개를 가진다", () => {
  const game = E.createGame();
  assert.equal(game.cells.length, 81);
  assert.equal(game.mineCount, 10);
  assert.equal(game.status, "ready");
  game.cells[0].flagged = true;
  assert.equal(game.cells[1].flagged, false);
});
test("범위를 벗어난 좌표를 보드의 다른 행으로 잘못 해석하지 않는다", () => {
  const g = E.createGame();
  for (const [r, c] of [[-1, 0], [0, -1], [9, 0], [0, 9], [0.5, 0]]) assert.equal(E.getCell(g, r, c), null);
  assert.equal(E.getCell(g, 8, 8), g.cells[80]);
});
test("불가능한 보드 설정을 거부한다", () => {
  for (const c of [{ rows: 0, cols: 9, mines: 1 }, { rows: 2, cols: 2, mines: 4 }, { rows: 2, cols: 2, mines: -1 }]) assert.throws(() => E.createGame(c), RangeError);
});
test("깃발은 켜고 끌 수 있고 목표 지뢰 수를 넘지 않는다", () => {
  const g = E.createGame({ rows: 3, cols: 3, mines: 2 });
  assert.equal(E.toggleFlag(g, 0, 0), true);
  assert.equal(E.toggleFlag(g, 0, 1), true);
  assert.equal(E.toggleFlag(g, 0, 2), false);
  assert.equal(E.toggleFlag(g, 0, 0), true);
  assert.equal(E.summarize(g).flags, 1);
});
test("깃발 칸은 클릭해도 열리지 않고 첫 지뢰 배치를 시작하지 않는다", () => {
  const g = E.createGame();
  E.toggleFlag(g, 0, 0);
  assert.equal(E.revealCell(g, 0, 0), false);
  assert.equal(g.minesPlaced, false);
  assert.equal(g.cells[0].revealed, false);
});
test("클릭한 안전 칸은 열리고 다시 클릭해도 중복 처리하지 않는다", () => {
  const g = E.createGame();
  E.revealCell(g, 4, 4, () => 0.25);
  assert.equal(E.getCell(g, 4, 4).revealed, true);
  const before = E.summarize(g).revealed;
  assert.equal(E.revealCell(g, 4, 4), false);
  assert.equal(E.summarize(g).revealed, before);
});
test("열린 칸에는 깃발을 놓을 수 없다", () => {
  const g = E.createGame();
  g.cells[0].revealed = true;
  assert.equal(E.toggleFlag(g, 0, 0), false);
});
test("지뢰 칸을 열면 패배하고 이후 입력을 무시한다", () => {
  const g = E.createGame();
  g.minesPlaced = true;
  g.cells[1].isMine = true;
  E.revealCell(g, 0, 1);
  assert.equal(g.status, "lost");
  assert.equal(E.revealCell(g, 0, 0), false);
  assert.equal(E.toggleFlag(g, 0, 0), false);
});
test("승리 뒤 입력을 무시하며 새 보드는 이전 기록을 물려받지 않는다", () => {
  const g = E.createGame();
  g.status = "won";
  assert.equal(E.revealCell(g, 0, 0), false);
  assert.equal(E.toggleFlag(g, 0, 0), false);
  assert.deepEqual(E.summarize(E.createGame()), { revealed: 0, flags: 0, status: "ready" });
});
