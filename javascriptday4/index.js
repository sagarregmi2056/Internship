// const name = ["amrit", "anurag", "nepal"];

// name.forEach((value) => {
//   console.log(value);
// });

// arrayname.foreach((value) => {
// statement

// })

// const student = ["sujata", "amrsit", "sagar", "anurag", "umesh", "pragyan"];

// const newstudent = student.map((newname) => {
//   return newname + "amrit";
// });
// return new element with array
// console.log(newstudent);

const fruits = [
  "apple",
  "banana",
  "orange",

  "grape",
  "strawberry",
  "blueberry",
  "pineapple",
  "watermelon",
  "kiwi",
  "mango",
  "peach",
  "pear",
  "plum",
  "cherry",
  "apricot",
  "pomegranate",
  "fig",
  "coconut",
  "nectarine",
  "raspberry",
  "blackberry",
  "cantaloupe",
  "honeydew",
  "grapefruit",
  "lemon",
  "lime",
  "tangerine",
  "papaya",
  "passion fruit",
  "dragonfruit",
  "guava",
  "lychee",
  "persimmon",
  "starfruit",
  "aplle",
  "orange",
  "lemon",
  "lime",
  "banana",
  "mango",
  "pineapple",
  "kiwi",
  "grape",
  "strawberry",
  "blueberry",
  "raspberry",
  "blackberry",
  "apricot",
  "peach",
  "nectarine",
  "plum",
  "cherry",
  "watermelon",
  "cantaloupe",
  "honeydew",
  "pomegranate",
  "fig",
  "papaya",
  "passion fruit",
  "dragonfruit",
  "guava",
  "lychee",
  "persimmon",
  "starfruit",
  "coconut",
  "tangerine",
  "grapefruit",
  "apple",
  "orange",
  "banana",
  "grape",
  "strawberry",
  "blueberry",

  //sagar
  "pineapple",
  "watermelon",
  "kiwi",
  "mango",
  "peach",
  "pear",
  "plum",
  "cherry",
  "apricot",
  "pomegranate",
  "fig",
  "coconut",
  "nectarine",
  "raspberry",
  "blackberry",
  "cantaloupe",
  "honey",
];
console.table(fruits);

// map
// foreach
// fruits.forEach(element => {
//     console.log(element)

// });

fruits.forEach((fruit) => {
  console.log(fruit);
});

const newfruits = fruits.map((fruit) => {
  return fruit + "s";
});

console.table(newfruits.sort().reverse().toString().toUpperCase());

console.log(fruits.includes("pineapple"));
console.log(fruits.indexOf("pineapple"));

const newlyarray = fruits.splice(6, 100, "sagar");
console.log(fruits.toString().toUpperCase());

// translate to capital letter for all element in array

// const newfruit = fruits.map((fruit) => {
//   return fruit.toUpperCase();
// });
// console.log(newfruit.sort().toString());

// fruits.forEach((element) => {
//   console.log(element);
// });
// ascending order for all element in array
// check if it include cherry
// console.log(fruits.includes("cherry"));
// check the index of cherry

// console.log(fruits.indexOf("cherry"));
// splice

// const addsagar = fruits.splice(13, 100, "sagar", "saugat");
// //
// console.table(fruits);

// Original object
// const originalObject = {
//   name: "John",
//   age: 30,
// };

// Updated object
// const updatedObject = { ...originalObject, age: 31 };

// Log old and new values
// console.log("Old:", originalObject);
// console.log("New:", updatedObject);

// const lastname = {
//   name: "",
//   lastname: "",
//   age: 0,
// };

// const newlastname = { ...lastname, name: "anurag", lastname: "regmi", age: 24 };
// console.log(newlastname);

// console.log(lastname);
