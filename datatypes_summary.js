// JavaScript is a dynamically typed language, 
// meaning that variable types are determined and checked at runtime, 
// not compile time.

// Primitive

// 7 types:

// String, 
// Number, 
// Boolean, 
// null, 
// undefine,
// Symbol
// BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123');

console.log(id === anotherId);

// const bigNumber =  23123123214232345;
// console.log(typeof bigNumber);


// Reference (Non Primitive)
// Array, Objects, Functions

// All the non Primitive data type is type is object.

const heros = ["spiderman","superman","batman"];

let myObj = {
    name: "hitesh",
    age: 22,
}

// console.log(myObj);

const myFunction = function(){
    console.log("Hello world!");
}

console.log(typeof heros);
