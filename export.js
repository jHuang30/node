const add = (num1, num2) => {
  console.log(num1 + num2);
};

const PI = 3.14;

class ThisClass {
  constructor() {
    console.log("new instance created");
  }
}

module.exports = { add: add, PI: PI, ThisClass: ThisClass };  //as object