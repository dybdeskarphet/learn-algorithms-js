const prompt = require("prompt-sync")();

const inputUsername = () => {
  const username = prompt("Your username: ");

  if (
    username.length > 4 &&
    username.length < 25 &&
    /[a-zA-Z]/.test(username.charAt(0)) &&
    !username.endsWith("_") &&
    /^\w+$/.test(username)
  ) {
    console.log(`It is valid: ${username}`);
  } else {
    console.log("Your username is invalid, try again!\n");
    inputUsername();
  }
};

inputUsername();
