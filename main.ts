// 29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
// independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in
//  your array. If the fruit is in your array, the if block should print a statement, such
//   as You really like bananas!
/*-----------------start work-------------*/
/*----------1st step----------------*/

// const Favorite_Fruits: string[]=["Pomegranate","Strawberry","Cherry"];

// if(Favorite_Fruits.includes("pomegrante")){
//     console.log("you really like a pomegranate")
// }
// if(Favorite_Fruits.includes("Strawberry")){
//     console.log("you really like a Strawberry")
// }
// if(Favorite_Fruits.includes("Cherry")){
//     console.log("you really like a Cherry")
// }
// else{
//     console.log("Cherry are not in your Favorite Fruits lists.")
// }
// if(Favorite_Fruits.includes("Strawberry")){
//     console.log("you really like a Strawberry")
// }
// if(Favorite_Fruits.includes("Banana")){
//     console.log("you really like a Banana")
// }else{
//     console.log("Banana are not in your Favorite Fruits lists.")
// }


/*--------2nd step-------------------*/
let age: number = 25;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}





