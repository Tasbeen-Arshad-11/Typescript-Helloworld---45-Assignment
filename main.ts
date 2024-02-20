// 30: Hello Admin: Make a array of five or more usernames, including the name 'admin'.
//  Imagine you are writing code that will print a greeting to each user after they log in
//   to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like 
// to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

/*-----------------------------------start working---------------------------*/


// let Hello_Admin :string[] = ["Admin","Sufiyan","Hassan","Anus",]

// for(let i=0; i<Hello_Admin.length; i++){
//    if(Hello_Admin[i] == "Admin"){
//     console.log("Hello admin, would you like  to see a status report?")
//    } 
//     console.log(Hello_Admin[i])
// }

/*-----------------------------------2nnd working--------------*/

// let Hello_Admin :string[] = ["Admin","Sufiyan","Hassan","Anus","Arshad"]

// for(let i=0; i<Hello_Admin.length; i++){
//    if(Hello_Admin[i] == "Admin"){
//     console.log("Hello Admin, would you like  to see a status report?")
//    } else{
//     console.log(`Hello ${Hello_Admin[i]}`)
//    } 
// }


/*-----------------------------------2nnd working--------------*/
// let Hello_Admin: string[] = ['admin','Sufiyan','Hassan','Anus','Arshad'];

// for (let Hello_admin of Hello_Admin) {
//     if (Hello_admin.toLowerCase() === 'admin') {
//         console.log('Hello admin, would you like to see a status report?');
//     } else {
//         console.log(`Hello ${Hello_admin}, thank you for logging in again.`);
//     }
// }


/*-----------------------------------3rd working--------------*/
// Array of usernames
let usernames: string[] = ['admin','Sufiyan','Hassan','Anus','Arshad'];

// Loop through the array and print greetings
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}










