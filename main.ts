// 31 : No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

/*----------------------------1st step-------------------------*/
// let No_User :string[] = []

// if (No_User.length === 0) {
//      console.log("We need to find some users!");
//      } else {

// for(let i=0; i<No_User.length; i++){
//    if(No_User[i] == "Admin"){
//     console.log("Hello admin, would you like  to see a status report?")
//    } else{
//     console.log(No_User[i])
//    }
//       }
//  }


/*----------------------------2nd step-------------------------*/

let No_User: string[] = [];

// Check if the list of users is empty
if (No_User.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let no_user of No_User) {
        if (no_user.toLowerCase() === 'admin') {
            console.log('Hello Admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${no_user}, thank you for logging in again.`);
        }
    }
}












