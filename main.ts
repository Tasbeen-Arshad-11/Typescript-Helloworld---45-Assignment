// 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would
//  you invite? Make a list that includes at least three people you’d like to invite to dinner. 
//  Then use your list to print a message to each person, inviting them to dinner.


/*------------------start working-----------------*/

/*----------------1st step---------------------*/

// let Guest_List :string[] = ['Kamran Tessori','Babar Azam','Wajah Ali'];

// for(let i=0; i<Guest_List.length; i++){


//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nWe are inviting them to dinner.\n\nThank You for coming to our part....')
// }

/*----------------------2nd step-------------*/
// Array containing people I'd like to invite to dinner
const Guest_List: string[] = ['Kamran Tessori','Babar Azam','Wajah Ali'];

// Function to print invitation message to each person
function sendInvitation(guest: string): void {
    console.log(`Dear ${guest},\n\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\n\nBest regards,\n[Tasbeen Arshad]`);
}

// Iterating through the guest list and sending invitations
Guest_List.forEach(sendInvitation);


