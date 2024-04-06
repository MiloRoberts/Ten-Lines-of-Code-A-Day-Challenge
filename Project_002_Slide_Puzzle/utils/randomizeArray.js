import areArraysIdentical from "./areArraysIdentical.js";

const randomizeArray = function (array) {
    let newArray = [...array];  // copies values in array to newArray (This way newArray is NOT a reference to array!)

    // There's a possibility that the array values will be returned in the original order, so the for loop should repeat until such is not the case.

    // while(areArraysIdentical(array, newArray)) {
    for (let i = 0; i < newArray.length; i++) {
        let temp = newArray[i];
        let randomIndex = Math.floor(Math.random() * newArray.length);
        newArray[i] = newArray[randomIndex];
        newArray[randomIndex] = temp;
        console.log(newArray);
    }
    return newArray;
    // }
};

export default randomizeArray;