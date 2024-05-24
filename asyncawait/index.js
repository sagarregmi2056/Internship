// const asynfunction = async () => {
//   await console.log("one");
//   console.log("two");
// };
// console.log("three");

// asynfunction();
// console.log("four");

// const asynfunction = async () => {
//   console.log("one");
//   console.log("two");
//   await console.log("three");
//   console.log("four");
// };
// asynfunction();
// console.log("five");
// console.log("six");

const myasyncfunction = async () => {
  console.log("one");
  console.log("two");
  await console.log("three");
};
console.log("four");
myasyncfunction();
console.log("five");
console.log("six");
console.log("seven");
console.log("eight");

// four one two three five

function myDisplayer(some) {
  console.log("i need to print before hi");
  console.log(some);
}

function myFirst() {
  console.log("welcome");
  myDisplayer("Hello");
  console.log("hi");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();

const radio = () => {
  console.log("speaker");
  console.log("antena");
  console.log("battery");
  console.log("tape reels");
};

const tv = async () => {
  await radio();
  console.log("display");
  console.log("screen");
  console.log("network");
};

const laptop = () => {
  tv();
  console.log("keyboard");
  console.log("mouse");
  console.log("monitor");
  console.log("power button");
};

laptop();
