seconds = 5734;

const timeConvert = (totalSec) => {
  return `${~~(totalSec / 3600)}:${~~((totalSec % 3600) / 60)}:${
    totalSec % 60
  }`;
};

console.log(timeConvert(seconds));
