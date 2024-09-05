const fibonacci = function(n) {
    // latest terms takes sum of prev two numbers in seq.
    // return last term in seq
    // array of nums, at start, INIT terms =  [0, 1]
    // if n=1, return terms[1],
    // if n>1, for n-1 times, calc last two terms in terms
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
