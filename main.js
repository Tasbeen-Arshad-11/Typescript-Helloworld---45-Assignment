"use strict";
// 16: More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 15. Add a print statement to the end of your 
// program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the 
// end of your list. • Print a new set of invitation messages, one for each person in your list.
/*------------------start working---------------*/
/*------------------1st work---------------*/
// let Guest_List :string[] = ['Kamran Tessori','Sir Zia','Daniyal Nagoori'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nWe are inviting them to dinner.\n\nThank You for coming to our part....\n\n')
// }
// let Absent_Guest : string = 'Sir Zia';
// let Changing_Guest_List : string = 'Mustafa kamal..';
// Guest_List[0] = Changing_Guest_List;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nWe are inviting them to dinner.\n\nThank You for coming to our part....\n\n')
// }
// console.log(`Mr. ${Absent_Guest} Is not coming.`);
// console.log('Good News! we find a three more guests we are  invite to dinner for 3 more guset.')
// Guest_List.unshift('Arshad');
// Guest_List.splice(2,0 ,'Ali');
// Guest_List.push('Sufiyan');
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nWe are inviting them to dinner.\n\nThank You for coming to our part....\n\n')
// }
/*---------------------------2nd step---------------*/
// Array containing the original guest list
let guestList = ['Kamran Tessori', 'Sir Zia', 'Daniyal Nagoori'];
// Print the name of the guest who can't make it
const guestWhoCantMakeIt = guestList.splice(1, 1)[0]; // Remove the second guest
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
// Replace the name of the guest who can't make it with a new person
const newGuest = "Mustafa kamal..";
guestList.push(newGuest);
// Print a message informing about the bigger dinner table
console.log("We found a bigger dinner table!");
// Add three more guests
guestList.unshift("Arshad"); // Add to the beginning
guestList.splice(2, 0, "Albert Einstein"); // Add to the middle
guestList.push("Sufiyan"); // Add to the end
// Function to print invitation message to each person
function sendInvitation(guest) {
    console.log(`Dear ${guest},\n\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\n\nBest regards,\n[Tasbeen Arshad]`);
}
// Print a new set of invitation messages
console.log("\nNew set of invitation messages:");
guestList.forEach(sendInvitation);
