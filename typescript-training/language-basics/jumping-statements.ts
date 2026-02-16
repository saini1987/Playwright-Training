// jump statements in loops
//1. break statement ==> used to exit the loop intentionally when a certain condition is met
//2. continue statement ==> used to skip the current iteration and move to the next iteration when a certain condition is met

// example of break statement
for(let x:number=1; x<=10; x++){
    if(x === 5){
        break; // exit the loop when x is 5
    }
    console.log(x);
}


// example of continue statement
for(let x:number=1; x<=10; x++){
    if(x === 5){
        continue; // skip the current iteration when x is 5
    }
    console.log(x);
}