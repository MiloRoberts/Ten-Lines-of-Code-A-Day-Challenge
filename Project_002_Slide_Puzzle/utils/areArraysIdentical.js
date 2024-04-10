// This function takes two arrays as arguments. It checks whether the two arrays have the same values in the same order. If so, it returns true; otherwise, it returns false.

function areArraysIdentical(array, newArray) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == newArray[i]) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

export default areArraysIdentical;
