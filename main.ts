// 3: Name Cases: Store a person’s name in a variable, and then print that person’s
//  name in lowercase, uppercase, and titlecase.

/*------------------------start working-------------*/
/*--------------1st working------------*/

// let PersonName : string = '';

// PersonName = prompt('What Are The Person Name') || '';

// let LowerCase : string = PersonName.toLowerCase();
// let UpperCase : string = PersonName.toUpperCase();
// let TitleCase : string = PersonName.split('').map(word => word.charAt(0).toUpperCase() +
//  word.slice(1).toLowerCase()).join('');


//  if(PersonName !== null && PersonName !== ''){
//     alert(`hello ${PersonName}, write are the name: 
//     LowerCase: ${LowerCase}
//     Uppercase: ${UpperCase}
//     TilteCase: ${TitleCase} `)

//  } else{
//     alert(`Please fill your name!`)
 
//  }


/*--------------2nd working------------*/
// Storing person's name in a variable
const PersonName: string = "John Doe";

// Printing person's name in lowercase
console.log("Lowercase:", PersonName.toLowerCase());

// Printing person's name in uppercase
console.log("Uppercase:", PersonName.toUpperCase());

// Printing person's name in titlecase
console.log("Titlecase:", toTitleCase(PersonName));

// Function to convert string to titlecase
function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}
