const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombination = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

function checkWinner() {
    for (let combo of winningCombination) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`${currentPlayer} wins!`);
            resetGame();
            return;
        }
    }
    if (!board.includes('')) {
        alert('It\'s a draw!');
        resetGame();
    }
}

function handleClick(event) {
    const index = event.target.dataset.index;
    if (!board[index]) {
        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
