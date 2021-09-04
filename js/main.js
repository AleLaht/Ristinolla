let gameIsActive, currentPlayer, tiles, board, error, displayPlayer;
let reset = document.getElementById('reset');
let winner = document.getElementById('winner')

const resetVariables = () => {
    gameIsActive = true;
    currentPlayer = 'O';
    tiles = Array.from(document.querySelectorAll('.tile'));
    board = ['', '', '', '', '', '', '', '', '']
    error = 'Error!';
    displayPlayer = document.getElementById('player');
    displayPlayer.innerHTML = `Pelaajan ${currentPlayer} vuoro`;
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

/*
0,1,2
1,4,7
2,5,8
3,4,5
6,7,8
6,4,2
0,4,8
*/

//Check win conditions
const checkWinCondition = () => {
    for (let w = 0; w < board.length; w++) {
        console.log(board);
        if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
            winner.innerHTML = 'Player O wins'
            gameIsActive = false;
        } else if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
            winner.innerHTML = 'Player O wins'
            gameIsActive = false;
        } else if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
            winner.innerHTML = 'Player O wins'
            gameIsActive = false;
        } else if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
            winner.innerHTML = 'Player O wins'
            gameIsActive = false;
        } else if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
            winner.innerHTML = 'Player O wins'
            gameIsActive = false;
        } else if (board[6] === 'O' && board[4] === 'O' && board[2] === 'O') {
            winner.innerHTML = 'Player O wins'
            gameIsActive = false;
        } else if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
            winner.innerHTML = 'Player O wins'
            gameIsActive = false;
        } else if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
            winner.innerHTML = 'Player X wins'
            gameIsActive = false;
        } else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
            winner.innerHTML = 'Player X wins'
            gameIsActive = false;
        } else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
            winner.innerHTML = 'Player X wins'
            gameIsActive = false;
        } else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
            winner.innerHTML = 'Player X wins'
            gameIsActive = false;
        } else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
            winner.innerHTML = 'Player X wins'
            gameIsActive = false;
        } else if (board[6] === 'X' && board[4] === 'X' && board[2] === 'X') {
            winner.innerHTML = 'Player X wins'
            gameIsActive = false;
        } else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
            winner.innerHTML = 'Player X wins'
            gameIsActive = false;
        } else {
            return error;
        }
    }
}

// handle clicks on gameboard tiles

for (let i = 0; i < tiles.length; i++) {
    tiles[i].onclick = function (handleClick) {

        // Check if tile already has data
        if (this.innerHTML === '' && gameIsActive) {
            board[i] = currentPlayer;
            this.innerHTML = board[i]
            changeCurrentPlayer();
            displayPlayer.innerHTML = `Pelaajan ${currentPlayer} vuoro`;
            checkWinCondition();
        }
    };
    tiles[i].innerHTML = '';
}


//Reset game
reset.onclick = function () {
    resetVariables();
    var r = document.getElementsByClassName('tile');
    for (let j = 0; j < tiles.length; j++) {
        r[j].innerHTML = '';
    }
    winner.innerHTML = '';
}