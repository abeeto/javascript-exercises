const palindromes = function (str) {
    let [leftSubStr, rightSubStr] = getSubStrs(str, getCharLimit(str))
    return leftSubStr === rightSubStr;
};

function getCharLimit(str){
    let charLimit = (str.length)/2;
    
    if(str.length % 2 === 1){
        charLimit = (str.length -1)/2;
    }
    return charLimit;
}

function getSubStrs(str, charLimit){
    let leftSubStr= str.slice(0, charLimit);
    let rightSubStr = str
    .slice(-charLimit)
    .split("")
    .reverse()
    .join("");

    return [leftSubStr, rightSubStr];
}

console.log(palindromes('racecar'));
// Do not edit below this line
module.exports = palindromes;
