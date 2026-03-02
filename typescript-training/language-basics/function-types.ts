// Function Types in TypeScript

// There are mainly three different types of functions that will be used in JavaScript and TypeScript:
//1. Named Function
//2. Arrow Function or Lambda Function
//3. Anonymous Function

//1. Named Function: 
// Named function is nothing but the functions that are declared explicitly with some name.

//syntax:
// function functionName(parameters): returnType {
//     // function body
// }

function greet(name: string): string {
    return "Hello, "+name+"! Welcome to TypeScript training!";
}

console.log(greet("John"));


//2. Arrow Function or Lambda Function:
// Arrow functions are nothing but the function that are we going to write without any name. And the implementation will be written by using arrow mark.

//syntax:
// let functionName = (parameters): returnType => implementation

// regular function
function sum(a: number, b : number):number{
    let c: number=a+b;
    return c;
}

//calling the function
console.log(sum(5,10));

// arrow function
let add = (a: number, b: number)=> a+b;
// calling the arrow function
console.log(add(10,10));


//3. Anonymous Function:
