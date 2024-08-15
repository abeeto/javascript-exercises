const reverseString = function(strToRev) {
    let revString = "";
    for (let i = strToRev.length -1; i >= 0; i--){
        revString += strToRev.charAt(i);
    }
    return revString;
};
// Do not edit below this line
module.exports = reverseString;
