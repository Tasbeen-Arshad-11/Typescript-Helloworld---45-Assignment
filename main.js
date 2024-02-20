// 27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the
//  appropriate color alien.
/*----------------start work---------------*/
/*------------1st work--------------*/
// let Alien_Colors : string = "yellow"
// if(Alien_Colors === "yellow"){
//     console.log("player just earned 5 points")
// }
// else if(Alien_Colors === "green"){
//     console.log("Player just earned 10 points")
// }
// else if(Alien_Colors === "red"){
//    console.log("player just earned 5 points")
// } 
/*-----------------2ns word_----------*/
// let Alien_Colors : string = "red"
// if(Alien_Colors === "yellow"){
//     console.log("player just earned 5 points")
// }
// else if(Alien_Colors === "green"){
//     console.log("Player just earned 10 points")
// }
// else if(Alien_Colors === "red"){
//    console.log("player just earned 5 points")
// } 
/*------------3rd work-----*/
// Green alien
let alien_color1 = 'green';
if (alien_color1 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color1 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color1 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
// Yellow alien
let alien_color2 = 'yellow';
if (alien_color2 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color2 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color2 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
// Red alien
let alien_color3 = 'red';
if (alien_color3 === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color3 === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color3 === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
export {};
