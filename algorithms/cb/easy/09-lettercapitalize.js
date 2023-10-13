const letterCapitalize = (string) => {
  let stringArray = [];

  string.split(" ").forEach((element, index) => {
    let elementArray = element.split("");
    elementArray[0] = elementArray[0].toUpperCase();
    stringArray.push(elementArray.join(""));
  });

  return stringArray.join(" ");
};

console.log(letterCapitalize("hello world"));
