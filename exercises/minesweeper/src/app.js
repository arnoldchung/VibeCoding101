/* 화면 표시와 입력 연결. 미션 1~4는 engine.js에서 구현합니다. */
(function () {
  "use strict";
  const Engine = window.MinesweeperEngine;
  const board = document.querySelector("#board");
  const status = document.querySelector("#game-status");
  const flagButton = document.querySelector("#flag-mode");
  let game = Engine.createGame();
  let flagMode = false;
  let focusedIndex = 0;

  function labelFor(cell) {
    const position = `${cell.row + 1}행 ${cell.col + 1}열`;
    if (game.status === "lost" && cell.isMine) return `${position}, 지뢰`;
    if (cell.flagged) return `${position}, 깃발`;
    if (!cell.revealed) return `${position}, 닫힌 칸`;
    return `${position}, 열린 칸, 주변 지뢰 ${cell.adjacent}개`;
  }

  function render() {
    const summary = Engine.summarize(game);
    document.querySelector("#flag-count").textContent = summary.flags;
    document.querySelector("#revealed-count").textContent = summary.revealed;
    board.replaceChildren();
    for (const [index, cell] of game.cells.entries()) {
      const button = document.createElement("button");
      const showMine = game.status === "lost" && cell.isMine;
      const wrongFlag = game.status === "lost" && cell.flagged && !cell.isMine;
      button.type = "button";
      button.className = ["cell", cell.revealed ? "revealed" : "", cell.flagged ? "flagged" : "", showMine ? "mine" : "", wrongFlag ? "wrong-flag" : ""].filter(Boolean).join(" ");
      button.dataset.index = index;
      button.dataset.row = cell.row;
      button.dataset.col = cell.col;
      button.dataset.number = cell.revealed ? cell.adjacent : "";
      button.tabIndex = index === focusedIndex ? 0 : -1;
      button.setAttribute("aria-label", labelFor(cell));
      if (showMine) button.textContent = "✳";
      else if (wrongFlag) button.textContent = "×";
      else if (cell.flagged) button.textContent = "⚑";
      else if (cell.revealed && cell.adjacent > 0) button.textContent = cell.adjacent;
      board.append(button);
    }
    const messages = {
      ready: "준비 완료. 칸을 눌러 시작하세요.",
      playing: "탐색 중. 구현한 규칙이 예상대로 작동하는지 확인하세요.",
      lost: "지뢰를 열었습니다. 다시 시작해서 다른 경로를 찾아보세요.",
      won: "모든 안전한 칸을 열었습니다. 성공입니다!"
    };
    status.textContent = messages[game.status];
  }

  function act(index, flag) {
    const cell = game.cells[index];
    if (!cell) return;
    focusedIndex = index;
    const changed = flag ? Engine.toggleFlag(game, cell.row, cell.col) : Engine.revealCell(game, cell.row, cell.col);
    render();
    board.querySelector(`[data-index="${focusedIndex}"]`).focus({ preventScroll: true });
    if (flag && !changed && !cell.flagged && !cell.revealed && game.status !== "lost" && game.status !== "won") {
      status.textContent = "깃발은 최대 10개까지 표시할 수 있습니다.";
    }
  }

  board.addEventListener("click", event => {
    const button = event.target.closest("[data-index]");
    if (button) act(Number(button.dataset.index), flagMode);
  });
  board.addEventListener("contextmenu", event => {
    const button = event.target.closest("[data-index]");
    if (!button) return;
    event.preventDefault();
    act(Number(button.dataset.index), true);
  });
  board.addEventListener("keydown", event => {
    const button = event.target.closest("[data-index]");
    if (!button) return;
    const index = Number(button.dataset.index);
    const cell = game.cells[index];
    const moves = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] };
    if (moves[event.key]) {
      event.preventDefault();
      const [dr, dc] = moves[event.key];
      const target = Engine.getCell(game, cell.row + dr, cell.col + dc);
      if (!target) return;
      focusedIndex = target.row * game.cols + target.col;
      button.tabIndex = -1;
      const next = board.querySelector(`[data-index="${focusedIndex}"]`);
      next.tabIndex = 0;
      next.focus();
    } else if (event.key.toLowerCase() === "f") {
      event.preventDefault();
      act(index, true);
    }
    // Enter / Space는 HTML button의 기본 click 동작을 사용합니다.
  });
  document.querySelector("#reset-button").addEventListener("click", () => {
    game = Engine.createGame();
    flagMode = false;
    focusedIndex = 0;
    flagButton.setAttribute("aria-pressed", "false");
    document.querySelector("#flag-mode-label").textContent = "꺼짐";
    render();
  });
  flagButton.addEventListener("click", () => {
    flagMode = !flagMode;
    flagButton.setAttribute("aria-pressed", String(flagMode));
    document.querySelector("#flag-mode-label").textContent = flagMode ? "켜짐" : "꺼짐";
  });
  document.querySelectorAll("[data-mission]").forEach(input => input.addEventListener("change", () => {
    const count = document.querySelectorAll("[data-mission]:checked").length;
    document.querySelector("#mission-progress").textContent = `직접 확인한 미션에 체크하세요. ${count} / 4`;
  }));
  render();
})();
