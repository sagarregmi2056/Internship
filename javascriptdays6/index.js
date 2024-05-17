// const hour = 10;

// if (hour < 12) {
//   console.log("Good Morning");
// } else if (hour < 1) {
//   console.log("Good Afternoon");
// } else {
//   console.log("good night");
// }
// find the grade or percentage of the student
// Write a program that checks if a number is even or odd
// swap a two number

// a = 10;
// b = 23;

// var a = 10;
// var b = 23;
// temp ma 10 aayo

// var temp = a;
// a ma 23 aayo
// a = b;

// b = temp;
// console.log(a, b);

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("Who are you?", (name) => {
//   console.log(`Hey there ${name}!`);
//   readline.close();
// });

// var number = 10;

// if (number % 2 == 0) {
//   console.log("even");
// }

// var text = "";
// for (let i = 0; i < 5; i = i + 2) {
//   text = "The number is " + i + "\n";
//   console.log(text);
// }

// var text1 = "";

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     if (i == 0) {
//     }
//   }
// }

// normal function
// const myfunction = () => {
//   console.log("hello my name is sagar");
// };

// myfunction();

// arrow function
// myfunctionq = () => {
//   console.log("hello");
// };

// function call
// myfunctionq();

// function use garera sum
// odd even
// grade find out
// percentage

// find the odd and even number

// var number = 11;

// if (number % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// var a = 10;
// var b = 20;

// var nayaplate = a;
// a = b;
// b = nayaplate;
// console.log(a, b);

// var text = "";

// for (let i = 1; i <= 100; i = i + 1) {
//   text = i;

//   console.log(text);
// }

// 100 print the number from 1 to 100

// const merofunction = function () {
//   console.log("hello my name is sagar");
// };

// calling function
// merofunction();
// const hamrofunction = (a, b) => {
//   let sum = a + b;
//   console.log(sum);
// };
// hamrofunction(4, 2);

const myfunction = (num) => {
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};

myfunction(3);

const findmygrade = (percentage) => {
  if (percentage >= 90) {
    console.log("A");
  } else if (percentage >= 80) {
    console.log("B");
  } else if (percentage >= 70) {
    console.log("C");
  } else if (percentage >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
};

findmygrade(90);

// nepal driving lisence ko lagi age 18 vanda over you are eligible for driving licence natra age restriction

const erroehandler = () => {
  try {
    dadalert("Welcome Fellow Geek!");
  } catch (err) {
    console.log(`the error is ${err}`);
  }
};

erroehandler();
