const setInitialImages = function (cells, imagePositions) {
    cells.map((cell, idx) => {
        const image = document.createElement('img');
        idx === 0 ?
            image.src = "" :
            image.src = "./images/bird" + imagePositions.shift() + ".jpg";
        cell.appendChild(image);
    });
};

export default setInitialImages;