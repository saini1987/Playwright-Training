//inheritance: Inheritance is the concept of extending parent class properties and methods to child class without creating object. 
// It promotes code reusability and establishes a natural hierarchical relationship between classes.
//1. single inheritance
//2. multilevel inheritance
//3. hierarchical inheritance
// 4. multiple inheritance ( this is not supported in typescript but we can achieve it using interfaces)

class class1 {
    empName: string = "deepak saini";
    empId: number = 12345;

}

class class2 extends class1 {
    empSalary: number = 50000;

    printEmpDetails() {
        console.log("Employee Name:" + this.empName); // this means current class object.
        console.log("Employee ID:" + this.empId);
        console.log("Employee Salary:" + this.empSalary);
    }

}

let emp = new class2();
emp.printEmpDetails();
