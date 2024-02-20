// 13: Your Own Array: Think of your favorite mode of transportation, such as a
//  motorcycle or a car, and make a list that stores several examples. Use your 
//  list to print a series of statements about these items, such as “I would like to 
//  own a Honda motorcycle.”


/*-------------------------------start working---------------*/
/*---------------------1st step-----------------*/
// let Transportation :string[] = ["Tesla Model S", "Yamaha MT-09", "Boeing 737", "Honda motorcycle"];

// for(let i=0; i<Transportation.length; i++){

//     console.log('I would like to own a ' + Transportation[i])

// }

/*---------------------2nd step-----------------*/
// Array containing examples of favorite mode of transportation
const Transportation: string[] = ["Tesla Model S", "Yamaha MT-09", "Boeing 737", "Honda motorcycle"];

// Printing statements about each item in the array
Transportation.forEach(item => console.log(`I would like to own a ${item}.`));
