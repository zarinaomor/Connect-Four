const columns = 7;
const rows = 6;
const matchToWin = 4;

const playerTurn = 0;
const grid = [[], [], [], [], [], []];
const gameOver = false;

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
    }

  })

  
    