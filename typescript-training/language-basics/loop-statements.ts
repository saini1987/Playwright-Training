//Loop statements ===> loop the statements and execute the same statements multiple times

//Before Loop
let empName: string = "deepak"
console.log(empName);
console.log(empName);
console.log(empName);
console.log(empName);
console.log(empName);
console.log(empName);

//After Loop
// Two tyepes of loop statements
//1. For loop
//2. While loop

//1. For loop ===> for loop is used when we know the number of iterations to be executed in advance or before itself.
//2. While loop ===> while loop is used when we don't know the number of iterations to be executed in advance or before itself.

//1. For loop 
// for(condition-to-start, condition-to-end, interval){
//     //statements
// }
let empName1: string = "jyothi";
for (let i: number = 1; i <= 10; i++) {
    console.log(empName1);
}

//2. While loop
// while(condition-to-start){
//     // code to be executed
//}
let i: number = 1;
let isPageLoaded: boolean = false;
while (i > 0) {

    if (isPageLoaded || i == 5) {
        break; // break the loop intentionally when page is loaded or the page is refreshed already for 5 times
    }
    console.log("Refresh the page")
    i++
}

// special cases in for loop
// for ... of loop ==> used to iterate the values of an array or collection
// for ... in loop ==> used to iterate the properties of an object

// for ... of loop ==> used to iterate the values of an array or collection
let empNames: string[] = ["deepak", "jyothi", "sai", "sumanth"];
// normal for loop
for(let i:number=0;i<empNames.length;i++){
    console.log(empNames[i]);
}

// for ... of loop
for(let val of empNames){ // get each and every value of empNames
    console.log(val);
}

// for ... in loop
interface presonInfo{
    name:string,
    age:number,
    visaStatus:boolean

    address:{
        city:string,
        state:string,
        country:string
    }
}

let person:presonInfo = {
    name:"deepak",
    age:30,
    visaStatus:true,

    address:{   
        city:"hyderabad",
        state:"telangana",
        country:"india"
    }
}

for(let val in person){ // get each and every property/key inside the person object
    console.log(val);
    console.log(person[val as keyof presonInfo]); // get the value of each and every property/key inside the person object
}


// special cases in for while loop

//do ... while loop ==> used to execute the statements at least once even if the condition is false
// do{
//     // code to be executed
// }while(condition-to-end) 

// for normal while loop
let x:number = 0; // check the condition first and then execute the code later
while(x>0){
    console.log("hello world");
    x++;
}

// do while loop      
do{ // execute the code first and then check the condition later
    console.log("hello world");
    x++;
}while(x>0)



