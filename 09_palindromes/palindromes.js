const palindromes = function (str) {
    let cleanStr = cleanupStr(str);
    let [leftSubStr, rightSubStr] = getSubStrs(cleanStr, getCharLimit(cleanStr))
    return leftSubStr === rightSubStr;
};

function cleanupStr(str){
    let words = str.split(', ');
    const removeIfPunctuation = (val) => !([";", ",", ".", "!", "(", ")", "[", "]", " "].includes(val))
    let noPuncWords = words.map(
        (word) => word
        .toLowerCase()
        .split("")
        .filter(removeIfPunctuation)
        .join('')    
    )
    return noPuncWords.join('');
}

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

console.log(palindromes('A car, a man, a maraca.'));
// Do not edit below this line
module.exports = palindromes;
