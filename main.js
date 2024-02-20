// 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive 
// in time for the dinner, and you have space for only two guests.
// Start with your program from Exercise 16. Add a new line that prints a message saying 
// that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list.
//  Each time you pop a name from your list, print a message to that person letting them know 
//  you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re 
// still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to 
// make sure you actually have an empty list at the end of your program.
/*----------------start work----------------*/
/*------------1st step----------------*/
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
// array add to 3 guest 
// Guest_List.unshift('Arshad');
// Guest_List.splice(2,0 ,'Ali');
// Guest_List.push('Sufiyan');
// i print a 6 men to array 
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nWe are inviting them to dinner.\n\nThank You for coming to our part....\n\n')
// }
// soory message to guest are not invited 
// console.log('\nSorry we con not a arrang a big table, only Two peoples will be invited..');
// how to remove a two guest 
// while(Guest_List.length > 2){
// let remove_Guest = Guest_List.pop();
// console.log(`Sorry ${remove_Guest}, You are a not invite for big table dinner..`)
// }
// more 2 guesst invited
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are Still invited.\n\nThank You for coming to our part....\n\n')
// }
//i remove a guest from array.........
// Guest_List.splice(0, 2);
// console.log(Guest_List);
/*---------------------2ns step--------------------*/
// Array containing the original guest list
let Guest_List = ['Kamran Tessori', 'Sir Zia', 'Daniyal Nagoori'];
// Print a message informing that only two people can be invited
console.log("Sorry, but the new dinner table won't arrive in time, so I can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (Guest_List.length > 2) {
    const removedGuest = Guest_List.pop();
    console.log(`Sorry ${removedGuest}, I'm unable to invite you to dinner.`);
}
// Print a message to each of the two people still on the list
Guest_List.forEach(guest => console.log(`Dear ${guest}, you're still invited to dinner.`));
// Remove the last two names from the list
Guest_List.pop();
Guest_List.pop();
// Print the list to ensure it's empty
console.log("Remaining guests:", Guest_List);
export {};
