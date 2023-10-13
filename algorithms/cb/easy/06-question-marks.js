const questionMarks = (string) => {
  if (string.length < 5) {
    return false;
  }

  let sums = [];
  let sum = 0;
  let iterator = 0;

  let stringArray = string.replace(/[^0-9?]/g, "");

  stringArray.split("").forEach((item, index) => {
    if (item != "?" && stringArray.substr(index + 1, 3) == "???") {
      sum = parseInt(item) + parseInt(stringArray[index + 4]);
      sums.push(sum);
    }
  });

  console.log(sums);
};

questionMarks("arrb6???4xxbl5???eee5");
