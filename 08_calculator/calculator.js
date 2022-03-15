const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((total, num) => (total + num), 0);
};


const multiply = function(array) {
  return array.reduce((total, num) => (total * num), 1); //gir 1 hvis tomt array
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(num) {
  let sum = 1;
	for(let i = num; i > 0; i--) {
    sum *= i;
  }
  return sum;
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
