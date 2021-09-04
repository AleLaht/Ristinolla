let currentPlayer, tiles, board, error, displayPlayer;
let reset = document.getElementById('reset');

const resetVariables = () => {
    currentPlayer = 'O';
    tiles = Array.from(document.querySelectorAll('.tile'));
    board = ['', '', '', '', '', '', '', '', '']
    error = 'Error!';
    displayPlayer = document.getElementById('player');
    displayPlayer.innerHTML = currentPlayer;
}
resetVariables();

// change current player
const changeCurrentPlayer = () => {
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
            board[i] = currentPlayer;  
            this.innerHTML = board[i]
            changeCurrentPlayer(); 
            displayPlayer.innerHTML = currentPlayer;
        }
    };
        tiles[i].innerHTML = '';
}

//Reset game
reset.onclick = function() {
    resetVariables();
    var r = document.getElementsByClassName('tile');
    for (j = 0; j < tiles.length; j++) {
        r[j].innerHTML = '';
    }
}