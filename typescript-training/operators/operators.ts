//operators in typescript : Set of special characters that we are going to use in our typescript programming language to perform some specific operations on the data. 

// Types of operators in typescript :

// There are five types of operators in typescript :

// 1. Arithmetic operators ==> The special characters used in mathematical operations.(+,-,*,/,%,++,--)
// 2. Assignment operators ==> The special characters used to assign values to variables.(=,+=,-=,*=,/=,%=)
// 3. Comparison operators ==> The special characters used to compare two values.(==,===,!=,!==,>,<,>=,<=)
// 4. Logical operators ==> The special characters used to perform logical operations on multiple conditions.(&&,||,!)
// 5. Ternary operators ==> The special character used to perform a conditional operation. (condition ? expression1 : expression2)

//1. Arithmetic operators ==> The special characters used in mathematical operations.(+,-,*,/,%,++,--)
//+ : Addition operator
//- : Subtraction operator
//* : Multiplication operator
// / : Division operator
// % : Modulus operator
// ++ : Increment operator (x++ -- post increment, ++x -- pre increment)
// -- : Decrement operator (x-- -- post decrement, --x -- pre decrement)

let a: number = 10;
let b: number = 5;
console.log("Addition of a and b is : " + (a + b)); // 15
console.log("Subtraction of a and b is : " + (a - b)); // 5
console.log("Multiplication of a and b is : " + (a * b)); // 50
console.log("Division of a and b is : " + (a / b)); // 2
console.log("Modulus of a and b is : " + (a % b)); // 0

// ++ ==> +1 ==> x++ ==> x= x+1
// -- ==> -1 ==> x-- ==> x= x-1
console.log("post increment is : " + (a++)); // post execution of this line, then increase the value by 1
console.log("After next line of post increment : " +a);
console.log("pre increment is : " + (++b)); /// before execution of this line, increase the value by 1

console.log("post decrement is : " + (a--)); // post execution of this line, then decrease the value by 1
console.log("After next line of post decrement : " + a);
console.log("pre decrement is : " + (--b)); /// before execution of this line, decrease the value by 1


// 2. Assignment operators ==> The special characters used to assign values to variables.(=,+=,-=,*=,/=,%=)

let c:number =20;
console.log("Initial value of c is : " + c);

c+=10 // c = c+10
console.log("c+=10 value of c is : " + c)
c-= 10 // c = c-10
console.log("c-=10 value of c is : " + c)

c*=10 // c = c*10
console.log("c*=10 value of c is : " + c)

c/=10 // c = c/10
console.log("c/=10 value of c is : " + c)

c%=10 // c = c%10
console.log("c%=10 value of c is : " + c)


// 3. Comparison operators ==> The special characters used to compare two values.(==,===,!=,!==,>,<,>=,<=)
// == : loose equality ==> It will just check only the value without considering the datatype.
// === : strict equality ==> It will check value as well as datatype.

let n : number = 10;
let m: any = "10";
console.log("loose equality is : " + (n==m));
console.log("strict equality is : " + (n===m));

console.log("loose equality is : " + (n!=m));
console.log("strict equality is : " + (n!==m));


// 4. Logical operators ==> The special characters used to perform logical operations on multiple conditions.(&&,||,!)
// && : logical AND operator ==> result will be true only when all the conditions are true.
// || : logical OR operator ==> result will be true if at least one condition is true.
// ! : logical NOT operator ==> opposite result/It will return true if the condition is false.

let i: number = 10;
let j: number = 20;
console.log((i<j) && (i==j)); // true and false ==> false
console.log(!((i<j) && (i==j))); // not(true and false) ==> not false ==> true
console.log((i<j) || (i==j)); // true or false ==> true
console.log(!((i<j) || (i==j))); //not(true or false)==> not true ==> false


// 5. Ternary operators ==> The special character used to perform a conditional operation. (condition ? expression1 : expression2)
let age: number = 17;
let canVote:string = (age>=18) ? "Eligible to vote" : "Not-eligible to vote";
console.log(canVote);
let eligible: boolean = (age>=18) ? true : false;
console.log(eligible); 

