
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

function getAgeInfo(age){
    return `This person is ${age} years old`;
}

function getCity(){
    return 'This person is from USA';
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
    rating
} 

// console.log(product);


// Object And Array Destructuring

const productOne = {
    productName: 'Product One',
    productDescription: "Product Description"
}

// let productName = productOne.productName;
// let productDescription = productOne.productDescription;

const {productName, productDescription} = productOne;

// console.log(productName, productDescription);

// Array 

let arr = ['John', 'doe'];

// let arrFirstElement = arr[0];
// let arrSecondElement = arr[1];

let [arrFirstElement, arrSecondElement, xyz] = arr;

console.log(arrFirstElement, arrSecondElement, xyz);