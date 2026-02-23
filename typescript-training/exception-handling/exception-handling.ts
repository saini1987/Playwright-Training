// Exception handling ==> Handle the Exceptions

//try...catch...finally blocks ==> When there is an exception, we can handle an exception and continue the excution process.
//throw an custom exception ==> When there is no exception, but intentionally the user want to fail the program, by using throw keyword we can throw an custom exception.

// let input: any
// console.log(input.toLowerCase());
// console.log("Execution is Completed")

// let input: any
// try {
//     console.log(input.toLowerCase());
// } catch (error) {
//     console.log("Exception occured, Please check!!");
// }
// console.log("Execution is Completed")


let input: any
try {
    console.log(input.toLowerCase());
} catch (error) {
    console.log("Exception occured, Please check!!");
    console.log(input.toUpperCase());
} finally {
    console.log("Execution is Completed")
}
