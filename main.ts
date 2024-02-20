// 45: Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. It should then 
// accept an arbitrary number of keyword arguments. Call the function with the required
//  information and two other name-value pairs, such as a color or an optional feature. 
//  Print the Object that’s returned to make sure all the information was stored correctly.

/*-------------------------strat working ---------------*/

interface Cars {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow additional properties
}

function create_car(manufacturer: string, model: string, ...extras: [string, any][]): Cars {
    const car: Cars = {
        manufacturer: manufacturer,
        model: model
    };
    // Adding additional properties if provided
    extras.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}

// Calling the function with required information and additional properties
const myCar = create_car("Toyota", "Corolla", ["color", "blue"], ["year", 2023]);

// Printing the object to check if all information was stored correctly
console.log(myCar);
