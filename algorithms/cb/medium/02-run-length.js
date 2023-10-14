const string = "aabbbwwjjjkkk";

const runLength = (string) => {
  let count = 1;
  let resultString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      resultString += `${count}${string[i]}`;
      count = 1;
    }
  }

  return resultString;

  /*
  stringArray.forEach((e, i) => {
    let found = false;

    for (let j = 0; j < countArray.length; j++) {
      if (countArray[j].letter === e) {
        countArray[j].count += 1;
        found = true;
        break;
      }
    }

    if (!found) {
      countArray.push({ letter: e, count: 1 });
    }
  });

  countArray.forEach((element) => {
    resultString += `${element.count}${element.letter}`;
  });
  */
};

console.log(runLength(string));
