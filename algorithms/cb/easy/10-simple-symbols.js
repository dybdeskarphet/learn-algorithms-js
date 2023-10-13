const string = "++d+==+c+=+c++==+a+";

const simpleSymbols = (string) => {
  let stringArray = string.split("");
  let control = true;

  stringArray.forEach((element, index) => {
    if (element.match(/[a-zA-Z]/i)) {
      if (stringArray[index + 1] != "+" || stringArray[index - 1] != "+") {
        control = false;
      }
    }
  });

  return control == true ? true : false;
};

console.log(simpleSymbols(string));
