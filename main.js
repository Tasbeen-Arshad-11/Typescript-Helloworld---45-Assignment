// 11: Names: Store the names of a few of your friends in a array called names.
//  Print each person’s name by accessing each element in the list, one at a time.
/*---------------------------------start working--------------*/
/*-----------------------1st step---------------*/
// declare a friends name 
// let Names : string[] = ['Amna','Sara','Zehra','Minsa','Hira'];
// for(let i=0; i<Names.length; i++){
//     console.log(Names[i]);
// }
/*-----------------------2nd step---------------*/
// Array containing the names of friends
const Names = ['Amna', 'Sara', 'Zehra', 'Minsa', 'Hira'];
// Printing each person's name one at a time
Names.forEach(name => console.log(name));
export {};
