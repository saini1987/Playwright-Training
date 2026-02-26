// Access modifier in Typescript

//1. public/no keyword ==> can be accessed anywhere
//2. protected ==> can be accessed within the class and its subclasses
//3. private ==> can be accessed only within the class

class Person{
    public name:string = "Deepak Saini"; // public data(accessible anywhere)
    protected age:number =  38; // protected data(accessible within the class and its subclasses)
    private salary:number = 100000; // private data(accessible only within the class)

    printDetails():void{
        console.log("Accessing Members within the class:");

        console.log("Name:" +this.name);
        console.log("Age:" +this.age);
        console.log("Salary:" +this.salary);
    }

    //using encapsulation to access private member salary
    public getSalary():number{
        return this.salary;
    }
}

class Project{  
     printDetails():void{
        console.log("Accessing Members outside of the class:");
        let obj = new Person();
        console.log("Name:" +obj.name);
        // console.log("Age:" +obj.age); // Error: Property 'age' is protected and only accessible within class 'Person' and its subclasses.
        // console.log("Salary:" +obj.salary); // Error: Property 'salary' is private and only accessible within class 'Person'.

        console.log("Salary using getter method:" +obj.getSalary());
    }
}

class Employee extends Person{

    printDetails():void{
        console.log("Accessing Members within the subclass:");
        console.log("Name:" +this.name);
        console.log("Age:" +this.age);
        // console.log("Salary:" +this.salary); // Error: Property 'salary' is private and only accessible within class 'Person'.
    }
}

// Calling the methods
let person = new Person();
person.printDetails();

let project = new Project();
project.printDetails();

let employee = new Employee();
employee.printDetails();
