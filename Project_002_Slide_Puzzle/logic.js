import randomizeArray from "./utils/randomizeArray.js";
import setInitialImages from "./utils/setInitialImages.js";

let imagePositions = ["1b", "1c", "2a", "2b", "2c", "3a", "3b", "3c"];
const cells = [...document.querySelectorAll('.cell')];

imagePositions = randomizeArray(imagePositions);
setInitialImages(cells, imagePositions);

// place cells in a multidimensional array
let cellsAsGrid = [];
let z = 0;
for (let x = 0; x < 3; x++) {
    cellsAsGrid.push([]);
    for (let y = 0; y < 3; y++, z++) {
        cellsAsGrid[x].push(cells[z]);
    }
}

function swapImageSource(firstImage, secondImage) {
    secondImage.src = firstImage.src;
    firstImage.src = "";
}

cells.map((cell) => {
    cell.addEventListener('click', () => {
        let x = parseInt(cell.id.substring(cell.id.length - 1, cell.id.length));
        let y = parseInt(cell.id.substring(cell.id.length - 2, cell.id.length - 1));
        // Check that a neighboring cell is empty and, if it is, swap both src values
        console.log(cellsAsGrid[0][1].firstChild.src);
        if (x > 0 && cellsAsGrid[x - 1][y].firstChild.getAttribute("src") === "") {
            swapImageSource(cell.firstChild, cellsAsGrid[x - 1][y].firstChild);
            // check if won
        } else if (y > 0 && cellsAsGrid[x][y - 1].firstChild.getAttribute("src") === "") {
            swapImageSource(cell.firstChild, cellsAsGrid[x][y - 1].firstChild);
            // check if won
        }
        else if (x < cellsAsGrid.length - 1 && cellsAsGrid[x + 1][y].firstChild.getAttribute("src") === "") {
            swapImageSource(cell.firstChild, cellsAsGrid[x + 1][y].firstChild);
            // check if won
        }
        else if (y < cellsAsGrid.length - 1 && cellsAsGrid[x][y + 1].firstChild.getAttribute("src") === "") {
            swapImageSource(cell.firstChild, cellsAsGrid[x][y + 1].firstChild);
            // check if won
        }
    });
});