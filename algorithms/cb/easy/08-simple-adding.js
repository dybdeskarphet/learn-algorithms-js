const simpleAdding = (value) => {
  let sum = 0;

  for (let i = value; i > 0; i--) {
    sum += i;
  }

  return sum;
};

console.log(simpleAdding(36));
