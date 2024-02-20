// 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default
//  with a message that reads I love TypeScript. Make a large shirt and a medium shirt with 
//  the default message, and a shirt of any size with a different message.


/*-------------------start working--------------*/
function Large_Shirts(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// Creating a large shirt with default message
Large_Shirts();

// Creating a medium shirt with default message
Large_Shirts("Medium");

// Creating a shirt of any size with a different message
Large_Shirts("Small", "Keep coding!");


