// 19: Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
/*--------------------start a work---------------------*/
// Array containing the original guest list
const guestList = ['Kamran Tessori', 'Babar Azam', 'Wajah Ali'];
// Print the number of people being invited to dinner
console.log(`Number of people invited to dinner: ${guestList.length}`);
// Function to print invitation message to each person
function sendInvitation(guest) {
    console.log(`Dear ${guest},\n\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\n\nBest regards,\n[Tasbeen arshad]`);
}
// Print a message indicating the number of people being invited
console.log(`Number of people invited to dinner: ${guestList.length}`);
// Print a set of invitation messages
guestList.forEach(sendInvitation);
export {};
