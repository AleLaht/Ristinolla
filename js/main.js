let gameActive = true;
let currentPlayer = 'X';
let tiles = Array.from(document.querySelectorAll('.tile'));

const gameboard = {
    tiles: Array.from(document.querySelectorAll('.tile')),
    board: [
        '', '', '',
        '', '', '',
        '', '', ''
    ]
}

let tile1 = tiles[0];

// change current player
let changeCurrentPlayer = () => {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}

// handle clicks on gameboard tiles
tile1.onclick = function(handleClick) {
    document.getElementById('asd').innerHTML = currentPlayer;
    changeCurrentPlayer();
};

console.log(gameboard.tiles[5]);