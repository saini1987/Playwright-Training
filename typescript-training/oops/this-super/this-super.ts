class parent{
    course: string = "Typescript";

    printParent(){
        console.log("Parent Course method");
    }
}

class child extends parent{
    course: string = "JavaScript";

    printParent(){
        console.log("child course method");
    }
    printCourse(course: string){
        console.log("Child Course:" + course);
        //console.log("child new Course:" + new child().course); 
       // console.log("parent Course:" + new parent().course);

       console.log("child new Course:" + this.course);
       console.log("child new Course:" + super.printParent());
    }
    
}

let obj = new child();
obj.printCourse("Playwright"); // this will print child course because of method overriding and this keyword refers to current class object.