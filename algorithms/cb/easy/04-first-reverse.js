const firstReverse = (string = "!nirig reğed riB") => {
  return string.split("").reverse().join("");
};

console.log(firstReverse());
console.log(firstReverse("Merhaba dünya!"));
