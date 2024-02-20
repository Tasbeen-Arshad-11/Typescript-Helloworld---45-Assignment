"use strict";
// 26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an 
// if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for
//  shooting the alien.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
/*-----------start------------------*/
/*--------------1st work-------------*/
// let Alien_Colors : string = "purple"
// Alien_Colors = "blue";
// if(Alien_Colors === "red"){
//     console.log("player just earned 15 points")
// } else{
//     console.log("player just earned 15 points")
// }
/*--------------2nd work-------------*/
// Version running the if block:
let alien_color2 = 'green';
if (alien_color2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
}
// Version running the else block:
let alien_color3 = 'red';
if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulations! You just earned 10 points for shooting the non-green alien.");
}
