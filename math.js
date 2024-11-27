function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sqrt(value) {
  if (value < 0) {
    return "Невозможно вывесть корень";
  } else {
    return Math.sqrt(value);
  }
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

module.exports = {
  sum,
  subtract,
  sqrt,
  isPrime,
};
