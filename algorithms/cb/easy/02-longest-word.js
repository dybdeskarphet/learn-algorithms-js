console.log("Warning: This script only accepts English sentences!");

const longestWord = (string) => {
  const arrayOfWords = string.replace(/[^a-zA-Z\s]/g, "").split(" ");

  arrayOfWords.sort((a, b) => {
    return b.length - a.length;
  });

  return arrayOfWords[0];
};

console.log(longestWord("Hello, my name is Ahmet Arda Kavakci!"));
