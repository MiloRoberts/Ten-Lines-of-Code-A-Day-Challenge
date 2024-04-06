import randomizeArray from "./utils/randomizeArray.js";
import setInitialImages from "./utils/setInitialImages.js";

let imagePositions = ["1b", "1c", "2a", "2b", "2c", "3a", "3b", "3c"];
const cells = [...document.querySelectorAll('.cell')];

// TO DO: randomize the imagePositions array

imagePositions = randomizeArray(imagePositions);

setInitialImages(cells, imagePositions);