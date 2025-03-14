
// this is used to alert message to user when my website loads
// window.alert("I really love PIZZA")

// COMMENT IN JAVASCRIPT

// this is a single line comment


/*This
is
a
multiline
comment
*/

// VARIABLES IN JAVASCRIPT

/*
    A variable is a container used for storing single data.

    Two steps in naming a variable in javascript:

    1. Declaration (var, let, const);
    2. Assignment (= assignment operator)

    Strings, Numbers, Boolean, Null, Undefined

 */

let myname = 'miracle';
const firstname = "chidozie"; //strings Datatype
var age = 21; // integer datatype
var count = 22.1; // float datatype
let ages = "21"; // string datatype '21' + 1 =211
let student = false; // boolean datatype
let k = null; // Null datatype
let country; //undefined datatype

// firstname = 'Angel';

console.log(myname);
console.log(firstname);
console.log(age);

age = age + 1;
ages = ages +1;

console.log(age);
console.log(ages);



// ARITHEMATICS IN JAVASCRIPT

/*
It is combination of.....
operands (values, variables, etc)
operators(+ - * / %)
that can be evaluated to a value 
ex. y = x + 5;

*/

let students = 30;

let math1 = students + 1;
let math2 = students - 1;
let math3 = students * 2;
let math4 = students / 3;
let extrastudents = students % 4;

console.log(math1);
console.log(math2);
console.log(math3);
console.log(math4);
console.log(extrastudents)

students += 1;  //means "students = students + 1"
students -= 1;  //means "students = students - 1"
students *= 2;  //means "students = students * 2"
students /= 2;  //means "students = students / 2"

// CONCATENATION IN JAVASCRIPT

/*
    Concatenation is a way or method of adding or joining two or more variables
    together in javascript.
*/

const firstnamez = 'chidozie';
const agez = 40;
const paragraph = 'My name is' + firstnamez + 'and i am ' + agez + 'years old';
console.log(paragraph)

//Template String
console.log(`My name ${firstnamez} and i am ${agez} years old`);

const hello = `My name ${firstnamez} and i am ${agez} years old`;

console.log(hello);

/*----------- STRING FUNCTION IN JAVASCRIPT ------------*/

let stringLetter = 'Hello world'

console.log(stringLetter);

console.log(stringLetter.length);

console.log(stringLetter.toUpperCase());

console.log(stringLetter.toLowerCase());

console.log(stringLetter.substring(0,7).toUpperCase());



/*------------------ARRAYS -------------------*/

/*
Arrays are variables that holds multiple values

*/
new Array();
[]

const numbers = new Array(1,2,3,4,5,6);

const multipleDatatype = ['hello','banana', 2, false]

console.log(numbers)

const fruits = ['apple', 'orange', 'grape', 'banana'];

fruits[4] = 'pear'; // const fruits = ['apple', 'orange', 'grape', 'banana', 'pear'];

// HOW TO ADD IEMS INSIDE YOUR ARRAY
// push() add items at the end or your array while unshift() adds at the
// beginning of  your array

fruits.push('mangos'); // const fruits = ['apple', 'orange', 'grape', 'banana', 'pear', 'mangos'];

fruits.unshift('strawberry'); // const fruits = ['strawberry','apple', 'orange', 'grape','banana', 'pear', 'mangos'];

//HOW TO REMOVE ITEMS INSIDE YOUR ARRAY
// pop() removes item at the end in your array while shift() removes
// the first item in your array

fruits.pop() // const fruits = ['strawberry','apple', 'orange', 'grape','banana', 'pear'];

fruits.shift() // const fruits = ['apple', 'orange', 'grape','banana', 'pear'];

console.log(fruits);

// Arrays are zero based
console.log(fruits[1]);
console.log(fruits[0]);
console.log(fruits[3]);

//CLASSWORK

const animals = ['kangaroo', 'antelop', 'mongoose', 'ostritch', 'gorilla'];
/*

    Questions

    1. output the second index of the array on your console.
    2. Add 'lion' to the beginning of the array.
    3. add 'zebra' to the end of the array.
    4. Output the values of animals array on your console.

*/

console.log(animals[2])

animals.unshift('Lion')

animals.push('Zebra')

console.log(animals)