
const columns = 7;
const rows = 6;
const matchToWin = 4;

let playerTurn = 0;
let grid = [[], [], [], [], [], []];
let gameOver = false;

function updateMatches(value, matches) {   
    if(value === playerTurn) {
        if(matches) {
          return matches + 1
        } else {
          return 1
        }
      } else {
        return 0
      }
  };

  const playerOne = document.getElementById('playerOne');
  playerOne.style.color = "red";
  const playerTwo = document.getElementById('playerTwo');
  playerTwo.style.color = "yellow";
  const reset = document.querySelector('button');
  const winner = document.querySelector('h4');
  const td = document.querySelectorAll('td')
  

  reset.addEventListener('click', () => {
      td.forEach(slot => slot.style.backgroundColor = 'white')
      grid = [[], [], [], [], [], []];
    //   reset.style.visibility = "hidden";
      winner.innerText = '';
      gameOver = false;
  })

 
  const table = document.querySelector('table');
  table.addEventListener('click', function(e){
    let column = e.target.cellIndex;
    // console.log('clicked');
    if(gameOver || typeof column === "undefined") {
        return;
    }
    let i;
    let row;
    for (let i=rows-1; i>=0; i--) {
        if(typeof grid[i][column] === "undefined") {
            row = i;
            break;
        }
    }
    if(typeof row === "undefined") {
        return;
        
    }
    
    //update board
    if (playerTurn) {
        result = "yellow";
    table.rows[row].cells[column].style.backgroundColor = result;
    } else {
        result = "red";
    table.rows[row].cells[column].style.backgroundColor = result;
    }
  

    // switch turns
    if(playerTurn === 0) {
        playerTurn = 1;
    } else {
        playerTurn = 0;
    }

    // track of players move
    grid[row][column] = playerTurn;

    
    // check matches
    let checkHorizontal;
    let checkVertical;
    let checkDiagonal1;
    let checkDiagonal2;


    for(let i=0; i<columns; i++) {
        checkHorizontal = updateMatches(grid[row][i], checkHorizontal);
        if(i < rows) {
            checkVertical = updateMatches(grid[i][column], checkVertical);
            checkDiagonal1 = updateMatches(grid[i][column + row - i], checkDiagonal1);
            checkDiagonal2 = updateMatches(grid[i][column - row + i], checkDiagonal2);
        }

        // Check win
            if (checkHorizontal >= matchToWin
                || checkVertical >= matchToWin
                || checkDiagonal1 >= matchToWin 
                || checkDiagonal2 >= matchToWin){
                    if(result === "red"){
                        winner.innerText = "Player One Wins!"
                        winner.style.color = "red";
                    } else {
                        winner.innerText = "Player Two Wins!"
                        winner.style.color = "yellow";
                    }
                   gameOver = true;
               } 
    }

        if (gameOver) {
            console.log('Winner!!!!!!');
            // reset.style.visibility = "visible";
           
        }    
  });

  
