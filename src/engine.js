/* 게임 규칙만 담당합니다. DOM이나 화면 스타일은 이 파일에서 다루지 않습니다. */
(function (root) {
  "use strict";

  const DEFAULT_CONFIG = Object.freeze({ rows: 9, cols: 9, mines: 10 });

  function createGame(config = DEFAULT_CONFIG) {
    const { rows, cols, mines } = config;
    if (![rows, cols, mines].every(Number.isInteger) || rows < 1 || cols < 1 || mines < 0 || mines >= rows * cols) {
      throw new RangeError("행·열은 양의 정수, 지뢰 수는 전체 칸보다 작은 0 이상의 정수여야 합니다.");
    }
    return {
      rows, cols, mineCount: mines, status: "ready", minesPlaced: false,
      cells: Array.from({ length: rows * cols }, (_, index) => ({
        row: Math.floor(index / cols), col: index % cols,
        isMine: false, adjacent: 0, revealed: false, flagged: false
      }))
    };
  }

  // 좌표가 실제 보드 안에 있는지 먼저 확인합니다.
  function getCell(game, row, col) {
    if (!Number.isInteger(row) || !Number.isInteger(col) || row < 0 || col < 0 || row >= game.rows || col >= game.cols) return null;
    return game.cells[row * game.cols + col];
  }

  // TODO 1: 서로 다른 칸에 정확히 mineCount개의 지뢰를 배치하세요.
  // safeRow, safeCol은 첫 클릭 좌표이므로 지뢰를 놓으면 안 됩니다.
  // rng는 0 이상 1 미만을 반환하는 함수입니다. 테스트할 때 고정할 수 있습니다.
  // 권장: 후보 좌표를 섞어서 앞에서 mineCount개 선택. 무한 재시도는 피하세요.
  function placeMines(game, safeRow, safeCol, rng = Math.random) {
    void game; void safeRow; void safeCol; void rng;
    // 스타터에는 의도적으로 지뢰를 배치하지 않습니다.
  }

  // TODO 2: cell 주변 8방향의 실제 지뢰 수를 반환하세요.
  // 자기 자신은 세지 않고, 보드 밖 좌표는 제외하세요.
  function countAdjacentMines(game, row, col) {
    void game; void row; void col;
    return 0;
  }

  // TODO 3: startCell이 0일 때 연결된 0과 경계 숫자 칸을 여세요.
  // 지뢰와 깃발 칸은 열지 않고, 방문한 칸을 계속 재방문하지 마세요.
  // 큐를 이용한 반복 탐색을 권장합니다. startCell은 이미 열린 상태입니다.
  function expandEmptyArea(game, startCell) {
    void game; void startCell;
  }

  // TODO 4: 모든 안전한 칸이 열렸을 때만 true를 반환하세요.
  // 깃발을 모두 썼다는 이유만으로 승리하면 안 됩니다.
  function hasWon(game) {
    void game;
    return false;
  }

  function revealCell(game, row, col, rng = Math.random) {
    const cell = getCell(game, row, col);
    if (!cell || cell.flagged || cell.revealed || game.status === "won" || game.status === "lost") return false;
    if (!game.minesPlaced) {
      placeMines(game, row, col, rng);
      for (const item of game.cells) item.adjacent = countAdjacentMines(game, item.row, item.col);
      game.minesPlaced = true;
    }
    game.status = "playing";
    cell.revealed = true;
    if (cell.isMine) {
      game.status = "lost";
    } else {
      if (cell.adjacent === 0) expandEmptyArea(game, cell);
      if (hasWon(game)) game.status = "won";
    }
    return true;
  }

  function toggleFlag(game, row, col) {
    const cell = getCell(game, row, col);
    if (!cell || cell.revealed || game.status === "won" || game.status === "lost") return false;
    if (!cell.flagged && game.cells.filter(item => item.flagged).length >= game.mineCount) return false;
    cell.flagged = !cell.flagged;
    return true;
  }

  function summarize(game) {
    return {
      revealed: game.cells.filter(cell => cell.revealed).length,
      flags: game.cells.filter(cell => cell.flagged).length,
      status: game.status
    };
  }

  const api = { DEFAULT_CONFIG, createGame, getCell, placeMines, countAdjacentMines, expandEmptyArea, hasWon, revealCell, toggleFlag, summarize };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.MinesweeperEngine = api;
})(typeof globalThis === "undefined" ? this : globalThis);
