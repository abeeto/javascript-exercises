const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, value) => total += value, 0);
};

const multiply = function(arr) {
  return arr.reduce((multipliedResult, value) => multipliedResult *= value, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if(a < 2){
    return 1;
  }
  let result = 1;
  for (let i = a; i > 1; i--){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
