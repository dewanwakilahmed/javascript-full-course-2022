// QUICK INTRODUCTION (starts here)
console.log('I like pizza!');
console.log("It's really good!");

// window.alert('I really love pizza!');

// This is a comment

/*
  This
  is
  a
  multiline
  comment
*/
// QUICK INTRODUCTION (ends here)

// VARIABLES (starts here)
// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let firstName = 'Bro'; // string
let age = 21; // number
let student = true; // boolean

console.log('Hello', firstName);
console.log('You are', age, 'years old');
console.log('Enrolled:', student);

document.getElementById('p1').innerHTML = 'Hello ' + firstName;
document.getElementById('p2').innerHTML = 'You are ' + age + ' years old!';
document.getElementById('p3').innerHTML = 'Enrolled: ' + student;
// VARIABLES (ends here)
