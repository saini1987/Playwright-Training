class Emplyee{

    empId: number;
    constructor(id:number){
        this.empId = id;
    }

     //method1
    printEmployeeDetails(empName: string){
        console.log("Employee ID: " + this.empId);
        console.log("Employee Name: " + empName);
    }
     //method2
    printEmployeeProjects(empProjects: string){
        console.log("Employee ID: " + this.empId);
        console.log("Employee Projects: " + empProjects);
    }

        //method3
     printEmployeerole(empRole: string){
        console.log("Employee ID: " + this.empId);
        console.log("Employee Role: " + empRole);
    }

}
//creating object of the class
let obj = new Emplyee(1234);

     //calling method1
    obj.printEmployeeDetails("John");
    //calling method2
    obj.printEmployeeProjects("Project A, Project B");
    //calling method3
    obj.printEmployeerole("Software Engineer");