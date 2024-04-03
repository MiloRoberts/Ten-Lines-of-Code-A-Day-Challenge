const randomizeArray = function (array) {
    for (let i =array.lenght -1; i > 0; i--) {
        const x =Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[x];
        array[x] = temp;
    }

    // TO DO: randomize the array and assign to newArray
    return newArray;
};

export default randomizeArray;