// 42: Great Magicians: Start with a copy of your program from Exercise 
// 39. Write a function called make_great() that modifies the array of magicians 
// by adding the phrase the Great to each magician’s name. Call show_magicians() 
// to see that the list has actually been modified.
/*-----------start working----------*/
// function show_magicians(magicians: string[]): void {
//     magicians.forEach(magician => console.log(magician));
// }
// function make_great(magicians: string[]): void {
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = "the Great " + magicians[i];
//      }
// }
// Array of magician's names
// const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Calling make_great() to modify magician names
// make_great(magicianNames);
// Calling show_magicians() to see the modified list
// show_magicians(magicianNames);
/*--------------------------------2nd working strat---------------------*/
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Array of magician's names
const magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Adding "the Great" to each magician's name
make_great(magicianNames);
// Calling the function to show the modified magician's names
show_magicians(magicianNames);
export {};
