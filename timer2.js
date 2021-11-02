var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input timer from 1 to 9 ->", answer => {
  if (answer === "b") {
    console.log("BEEP");
  }

  console.log("Setting timer for x seconds...");

  setTimeout(() => {
    console.log("BEEP");
  }, answer * 1000);
});
