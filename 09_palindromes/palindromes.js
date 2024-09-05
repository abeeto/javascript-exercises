const palindromes = function (str) {
    let charLimit = (str.length)/2;
    if(str.length % 2 === 1){
        charLimit = (str.length -1)/2;
    }
    let leftSubStr= str.slice(0, charLimit);
    let rightSubStr = str
    .slice(-charLimit)
    .split("")
    .reverse()
    .join("");

    console.log(leftSubStr, rightSubStr);
    return leftSubStr === rightSubStr;
};
// Do not edit below this line
module.exports = palindromes;
