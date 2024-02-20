// 12: Greetings: Start with the array you used in Exercise 11, but instead of 
// just printing each person’s name, print a message to them. The text of each message 
// should be the same, but each message should be personalized with the person’s name.
/*-------------------strat working-----------------*/
/*---------------------1st step----------------*/
// let Name : string[] = ['Amna','Sara','Zehra','Minsa','Hira'];
// const message : string = 'She is a Genius Student:'
// for(let i=0; i<Name.length; i++){
//     console.log(message + Name[i]);
// }
/*---------------------2nd step----------------*/
// Array containing the names of friends
const Name = ['Amna', 'Sara', 'Zehra', 'Minsa', 'Hira'];
// Printing a personalized message to each person
Name.forEach(name => console.log(`Hello, ${name}! I hope you're having a great day.`));
export {};
