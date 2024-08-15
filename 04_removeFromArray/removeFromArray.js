const removeFromArray = function(arr, ...providedVals) {
    const newCopy = [];
    // const args = Array.from(arguments);
    // const providedVals = args.copyWithin(0, 1);

    arr.forEach(element => {
        providedVals.includes(element) === false && newCopy.push(element);
    });
    return newCopy;
};



// Do not edit below this line
module.exports = removeFromArray;
