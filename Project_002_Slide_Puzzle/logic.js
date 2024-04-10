import randomizeArray from "./utils/randomizeArray.js";
import setInitialImages from "./utils/setInitialImages.js";

let imagePositions = ["1b", "1c", "2a", "2b", "2c", "3a", "3b", "3c"];
const cells = [...document.querySelectorAll('.cell')];

imagePositions = randomizeArray(imagePositions);

setInitialImages(cells, imagePositions);

// add event listeners to each cell
cells.map((cell) => {
    cell.addEventListener('click', () => {
        // TO DO: Check that a neighboring cell is empty and, if it is, swap both src values
        // NOTE: This might be easier with things set up as a multidimensional array, but we'd have to go back and redo some things
        console.log(cell.firstChild);
    });
});