//interface: 100% abstract class
//extend means extending the help --> deepak is going to help to bharath, In return bharath is going to extend the help of deepak
//implement means implementing the help --> deepak is going to help to bharath, In return bharath is going to implement the help of deepak

interface Application1 {

    loginIntoApplication(): void;

    logoutFromApplication(): void;
}

interface Application12 {

    verifyHomePage(): void;

    verifyDashboard(): void;
}

class Google implements Application1, Application12 {
    loginIntoApplication(): void {
        console.log("Login into Google Application");
    }

    verifyHomePage(): void {
        console.log("Verify Home Page of Google Application");
    }

    verifyDashboard(): void {
        console.log("Verify Dashboard of Google Application");
    }

    logoutFromApplication(): void {
        console.log("Logout from Google Application");
    }

}

let googleApp = new Google();
googleApp.loginIntoApplication();
googleApp.verifyHomePage();
googleApp.verifyDashboard();
googleApp.logoutFromApplication();




