const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    let terms = [0, 1];
    if (typeof n === "string") n = +n;
    if (n > 1) {
        for(let i = 1; i < n; i++){
            const [a, b] = terms.slice(-2)
            terms.push(a + b)
        }
    }
    return terms[n]
};
fibonacci(3);
// Do not edit below this line
module.exports = fibonacci;
