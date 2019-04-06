const columns = 7;
const rows = 6;
const matchToWin = 4;

const playerTurn = 0;
const grid = [[], [], [], [], [], []];
const gameOver = false;

function updateMatches(value, matches) {
    return value === playerTurn ? (matches || 0) + 1 : 0
  }