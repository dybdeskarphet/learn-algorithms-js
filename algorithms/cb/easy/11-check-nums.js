const checkNums = (num1, num2) => {
  if (num2 > num1) {
    return "true";
  } else if (num2 < num1) {
    return "false";
  } else {
    return "-1";
  }
};

console.log(checkNums(2,3));
console.log(checkNums(4,1));
console.log(checkNums(9,9));
