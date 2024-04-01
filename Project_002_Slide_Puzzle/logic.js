import randomizeArray from "./utils/randomizeArray.js";

let positions = ["1a", "1b", "1c", "2a", "2b", "2c", "3a", "3b", "3c"];

// TO DO: randomize the values 

// convert nodelist of cells to array
const cells = [...document.querySelectorAll('.cell')];

// do the following anonymous function on each cell
cells.map((cell) => {
    console.log(cell);
    // TO DO: create img elements and place them in puzzle cells
});
