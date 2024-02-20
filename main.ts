// 6: Stripping Names: Store a person’s name, and include some whitespace characters 
// at the beginning and end of the name. Make sure you use each character combination, 
// "\t" and "\n", at least once. Print the name once, so the whitespace around the name
//  is displayed. Then print the name after striping the white spaces.

/*----------------start working-------------*/
/*-------1st step-----------------*/
// person name with whitespace declare
// const PersonName : string = '    \n\tTasbeen Arshad Programmer\t\n    ';
// console.log(PersonName);



// person name without whitespace declare 
// const PersonName_Without_whitespace : string = PersonName.trim();
// console.log(PersonName_Without_whitespace);


/*----------2nd step------------*/
// Store the person's name with whitespace characters
const personNameWithWhitespace: string = "\t\n   Tasbeen Arshad Programmer   \t\n";

// Print the name with whitespace
console.log("Name with whitespace:", personNameWithWhitespace);

// Strip the whitespace and print the name
const strippedName: string = personNameWithWhitespace.trim();
console.log("Stripped name:", strippedName);

