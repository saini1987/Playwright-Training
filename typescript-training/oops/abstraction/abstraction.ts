//abstraction: abstraction is the conecpt of hiding the implementation.

//method: A method is a block of code or collection of statements written together inside the block to perform specific task.

abstract class Application {

    loginIntoApplication(): void {
        console.log("Login into application");
        console.log("Enter Credentials");
        console.log("Click on login button and verify the login is successful");
    }

    abstract logoutFromApplication(): void;
}

//cannot create object of abstract class
// class Facebook {
//     let obj = new Application();
// }


class Google extends Application {

    getMethod(): void {
        this.loginIntoApplication();
    }

    logoutFromApplication(): void {
        console.log("Logout from application");
        console.log("Click on logout button and verify the logout is successful");
    }
}

let obj = new Google();
obj.getMethod();
obj.logoutFromApplication();