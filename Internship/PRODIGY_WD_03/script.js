const board = document.getElementById("board");
const message = document.getElementById("message");

let currentPlayer = "X";
let gameover = false;

for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.index = i;
  cell.addEventListener("click", handleCellClick);
  board.appendChild(cell);
}

function handleCellClick(event) {
  if (gameover) return;

  const cell = event.target;
  if (cell.textContent) return;

  cell.textContent = currentPlayer;
  cell.classList.add(`player-${currentPlayer}`);

  const index = parseInt(cell.dataset.index);
  if (checkWin(currentPlayer, index)) {
    gameover = true;
    message.innerText = `Player ${currentPlayer} wins!`;
  } else if (checkDraw()) {
    gameover = true;
    message.innerText = "It's a draw!";
  } else {
    currentPlayer = currentPlayer === "X"? "O" : "X";
  }
}

function checkWin(player, index) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const combination = winningCombinations[i];
    if (
      combination.includes(index) &&
      board.children[combination[0]].textContent === player &&
      board.children[combination[1]].textContent === player &&
      board.children[combination[2]].textContent === player
    ) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  for (let i = 0; i < 9; i++) {
    if (!board.children[i].textContent) {
      return false;
    }
  }

  return true;
}
