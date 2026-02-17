// let score = "33abc";
// let score = null;
// let score = undefined;
// let score = true;
let score = "khan";

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0



//Boolean Convertion

// let isLoggedIn = 1;
// let isLoggedIn = "";
let isLoggedIn = "khan";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "khan" => true


// String Convertion

let someNumber = 33;

let stringNumber = String(someNumber);

// console.log(typeof stringNumber);
// console.log(stringNumber);

// ********************** Operation **************************

let value = 3;
let negValue = -value

console.log(negValue);


// console.log(2 + 2);
// console.log(2 * 2);
// console.log(2 - 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "Hello";
let str2 = " khan";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(((3 + 4) * 5) % 3);

// console.log(true + true); // 2
// console.log(true + false); // 1
// console.log(false + false); // 0

// console.log(+true); // 1
// console.log(+false); // 0
// console.log(true+); // error
// console.log(+""); // 0

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;

// console.log(num1);
// console.log(num2);
// console.log(num3);

let gameCounter = 100;
//gameCounter++; // gameCounter = gameCounter + 1 and gameCounter += 1;
++gameCounter;
console.log(gameCounter);
