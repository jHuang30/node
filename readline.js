const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
let answer = num1 + num2;

rl.question(`What's ${num1} + ${num2} ?\n`, input => {
  if (input == answer) {
    rl.close();
  } else {
    rl.setPrompt("try again\n");
    rl.prompt();
    rl.on("line", input => {
      if (input == answer) {
        rl.close();
      } else {
        rl.setPrompt("try again\n");
        rl.prompt();
      }
    });
  }
});

rl.on("close", () => {
  console.log("correct");
});
