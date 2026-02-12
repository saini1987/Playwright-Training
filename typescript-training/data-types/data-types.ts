// syntax to store data in typescript

// variableDeclaration variable: dataType = value;
// let name: string = "deepak";
// Two types of data types in typeScript: primitive and non-primitive
//Primitive vs non-primitive data types

// mutable(non primitive) vs immutable(primitive) data types
/*******************************************************************/
/*************PRIMITIVE DATA TYPES IN TYPESCRIPT ******************/
/*****************************************************************/

//1. number: number data type that we are going to store numbers with decimal points or without decimal points without any quotes.
let num1: number = 10; // number data type
let num2: number = 3.14; // number data type
console.log(num1);
console.log(num2);


//2. string: string data type that we are going to store text or charcters data with the help of single quotes or double quotes or backticks.

let empName: string = "Reema Saini"; // string data type
let empCity: string = 'Punjab'; // string data type
console.log(empName);
console.log(empCity);

let greeting: string = "you told me ,'good morning' "; // string data type
let newGreeting: string = 'I told him ,"good morning" '; // string data type
console.log(greeting);
console.log(newGreeting);

// backticks: 1. It will be used to store the template literals.
//2. It will be used to store the dynamic data.

let message: string = `My name is ${empName} and I am from ${empCity}`; // string data type
console.log(message);


//3. boolean: boolean data type that we are going to store true or false values.

let isMarried: boolean = true;
console.log(isMarried);
console.log(10 < 5)

//4. undefined: undefined represents a variable that has been declared but not assigned a value

let age: undefined = undefined;
console.log(age);

//5. null: null represents a variable that has been declared and assigned null/empty values.
let salary: null = null
console.log(salary);

//6. union : union represents more than one data type allowed within variable. It is denoted by the pipe symbol (|).

let empAddress: string | number | boolean = "123 Main Street"; // string data type
console.log(empAddress);
empAddress = 456; // number data type
console.log(empAddress);
empAddress = true; // boolean data type
console.log(empAddress);

//7. any: any represents a data type that can be used to remove the type safety of any type of data. It is denoted by the keyword "any".

let data: any = "Hello World"; // string data type
console.log(data);
data = 100; // number data type
console.log(data);
data = false; // boolean data type
console.log(data);


/*******************************************************************/
/*************NON PRIMITIVE DATA TYPES IN TYPESCRIPT ******************/
/*****************************************************************/

// 1. Object: object data type that we are going to store key value pairs data.
//interface in TypeScript is used to define the structure (shape) of an object
//Why Use Interface?
     //1.Type safety (prevents mistakes)
     //2.Better code readability
     //3.Auto-completion in editors
     //4.Makes large projects organized
     
interface PersonInfo {
    name: string,
    age: number,
    empId: number,
    visaStatus: boolean,
    address: {
        city: string,
        state: string,
        country: string
    }
}


let person: PersonInfo = {
    name: "deepak",
    age: 35,
    empId: 1235,
    visaStatus: true,
    address: {
        city: "delhi",
        state: "delhi",
        country: "india"
    }
}

console.log(person);
console.log(person.name); // one way
console.log(person["name"]); // second way
console.log(person["empId"])
console.log(person.address.city);
console.log(person.address["country"]);

// 2. array : Array data type represents the list of values

let fruits:string[]= ["apple", "banana", "orange", "grape"]
let prices:number[] = [10, 20, 30, 40]
let fruitsAndPrices:(string | number)[] = ["apple", 10, "banana", 20, "orange", 30, "grape", 40]

console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);
console.log(fruitsAndPrices[0]);
console.log(fruitsAndPrices[1]);
console.log(fruitsAndPrices[2]);
console.log(fruitsAndPrices[3]);


//3. tuple: tuple data type that we are going to use to store multiple values with different data types in a single variable in a specific order. It is denoted by the square brackets [].
let empInfo: [string, number, boolean] = ["deepak", 12345, true];
console.log(empInfo);
console.log(empInfo[0]);
console.log(empInfo[1]);
console.log(empInfo[2]);

//arrays vs tuples
//store employee information like name, empId, isMarried in array
let employeeInfo: (string | number | boolean)[] = [12345, true,"deepak"];
console.log(employeeInfo);

//store employee information like name, empId, isMarried in tuple
let employeeInfo1: [string, number, boolean] = ["deepak", 12345, true];
console.log(employeeInfo1);

// 3. function: function represents a block of code or collection of statements to complete a specific task.
// function is created without class and object. It is denoted by the keyword "function".
function lauunchBrowserAndlogin(browserName:string) : void{
    console.log("Launch the " + browserName + " Browser");
    console.log("Enter the URL: https://www.icici.com/");
    console.log("Enter the username as 'DeepakSaini' and password as 'Deepak@123'");
    console.log("Click on the login button");
}

function getAccountBalance() : number{
    console.log("Get the account balance for account number:");
    let accountBalance = 100000;
    return accountBalance;
}

//4. map : map represents a collection of key value pairs where each key is unique and maps to a specific value. It is denoted by the keyword "Map".
let empInfoMap: Map<number,string> =  new Map();
empInfoMap.set(12345, "deepak");
empInfoMap.set(12346, "reema");
empInfoMap.set(12347, "saini");

console.log(empInfoMap);

//5. set : set represents a collection of unique values where each value can only occur once. It is denoted by the keyword "Set".
let empIdSet: Set<number> = new Set();
empIdSet.add(12345);
empIdSet.add(12346);
empIdSet.add(12347);
empIdSet.add(12345); // duplicate value will not be added to the set
