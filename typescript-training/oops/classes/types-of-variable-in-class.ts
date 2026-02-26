class Employee {

    //local variable ==> The variable declared inside the method is called local variable. Whenever we can access the variable only inside the method, then it is called local variable.
    // instance variable ==> The variable declared outside the method but inside the class. Whenever we can access the variable by creating the object of the class, then it is called instance variable.
    // static variable ==> The variable declared outside the method but inside the class along with the static keyword. Whenever we can access the variable without creating the object of the class and access with the class name, then it is called static variable.

    empName: string = "deepak";
    static companyName: string = "Binary Semantics Ltd.";

    display(): void {
        let empSalary: number = 50000;
        console.log("Employee Salary:" +empSalary);
    }
}

let emp1 = new Employee();
//console.log("Employee Salary:"+ emp1.empSalary); // Error: Property 'empSalary' does not exist on type 'Employee'.
console.log(`Employee Name: ${emp1.empName}`);
console.log(`Company Name: ${Employee.companyName}`);
emp1.display();