class Emplyee{

     //method1
    printEmployeeDetails(empId: number, empName: string){
        console.log("Employee ID: " + empId);
        console.log("Employee Name: " + empName);
    }
     //method2
    printEmployeeProjects(empId: number, empProjects: string){
        console.log("Employee ID: " + empId);
        console.log("Employee Projects: " + empProjects);
    }

        //method3
     printEmployeerole(empId: number, empRole: string){
        console.log("Employee ID: " + empId);
        console.log("Employee Role: " + empRole);
    }

}
//creating object of the class
let obj = new Emplyee();

     //calling method1
    obj.printEmployeeDetails(101, "John");
    //calling method2
    obj.printEmployeeProjects(101, "Project A, Project B");
    //calling method3
    obj.printEmployeerole(101, "Software Engineer");