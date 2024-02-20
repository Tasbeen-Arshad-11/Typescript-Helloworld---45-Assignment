// 35: Animals: Think of at least three different animals that have a common characteristic.

//  Store the names of these animals in a list, and then use a for loop to print out the name
//   of each animal. • Modify your program to print a statement about each animal, such as 
//   A dog would make a great pet. • Add a line at the end of your program stating what these 
//   animals have in common. You could print a sentence such as Any of these animals would make
//    a great pet!

/*-----------------------start working----------------------------*/
// List containing different animals with a common characteristic
const Animals: string[] = ["Dog", "Cat", "Rabbit"];

// Printing each animal name
console.log("Printing animal names:");
for (let Animal of Animals) {
    console.log(Animal);
}

// Printing a statement about each animal
console.log("\nPrinting statements about each animal:");
for (let Animal of Animals) {
    console.log(`A ${Animal.toLowerCase()} would make a great pet.`);
}

// Printing a statement about the common characteristic
console.log("\nAny of these animals would make a great pet!");





