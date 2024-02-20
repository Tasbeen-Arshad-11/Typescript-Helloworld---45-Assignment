// 44: Sandwiches: Write a function that accepts a array of items a person wants on a 
// sandwich. The function should have one parameter that collects as many items as the 
// function call provides, and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.

/*-------------------strat working-------------*/
function Sandwiches(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => console.log("- " + item));
    console.log("Sandwich ready!\n");
}

// Calling the function with different number of arguments
Sandwiches("Ham", "Cheese", "Lettuce", "Tomato");
Sandwiches("Turkey", "Bacon");
Sandwiches("Peanut Butter", "Jelly");
