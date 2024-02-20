// 34: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza 
// names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of
//  printing just the name of the pizza. For each pizza you should have one line of output 
//  containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you 
// like pizza. The output should consist of three or more lines about the kinds of pizza you 
// like and then an additional sentence, such as I really love pizza!

/*-------------------start working------------------*/

// Array containing favorite pizza names
const pizzas: string[] = ["California Pizza", "Mexico Pizza", "Detroit-style Pizza."];

// Printing each pizza name
console.log("Printing pizza names:");
for (let pizza of pizzas) {
    console.log(pizza);
}

// Printing a sentence for each pizza
console.log("\nPrinting sentences about each pizza:");
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Printing additional statement about how much I like pizza
console.log("\nI really love pizza!");






