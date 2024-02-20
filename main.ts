// 36: T-Shirt: Write a function called make_shirt() that accepts a size and the text 
// of a message that should be printed on the shirt. The function should print a sentence 
// summarizing the size of the shirt and the message printed on it. Call the function.


/*-----------start working--------------*/

function T_Shirt(Size: string, Message: string): void {
    console.log(`Creating a ${Size} shirt with the message: "${Message}"`);
}

// Calling the function with size and message
T_Shirt("Large", "Hello, i`m Tasbeen Arshad Programmer!");
