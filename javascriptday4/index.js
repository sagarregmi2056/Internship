const name = ["amrit", "anurag", "nepal"];

name.forEach((value) => {
  return value + "amrit";
});
console.log(name);

// arrayname.foreach((value) => {
// statement

// })

const student = ["sujata", "amrit", "sagar", "anurag", "umesh", "pragyan"];

const newstudent = student.map((newname) => {
  return newname + "amrit";
});
console.log(newstudent);
