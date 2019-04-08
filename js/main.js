// state
const columns = 7;
const rows = 6;
const matchTheWin = 4;

// keeps track of players turn
let playerTurn = 0;
let grid = [[], [], [], [], [], []];
let gameOver = false;

const updateValues = (values, matches) => {
  return values === playerTurn ? (matches || 0) + 1 : 0
}

const table = document.querySelector('table');
table.addEventListener('click', function (e) {
  let column = e.target.cellIndex;
  if(gameOver || typeof column === 'undfined'){
    return;
  }
    let i;
    let row;

    for (i = rows - 1; i>=0; i--) {
      if(typeof grid[i][column] === 'undefined') {
        row = i;
        break
      }
    }
    if(typeof row === 'undefined') {
      return;
    }

    grid[row][column] = playerTurn;

    let checkHorizontal;
    let checkVertical;
    let checkDiagonal1;
    let checkDiagonal2;

    for (let i = 0; i < columns; i++) {
      checkHorizontal = updateValues(grid[row][i], checkHorizontal)
      if (i < rows) {
        checkVertical = updateValues(grid[i][column], checkVertical)
        checkDiagonal1 = updateValues(grid[i][column + row - i], checkDiagonal1)
        checkDiagonal2 = updateValues(grid[i][column - row + i], checkDiagonal2)
      }
      if(checkHorizontal>=matchTheWin
        || checkVertical>=matchTheWin
        || checkDiagonal1>=matchTheWin
        || checkDiagonal2>=matchTheWin) {
          gameOver = true;
        }
    }

      if(gameOver) {
        console.log("WINNER");
      }
      table.rows[row].cells[column].style.backgroundColor =
      playerTurn ? "red" : "yellow"

      playerTurn = playerTurn ? 0 : 1
})