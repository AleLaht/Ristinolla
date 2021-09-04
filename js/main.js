let gameActive = true;
let currentPlayer = 'O';
let tiles = Array.from(document.querySelectorAll('.tile'));
let board = [
    '', '', '',
    '', '', '',
    '', '', ''
]
let error = 'Error!';

// change current player
let changeCurrentPlayer = () => {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else if (currentPlayer === 'O') {
        currentPlayer = 'X';
    } else {
        return error
    }
}



// handle clicks on gameboard tiles

for (let i = 0; i < tiles.length; i++) {
    tiles[i].onclick = function(handleClick) {
        
        // Check if tile already has data
        if (this.innerHTML === '') {
            tiles.forEach((el) => {
                board[el[0]] = el[1];
            });
            this.innerHTML = currentPlayer
            changeCurrentPlayer();
        } 
    };
}


