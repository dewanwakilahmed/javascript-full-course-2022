/* QUICK INTRODUCTION */
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

/* VARIABLES */
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

/* ARITHMETIC EXPRESSIONS */
/*
  arithmetic expression is a combination of...
  operands (values, variables, etc.) and
  operators (+ - * / %)
  that can be evaluated to a value
  ex. y = x + 5
*/

let students = 20;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;

let extraStudents = students % 3;

// Augmented assignment operators
students += 1;
students -= 1;
students *= 2;
students /= 2;

console.log(students);
console.log(extraStudents);

/*
  operator precedence
  1. parenthesis ()
  2. exponents
  3. multiplication & division
  4. addition & substraction
*/

let result = (1 + 2) * (3 + 4);
console.log(result);
