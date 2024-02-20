// 5: Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name 
// in a variable called famous_person. Then compose your message and store it in a 
// new variable called message.Print your message.

/*---------------------strat working--------*/
/* ------------------1st step--------------*/

// let Famous_person_rep : string = 'Mark Zuckerberg';

// let message : string = '" Co-founder, executive chairman and CEO of Meta Platforms (formerly Facebook, Inc.)"';

// console.log(`${Famous_person_rep} once a said, ${message}`);


/* ------------------2nd step--------------*/

// Store the famous person's name in a variable
const Famous_person_rep: string = "Albert Einstein";

// Define the quote
const quote: string = "A person who never made a mistake never tried anything new.";

// Compose the message
const message: string = `${Famous_person_rep} once said, "${quote}"`;

// Print the message
console.log(message);
