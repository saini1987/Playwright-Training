// Conditional statements ==> statements along with conditions
// What is statements ==> Statemnt meaning line of code.

//(condition){
//   statement1 
// }

// There are two types of conditional statements in typescript
// 1. if else conditional statement ==> will be used when we don't know the result of conditions before itself.
// 2. switch conditional statement ==> will be used when we know the result of conditions before itself.Now we want to choose one options among multiples.

let percentage: number = 80;
if (percentage > 75) {
    console.log("Distinction");
    if (percentage > 90) {
        console.log("Congratulations! You are eligible for gold medals.");
    }
    else {
        console.log("Sorry! You are not eligible for gold medals. Best of luck for next time.");
    }

}
else if (percentage > 60) {
    console.log("First class");
}
else if (percentage > 50) {
    console.log("Second class");
}
else if (percentage > 35) {
    console.log("Pass class");
}
else {
    console.log("Fail");
}

