
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // true;
// console.log("02" > 1); // true;

// console.log(null > 0); // false;
// console.log(null == 0); // false;

/**
 * The reason is that an equality check (==) and comparison >, <, >=, <=
 * work differently.
 * Comparisons convert null to a number, treating it as 0.
 * That's why nulll >= 0 is true, and null > 0 is false.
 * But for equality check null == 0, null is not converted to a number, and it only equals null or undefined.
 * So null == 0 is false.
 */

// console.log(null >= 0); // true;

// console.log(undefined == 0); // false;
// console.log(undefined > 0); // false;
// console.log(undefined < 0); // false;

// ===

console.log("2" === 2); // false