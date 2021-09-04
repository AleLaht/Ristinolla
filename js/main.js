let gameActive = true;
let currentPlayer = 'O';
let tiles = Array.from(document.querySelectorAll('.tile'));
let board = [
    '', '', '',
    '', '', '',
    '', '', ''
]


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
    } else if (currentPlayer === 'O') {
        currentPlayer = 'X';
    } else {
        return 'Error!'
    }
}



// handle clicks on gameboard tiles

for (let i = 0; i < tiles.length; i++) {
    tiles[i].onclick = function(handleClick) {
        tiles.forEach((el) => {
            board[el[0]] = el[1];
        });
        this.innerHTML = currentPlayer
        changeCurrentPlayer();
    };
}

console.log(gameboard.tiles);
console.log(board)

