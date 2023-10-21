const nthPrime = (nth, limit) => {
  let checklist = new Array(limit + 1).fill(true);
  checklist[0], (checklist[1] = false);
  let result = [];

  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (checklist[i]) {
      for (let j = i * i; j <= limit; j += i) {
        checklist[j] = false;
      }
    }
  }

  for (let i = 2; i <= limit; i++) {
    if (checklist[i]) {
      result.push(i);
    }
  }

  return result[nth - 1];
};

console.log(nthPrime(12, 1000000));
