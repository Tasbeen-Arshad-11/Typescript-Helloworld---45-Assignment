// 32: Checking Usernames: Do the following to create a program that simulates how websites 
// ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new 
// usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. If a username 
// has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not 
// be accepted.

/*-----------------------start work-----------------------------------*/
// Define current users and new users
const current_users: string[] = ["john", "Naveed", "Hashir", "Irfan", "Hassan"];
const new_users: string[] = ["Eman", "wania", "Farheen", "Muniba", "Sana"];

// Convert all current usernames to lowercase for case-insensitive comparison

const Checking_current_users_lower: string[] = current_users.map(username => username.toLowerCase());

// Check each new username
for (const Checking_new_user of new_users) {

    // Convert the new username to lowercase for case-insensitive comparison

    const Checking_new_user_lower = Checking_new_user.toLowerCase();

    // Check if the new username is already in use
    if (Checking_current_users_lower.includes(Checking_new_user_lower)) {
        console.log(`Sorry, the username "${new_users}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${new_users}" is available.`);
    }
}





