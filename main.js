// 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False
//  result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater 
// than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
/*------------------------start work-------------------*/
/*------------------------1st work-------------------*/
// 1• Tests for equality and inequality with strings
// let Equality_String1 : string = "Amna";
// let Equality_String2 : string = "Sufiyan";
// console.log(Equality_String1 === Equality_String2);
// console.log(Equality_String1 !== Equality_String2);
// 2. Tests using the lower case function
// const LowerCase : string = "Tasbeen Programmer..";
// console.log(LowerCase.toLowerCase() === "TasbeenProgrammer")
// 3• Numerical tests involving equality and inequality, greater than and less than, greater 
// than or equal to, and less than or equal to
// const Number1:Number = 20;
// const Number2:Number = 15;
// console.log(Number1 === Number2);
// console.log(Number1 !== Number2);
// console.log(Number1 > Number2);
// console.log(Number1 < Number2);
// console.log(Number1 >= Number2);
// console.log(Number1 <= Number2);
// 4• Tests using "and" and "or" operators
// const Operators1 : boolean = true;
// const Operators2: boolean = false;
// console.log(Operators1 && Operators2);
// console.log(Operators2 || Operators2);
// 5• Test whether an item is in a array
// 6• Test whether an item is not in a array
// const Array : string[] =["Maldives","London","China","Russia","America"]
// console.log(Array.includes("London"))
// console.log(Array.includes("london"))
/*-----------------2nd atep----------------*/
// Tests for equality and inequality with strings
let fruit1 = 'apple';
let fruit2 = 'banana';
console.log("Are the fruits equal? I predict False.");
console.log(fruit1 == fruit2); // False
console.log("Are the fruits not equal? I predict True.");
console.log(fruit1 != fruit2); // True
// Tests using the lower case function
let word = 'HELLO';
console.log("Is the word in lowercase? I predict False.");
console.log(word.toLowerCase() === word); // False
// Numerical tests
let num1 = 5;
let num2 = 10;
console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2); // True
console.log("Is num2 greater than or equal to num1? I predict True.");
console.log(num2 >= num1); // True
// Tests using "and" and "or" operators
let isSunny = true;
let isWarm = true;
console.log("Is it sunny and warm? I predict True.");
console.log(isSunny && isWarm); // True
console.log("Is it sunny or warm? I predict True.");
console.log(isSunny || isWarm); // True
// Test whether an item is in an array
let fruits = ['apple', 'banana', 'orange'];
let fruitToFind = 'apple';
console.log("Is the fruit in the array? I predict True.");
console.log(fruits.includes(fruitToFind)); // True
// Test whether an item is not in an array
let vegetables = ['carrot', 'tomato', 'spinach'];
let vegetableToFind = 'broccoli';
console.log("Is the vegetable not in the array? I predict True.");
console.log(!vegetables.includes(vegetableToFind)); // True
export {};
