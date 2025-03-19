
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

//OBJECTS IN JAVASCRIPT

const person = {
    firstName: 'John',
    lastName: 'Doe',
    Age: 30,

    hobbies: ['music', 'movies', 'sports'],

    address: {
        street: '50 main st',
        city: 'boston',
        state: 'MA'
    }
}



// DESTRUCTURING, is the pulling of variables or valuies from an object. example

const { firstName, lastName, address: { state, city } } = person;

console.log(lastName);

//How to access or get variables in an object in javascript
console.log(person.firstName, person.lastName);

//how to access or get value of array in an object in javascript
console.log(person.hobbies[1]);

//How to access or get value of objecty in an object in javascript
console.log(person.address.city);

person.email = 'iwuanyanwuaugustine@gmail.com';

console.log(person);

// Arrays of Object
const NavBarList = [
    {
        id: '1',
        name: 'Home'
    },
    {
        id: '2',
        name: 'About Us'
    },
    {
        id: '3',
        name: 'Service'
    },
    {
        id: '4',
        name: 'Contact Us'
    }
]



//LOOPS IN JAVASCRIPT

//FOR LOOP

/*
    Fr Loop, it takes 3 parameters; first is the initializer, second if the
    condition to be met, third is the increment
*/

const basket =['mango', 'apple', 'orange', 'grape'];

for(let eben = 0; eben<basket.length; eben++){
    console.log(basket[eben]);
}
// let eben = 0; eben<basket.length; first initializer
// console.log(basket[eben]); condition to be met
// eben++ increment



//CLASSWORK

// use for loop to output the values of array i.e wildAnimals in your console

let wildAnimals = ['lion', 'tiger', 'python', 'wolve', 'leopard'];


for(let i = 0; i<wildAnimals.length; i++){
    console.log(wildAnimals[i])
}


//while loop(old school)
let i = 0;
while (i < wildAnimals.length) {
    console.log(wildAnimals[i]);
    i++;
}


const todoss = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    }
];


// For of loop JAVASCRIPT

for(let todo of todoss) {
    console.log(todo.text);
}

// ForEach, Map, filter in JAVASCRIPT

todoss.forEach(function(todo){
    console.log(todo.id);
});



//Map

todoss.map(function(todo){
    console.log(todo.text);
})



//Filter
const todoCompleted = todoss.filter(function(todo){
    return todo.isCompleted === true;

}).map(function(todo){

    return todo.text

});

console.log(todoCompleted)


//If Statement in JAVASCRIPT
// 1 == 1;
// 1 === '1';
// 1 == '1'

const ipAddress_Nigeria = 112324;
const ipAddress_USA = 223445;

if (ipAddress_USA === ipAddress_Nigeria){
    console.log('welcome to our website');
}else{
    console.log('does not support your country');
}

let x = 20;

if(x === 10){
    console.log('x is 10');

}else if(x > 10){
    console.log('x is greater than 10');
}else{
    console.log('x is less than 10');
}

const y = 4;
const z = 10;

if (y > 5 || z > 9){
    console.log('y is more than 5 or z is more than 10');
}

if (y > 5 && z > 9){
    console.log('y is more than 5 or z is more than 10');
}

//tenary operators, is like a shorthand IF statement,
//it is used alot to assign variable based on condition

let agesGrade = 17;

let output = agesGrade >= 18 ? 'red' : 'blue';
console.log(output);

//SWITCH STATEMENT
let CarColor = 'red';

switch(CarColor){
    case 'red' :
        console.log('color is red');
        break;

    case 'blue':
        console.log('color is blue');
        break;
    
    default:
        console.log('color is NOT red or blue');  
}
//FUNCTIONS

//Nornal Function
function peace(){
    console.log('peace is learning how to use function in javascript')
}
peace();

let word = 'racheal is learning how to use function in javascript';

function Racheal(){
    console.log(word)
}
Racheal()

// setInterval(() => {
//  peace();
// }, 1000);

function noble(){
    console.log('noble is learning javascript')
}
noble()

function OutPutHello(){
    console.log('Hello');
}
OutPutHello();

// How to write Arrow function

let gabriel = () => {

}
gabriel();

const precious = () =>{
    console.log('precious is learning how to use function in javascript')
}
precious();

const OutPutName = () => {
    console.log('Olamide');
}
OutPutName();

const chinonso = () => {
    console.log('chinonso is learning javascript')
}
chinonso()

function shalom(a = 6, b = 3, c = 4){
    let sumTotal = a = b = c;
    // console.log(sumTotal);
}
console.log(shalom())
// shalom();


// A function that adds two numbers

function addNums(num1, num2, hello) {
    console.log(num1, num2, hello);
}

addNums(5,6,9);
