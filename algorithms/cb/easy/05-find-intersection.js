const nums = ["1, 2, 3, 4, 5, 6", "1, 3, 6, 7, 9, 10"];

const findIntersection = (arr) => {
  let ints = [];
  let arr1 = arr[0].split(", ");
  let arr2 = arr[1].split(", ");

  arr1.forEach((item) => {
    if (arr2.includes(item)) {
      ints.push(item);
    }
  });

  return ints;
};

console.log(findIntersection(nums));
