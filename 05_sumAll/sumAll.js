const sumAll = function(x, y) {
    // between x and y, sum each one and return
    // use for loop to be initialized at x keep going till y
    if (!(Number.isInteger(x) && Number.isInteger(y)) || x < 0 || y < 0 ){
        return "ERROR";
    }
    let sum = 0;
    if (x > y) [x, y] = [y, x];

    for (let i = x; i <= y;i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
