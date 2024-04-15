import checkForWin from "./utils/checkForWin.js";
import randomizeArray from "./utils/randomizeArray.js";
import setInitialImages from "./utils/setInitialImages.js";
import swapImageSource from "./utils/swapImageSource.js";

let imagePositions = ["1b", "1c", "2a", "2b", "2c", "3a", "3b", "3c"];
const cells = [...document.querySelectorAll('.cell')];

let initialPositions = randomizeArray([...imagePositions]);
setInitialImages(cells, initialPositions);

// place cells in a multidimensional array
let cellsAsGrid = [];
let z = 0;
for (let x = 0; x < 3; x++) {
    cellsAsGrid.push([]);
    for (let y = 0; y < 3; y++, z++) {
        cellsAsGrid[x].push(cells[z]);
    }
}

cells.map((cell) => {
    cell.addEventListener('click', () => {
        let x = parseInt(cell.id.substring(cell.id.length - 1, cell.id.length));
        let y = parseInt(cell.id.substring(cell.id.length - 2, cell.id.length - 1));
        // Check that a neighboring cell is empty and, if it is, swap both src values
        if (x > 0 && cellsAsGrid[x - 1][y].firstChild.getAttribute("src") === "") {
            swapImageSource(cell.firstChild, cellsAsGrid[x - 1][y].firstChild);
            checkForWin(imagePositions, cells);
        } else if (y > 0 && cellsAsGrid[x][y - 1].firstChild.getAttribute("src") === "") {
            swapImageSource(cell.firstChild, cellsAsGrid[x][y - 1].firstChild);
            checkForWin(imagePositions, cells);
        }
        else if (x < cellsAsGrid.length - 1 && cellsAsGrid[x + 1][y].firstChild.getAttribute("src") === "") {
            swapImageSource(cell.firstChild, cellsAsGrid[x + 1][y].firstChild);
            checkForWin(imagePositions, cells);
        }
        else if (y < cellsAsGrid.length - 1 && cellsAsGrid[x][y + 1].firstChild.getAttribute("src") === "") {
            swapImageSource(cell.firstChild, cellsAsGrid[x][y + 1].firstChild);
            checkForWin(imagePositions, cells);
        }
    });
});