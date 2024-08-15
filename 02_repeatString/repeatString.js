const repeatString = function(strToRepeat, timesToRepeat) {
    let str = timesToRepeat >= 0 ? "" : "ERROR"

    for (let i = 0; i < timesToRepeat; i++){
        str += strToRepeat;
    }
    return str;

};

// Do not edit below this line
module.exports = repeatString;
