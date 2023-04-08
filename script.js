const squares = document.querySelectorAll('.square');
const resetButton = document.querySelector('#reset');
let currentPlayer = 'x';

squares.forEach((square) => {
	square.addEventListener('click', () => {
		if (!square.classList.contains('marked-x') && !square.classList.contains('marked-o')) {
			square.classList.add(`marked-${currentPlayer}`);
			currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
		}
		checkForWinner();
	});
});

resetButton.addEventListener('click', () => {
	squares.forEach((square) => {
		square.classList.remove('marked-x', 'marked-o');
	});
	currentPlayer = 'x';
});

function checkForWinner() {
	const winningCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i = 0; i < winningCombos.length; i++) {
		const [a, b, c] = winningCombos[i];
		const squareA = squares[a];
		const squareB = squares[b];
		const squareC = squares[c];

		if (squareA.classList.contains(`marked-${currentPlayer}`) &&
			squareB.classList.contains(`marked-${currentPlayer}`) &&
			squareC.classList.contains(`marked-${currentPlayer}`)) {
			alert(`Jogador ${currentPlayer.toUpperCase()} venceu!`);
			resetGame();
			break;
		}
		else if (isTie()) {
			alert("Empate!");
			resetGame();
			break;
		}
	}

	function isTie() {
		let isFull = true;
		squares.forEach((square) => {
			if (!square.classList.contains('marked-x') && !square.classList.contains('marked-o')) {
				isFull = false;
			}
		});
		return isFull;
	}

	function resetGame() {
		squares.forEach((square) => {
			square.classList.remove('marked-x', 'marked-o');
		});
		currentPlayer = 'x';
	}
}
