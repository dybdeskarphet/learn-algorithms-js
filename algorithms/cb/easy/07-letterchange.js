const string = "I love pasta";

const letterChange = (string) => {
  let uppercaseIndex = [];
  let manipulatedStringArray = [];

  string.split("").forEach((value, index) => {
    if (value.match(/[a-z]/i) && value == value.toUpperCase()) {
      uppercaseIndex.push(index);
    }
  });

  string
    .toLowerCase()
    .split("")
    .forEach((value, i) => {
      if (value.match(/[a-z]/i)) {
        manipulatedStringArray.push(
          String.fromCharCode(value.charCodeAt() + 1)
        );
      } else {
        manipulatedStringArray.push(value);
      }
    });

  for (i in uppercaseIndex) {
    manipulatedStringArray[i] = manipulatedStringArray[i].toUpperCase();
  }

  return manipulatedStringArray.join("");
};

console.log(letterChange(string));
