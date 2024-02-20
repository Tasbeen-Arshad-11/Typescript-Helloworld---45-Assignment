// 22- Intentional Error: If you haven’t received an array index error in one of your programs 
// yet, try to make one happen. Change an index in one of your programs to produce an index error.
//  Make sure you correct the error before closing the program.

/*---------------start work-------------*/
/*---------1st work-----------*/

// create a error in array 
// const Months : string[] =["January","February","March","April","May","June","July",
// "August","September","October","November","December"]

// console.log(Months{12})
// console.log(Months[11])


/*---------------2ns step------------*/
// Define an array of fruits
const Months: string[] = ["Apple", "Banana", "Orange"];

// Try to access an index that doesn't exist (index 3)
console.log(Months[3]); // This will produce an index error because the array only has elements at indices 0, 1, and 2

