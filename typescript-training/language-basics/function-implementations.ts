// function : a function is a block of code or a collection of statements written together to complete a specific task.


// 1. function without parameters and without return type
// Creating a common function that is not at all going to take any input. At the same time, it is not going to give you any output as well.

function greet(): void { // void specifies that the function does not return any value
    console.log("Hello, welcome to TypeScript training!");
}

//calling the function
greet();

// 2. function with parameters and without return type
// Creating a common function that is going to take some input but it is not going to give you any output.

function greetPerson(name: string): void {
    console.log(`Hello, ${name}! Welcome to TypeScript training!`);
}

// calling the function
greetPerson("Alice");

// 3. function with parameters and with return type
// Creating a common function that is going to take some input and it is also going to give you some output.
function add(a: number, b: number): number {
    return a + b; // returning the sum of a and b
}
// calling the function
const sum = add(5, 10);
console.log(`The sum of 5 and 10 is: ${sum}`);


//4. function without parameters and with return type
// Creating a common function that is not going to take any input but it is going to give you some output.
function getWelcomeMessage(): string {
    return "Welcome to TypeScript training!";
}

function currentYear(): number {
    return new Date().getFullYear(); // returning the current year
}

// calling the function
const welcomeMessage = getWelcomeMessage();
console.log(welcomeMessage);  
console.log(`The current year is: ${currentYear()}`);  


//5. function with optional parameters
// Creating a common function that can take some input parameters, out of that some parameters are optional to enter.
// ? Represents that the parameter is optional

function printEmpData(name: string, age?: number): void {
    if (age !== undefined) {
        console.log(`Employee: ${name}, Age: ${age}`);
    } else {
        console.log(`Employee: ${name}, Age: Not specified`);
    }
}

// calling the function
printEmpData("Deepak Saini", 38); 
printEmpData("Reema");


//6. function with default parameters
// Creating a common function that can take some input parameters, out of that some parameters have default values if not provided by the user.
// default value: if the user is not going to provide any value, by default it is going to consider the default value.

function printEmpVisaInfo(name: string, visaStatus: boolean = false): void {
    console.log(`Employee: ${name}, Visa Type: ${visaStatus}`);
}
// calling the function
printEmpVisaInfo("Deepak Saini", true);
printEmpVisaInfo("Reema"); // visaStatus will take the default value of false

//7. function with rest parameters
// Creating a common function that can take multiple input parameters as an array using rest parameters.
// ... represents rest parameters which allows us to pass an arbitrary number of arguments as an array. 

function printNumbers(...numbers: number[]): void {
    let sum: number = 0;
    for (let num of numbers) {
        sum += num; // adding each number to the sum    
    }
    console.log("Sum:", sum);
}
// calling the function
printNumbers(10,20);
printNumbers(10,20,30);
printNumbers(10,20,30,40);
printNumbers(10,20,30,40,50); 
