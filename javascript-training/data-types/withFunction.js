// Test Case 1: verify the home page
console.log("********************Test Case 1: verify the home page********************");
lauunchBrowserAndlogin("Safari");
console.log("Verify the home page is displayed or not");
logoutAndCloseBrowser();


// Test Case 2: verify the account balance
console.log("********************Test Case 2: verify the account balance********************");
lauunchBrowserAndlogin("Chrome");
console.log("Verify the home page is displayed");
console.log("Navigate to the account balance page");
let accountBalance = 5000; // Simulating the account balance
console.log("Verify the account balance is displayed as: " + accountBalance);
logoutAndCloseBrowser();

// Test Case 3: verify the account statement    
console.log("********************Test Case 3: verify the account statement********************");
lauunchBrowserAndlogin("Edge");
console.log("Verify the home page is displayed");
console.log("Navigate to the account statement page");
console.log("Verify the account balance is displayed as following details:");
logoutAndCloseBrowser();




function lauunchBrowserAndlogin(browserName) {
    console.log("Launch the "+browserName+" Browser");
    console.log("Enter the URL: https://www.icici.com/");
    console.log("Enter the username as 'DeepakSaini' and password as 'Deepak@123'");
    console.log("Click on the login button");
}

// function lauunchChromeBrowserAndlogin() {
//     console.log("Launch the Chrome Browser");
//     console.log("Enter the URL: https://www.icici.com/");
//     console.log("Enter the username as 'DeepakSaini' and password as 'Deepak@123'");
//     console.log("Click on the login button");
// }

// function lauunchEdgeBrowserAndlogin() {
//     console.log("Launch the Edge Browser");
//     console.log("Enter the URL: https://www.icici.com/");
//     console.log("Enter the username as 'DeepakSaini' and password as 'Deepak@123'");
//     console.log("Click on the login button");
// }

// function lauunchSafariBrowserAndlogin() {
//     console.log("Launch the Safari Browser");
//     console.log("Enter the URL: https://www.icici.com/");
//     console.log("Enter the username as 'DeepakSaini' and password as 'Deepak@123'");
//     console.log("Click on the login button");
// }

function logoutAndCloseBrowser() {
    console.log("Logout from the application");
    console.log("Close the browser");
}


function getAccountStatement() {
    console.log("Navigate to the account balance page");
    let accountBalance = 5000;
    return accountBalance;
}

console.log(getAccountStatement());