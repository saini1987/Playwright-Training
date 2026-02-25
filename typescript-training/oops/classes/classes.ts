// OOPS in Type Script
//1. class ==> class is a template/files that can store data, methods, and objects toegther at one place.

//Syntax of class:

//class className{
//data  
//method
//object
//}

//2. object ==> object is an instance of a class.(object is xerox copy of class)

//Syntax of object:
//let objectName = new className() 
//objectName.methodName()


// creating Employee class
class Employee {

    //default constructor
    constructor(){
        console.log("This is the default constructor")
    }
    empId: number = 101;
    empName: string = "John";
    empSalary: number = 50000;

    empAddress(): void {
        console.log("Address: 123 Main Street, Gurgaon, India");
    }
}

//Access the data from the class
let obj = new Employee(); // new + constructor = object
console.log("Employee ID: " + obj.empId);
console.log("Employee Name: " + obj.empName);
console.log("Employee Salary: " + obj.empSalary);
obj.empAddress();

//3. constructor ==> Constructor is a special method with a name "constructor" created by default in every class.
// It is used to initialize the data members of the class. It is automatically called when an object of the class is created.



