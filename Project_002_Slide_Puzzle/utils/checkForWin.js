function checkForWin(originalPositions, currentCells) {
    let allInclude = true;
    currentCells.map((cell, idx) => {
        if (idx !== 0) {
            if (!cell.firstChild.getAttribute("src").includes(originalPositions[idx - 1])) {
                allInclude = false;
                return false;
            }
        }
    });
    if (allInclude) {
        alert("Puzzle solved!");
        location.reload();
    }
}

export default checkForWin;