const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  const sumOfAll = arr.reduce((a, b) => {
    return a + b;
  }, 0);
  return sumOfAll;
};

const multiply = function (arr) {
  const multiplyOfAll = arr.reduce((a, b) => {
    return a * b;
  });
  return multiplyOfAll;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  let result = n;
  if (n === 0 || n === 1)
    return 1;
  while (n > 1) {
    n--;
    result *= n;
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
