// function to get sunOfTwoNumbers
function sumOfTwoNumbers(input: number): number {
    let sum = 0;
    for (let i = 1; i < input; i++) {
        sum += i;
    }
    return sum;
}

// Normal Execution flow 
// console.log("start of the program")
// console.log("Step 1 Execution")
// console.log("Step 2 Execution")
// let result = sumOfTwoNumbers(10000000000);
// console.log("Step 3 Execution and the result is : " +result)
// console.log("Step 4 Execution")
// console.log("Step 5 Execution")
// console.log("Step 6 Execution")

//callback function ==> Asynchronous execution flow
console.log("start of the program")
console.log("Step 1 Execution")
console.log("Step 2 Execution")

setTimeout(():void =>{
let result = sumOfTwoNumbers(10000000000);
console.log("Step 3 Execution and the result is : " +result)
},3000)

console.log("Step 4 Execution")
console.log("Step 5 Execution")
console.log("Step 6 Execution")