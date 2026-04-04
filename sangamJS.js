// Logical AND (&&) Operator and Logical OR (||) Operator

// let a = true;
// let b = true;

// let a = true;
// let b = false;

// let a = true;
// let b = true;

// function getName(){
//     return 'Sangam Mukherjee';
// }

// console.log(a && getName());

// Logical OR

// let a = false;
// let b = true;

// function getName(){
//     return 'Sangam Mukherjee';
// }

// console.log(a || getName());

// Template Literals

// let firstName = "Sangam";
// let surName = "Mukherjee";

// let prefix = "Mr";

// console.log(prefix + " "+ firstName + " "+ surName);

// console.log(`${prefix}   ${firstName} ${surName}`)

// Ternary Operators

let returnAge = true;

function getAgeInfo(age) {
  return `This person is ${age} years old`;
}

function getCity() {
  return "This person is from USA";
}

// if(returnAge){
//     console.log(getAgeInfo(30));
// }else{
//     console.log(getCity());
// }

// condition ? statementForTrue : statementForFalse

// returnAge ? console.log(getAgeInfo(30)) : console.log(getCity());

// Object And Array Destructuring
// Shorthand Property Names

const id = 1;
const title = "Product 1";
const rating = 5;

// const product = {
//     id: id,
//     title: title,
//     rating: rating
// }

const product = {
  id,
  title,
  rating,
};

// console.log(product);

// Object And Array Destructuring

const productOne = {
  productName: "Product One",
  productDescription: "Product Description",
};

// let productName = productOne.productName;
// let productDescription = productOne.productDescription;

const { productName, productDescription } = productOne;

// console.log(productName, productDescription);

// Array

let arr = ["John", "doe"];

// let arrFirstElement = arr[0];
// let arrSecondElement = arr[1];

let [arrFirstElement, arrSecondElement, xyz] = arr;

console.log(arrFirstElement, arrSecondElement, xyz);

// Default Parameters

function sum(numOne = 1, numTwo = 2) {
  return numOne + numTwo;
}

let result = sum();

console.log(result, "result");

// spread operators

const arrOne = [1, 2, 3];

const arrTwo = [4, 5, 6];

console.log([...arrOne, 100, ...arrTwo]);

//rest operators

function someThing(a, b, c, ...d) {
  console.log(a, b, c, d);
  return "Hello";
}

console.log(someThing(1, 2, 3, 4, 5, 6, 7));

// Arrow functions and ES6 Methods

// function functionName(){
//     //
// }

// const functionName = () => {
//     //
// }

//Map

const personsArray = [
  {
    name: "Person One",
    age: 10,
    city: "Karachi",
  },
  {
    name: "Person Two",
    age: 20,
    city: "New York",
  },
  {
    name: "Person Three",
    age: 35,
    city: "Chicago",
  },
  {
    name: "Person Four",
    age: 65,
    city: "Karachi",
  },
];

let extractPersonNames = personsArray.map((person, index) => {
  console.log(index, "index");
  return `${person.name} - ${person.city}`;
});

console.log(extractPersonNames);

let extractAllPersonsFromKarachi = personsArray.filter(
  (person, index) => person.city === "Karachi",
);

console.log(extractAllPersonsFromKarachi);