const num = 67280421310721;

const checkPrime = (num) => {
  let prime = true;

  if (num <= 1) {
    return false;
  } else if (num == 2) {
    return true;
  } else {
    for (let i = Math.round(Math.sqrt(num)); i > 1; i--) {
      primeChecker: if (num % i == 0) {
        prime = false;
        break primeChecker;
      }
    }
  }

  return prime;
};

console.log(checkPrime(num));
