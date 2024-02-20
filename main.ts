// 23: Conditional Tests: Write a series of conditional tests. Print a statement describing 
// each test and your prediction for the results of each test. Your code should look something 
// like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates
//  to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests 
// evaluate to False.
/*-----------start work-------*/
/*-----------1st step--------*/

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')

// console.log("is car != 'BMW Car'? is predict True.")
// console.log(car != 'BMW Car' )

// console.log("Is car == 'Subaru'? I predict Fasle.")
// console.log(car == 'Subaru')

// console.log("is car == 'BMW CAR'? is predict Fasle.")
// console.log(car == 'BMW CAR' )

// console.log("is car.length ==6? predict True.")
// console.log(car.length == 6)

// console.log("is car.length !=6? predict True.")
// console.log(car.length != 20)

// console.log("is 40 > 150 ? predict Fasle")
// console.log(40 > 150)

// console.log("is 5 <= 3 ? predict Fasle")
// console.log(5 <= 3)

// console.log("is 79 >= 100? predict Fasle")
// console.log(79 >= 100)


// console.log("is car == 'subaru' && car.length == 8? predict Fasle")
// console.log(car == 'subaru' && car.length == 8)



/*--------------2nd step----------------*/

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False

console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford'); // True

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // True

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // False

console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda'); // True

console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5); // False

console.log("Is car.length >= 6? I predict True.");
console.log(car.length >= 6); // True

console.log("Is car.startsWith('su')? I predict True.");
console.log(car.startsWith('su')); // True

console.log("Is car.includes('aru')? I predict True.");
console.log(car.includes('aru')); // True
