const columns = 7;
const rows = 6;
const matchToWin = 4;

let playerTurn = 0;
let grid = [[], [], [], [], [], []];
let gameOver = false;

function updateMatches(value, matches) {
    return value === playerTurn ? (matches || 0) + 1 : 0
  }

 
  const table = document.querySelector('table');
  table.addEventListener('click', function(e){
    let column = e.target.cellIndex;
    // console.log('clicked');
    if(gameOver || typeof column === "undefined") {
        return;
        // console.log('click')
    }
    let i;
    let row;
    for (let i=rows-1; i>=0; i--) {
        if(typeof grid[i][column] === "undefined") {
            row = i;
            break
            // console.log('hi')
        }
    }
    if(typeof row === "undefined") {
        return
        
    }
    grid[row][column] = playerTurn;
    let checkHorizontal;
    let checkVertical;
    let checkDiagonal1;
    let checkDiagonal2;
    for(let i=0; i<columns; i++) {
        checkHorizontal = updateMatches(grid[row][i], checkHorizontal)
        if(i < rows) {
            checkVertical = updateMatches(grid[i][column], checkVertical);
            checkDiagonal1 = updateMatches(grid[i][column + row - i], checkDiagonal1)
            checkDiagonal2 = updateMatches(grid[i][column - row + i], checkDiagonal1)
        }

        // Check win
        if (checkHorizontal >= matchToWin || checkVertical >= matchToWin
        || checkDiagonal1 >= matchToWin || checkDiagonal2 >= matchToWin) {
            gameOver = true;
        }
    }

        if (gameOver) {
            console.log('Winner')
        }

        table.rows[row].cells[column].style.backgroundColor = playerTurn ? "red" : "yellow"

        playerTurn = playerTurn ? 0 : 1

  })

  
    