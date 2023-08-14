// Sliding Puzzle Game
const puzzleGameContainer = document.getElementById('puzzle-game');
const puzzleTiles = generatePuzzleTiles();
let emptyTileIndex = 8; // Initial empty tile index

function generatePuzzleTiles() {
    const tiles = [];
    for (let i = 1; i <= 9; i++) {
        const tile = document.createElement('div');
        tile.classList.add('puzzle-tile');
        tile.textContent = i;
        tile.dataset.value = i;
        tile.addEventListener('click', () => movePuzzleTile(i - 1));
        tiles.push(tile);
    }
    return tiles;
}

function renderPuzzleTiles() {
    puzzleGameContainer.innerHTML = '';
    puzzleTiles.forEach(tile => {
        puzzleGameContainer.appendChild(tile);
    });
}

function movePuzzleTile(clickedIndex) {
    if (isAdjacent(clickedIndex, emptyTileIndex)) {
        [puzzleTiles[clickedIndex], puzzleTiles[emptyTileIndex]] = [puzzleTiles[emptyTileIndex], puzzleTiles[clickedIndex]];
        emptyTileIndex = clickedIndex;
        renderPuzzleTiles();
    }
}

function isAdjacent(index1, index2) {
    const row1 = Math.floor(index1 / 3);
   

