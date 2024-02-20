// 15: Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of someone else
//   to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your 
// program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name 
// of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

/*----------------------------start working-------------------*/
/*----------------------------1sts working-------------------*/
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

// console.log(`Mr. ${Absent_Guest} Is not coming.`)


/*----------------2nd working stat-----------------------*/
// Array containing the original guest list
let guestList: string[] = ['Kamran Tessori','Sir Zia','Daniyal Nagoori'];

// Print the name of the guest who can't make it
const guestWhoCantMakeIt: string = guestList.splice(1, 1)[0]; // Remove the second guest
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

// Replace the name of the guest who can't make it with a new person
const newGuest: string = "Mustafa kamal";
guestList.push(newGuest);

// Function to print invitation message to each person
function sendInvitation(guest: string): void {
    console.log(`Dear ${guest},\n\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\n\nBest regards,\n[Tasbeen Arshad]`);
}

// Print a second set of invitation messages
console.log("\nSecond set of invitation messages:");
guestList.forEach(sendInvitation);


