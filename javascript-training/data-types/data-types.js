// Two types of data types in JavaScript: primitive and non-primitive
//Primitive vs non-primitive data types

// mutable vs immutable data types

let a = 10; // primitive data type
a + 10;
console.log(a);

let obj = { // non-primitive data type
    name: "deepak",
    state: "delhi"

}
obj.age = 35
console.log(obj);


/*******************************************************************/
/*************PRIMITIVE DATA TYPES IN JAVASCRIPT ******************/
/*****************************************************************/

//1. number: number data type that we are going to store numbers with decimal points or without decimal points without any quotes.
let num1 = 10; // number data type
let num2 = 3.14; // number data type
console.log(num1);
console.log(num2);

//2. string: string data type that we are going to store text or charcters data with the help of single quotes or double quotes or backticks.

let empName = "Reema Saini"; // string data type
let empCity = 'Punjab'; // string data type
console.log(empName);
console.log(empCity);

let greeting = "you told me ,'good morning' "; // string data type
let newGreeting = 'I told him ,"good morning" '; // string data type
console.log(greeting);
console.log(newGreeting);

// backticks: 1. It will be used to store the template literals.
//2. It will be used to store the dynamic data.

let message = `My name is ${empName} and I am from ${empCity}`; // string data type
console.log(message);


//3. boolean: boolean data type that we are going to store true or false values.

let isMarried = true;
console.log(isMarried);
console.log(10 < 5)


//4. undefined: undefined represents a variable that has been declared but not assigned a value

let age;
console.log(age);

//5. null: null represents a variable that has been declared and assigned null/empty values.
let salary = 10000;
salary = null;
console.log(salary);

// 6. symbol: symbol represents a unique hidden identifier

let countryOfOrigin = Symbol();
let productInfo = {
    productName: "iPhone 14 Pro Max",
    price: 120000,
    [countryOfOrigin]: "China"
}

console.log(productInfo);



/*******************************************************************/
/*************NON PRIMITIVE DATA TYPES IN JAVASCRIPT ******************/
/*****************************************************************/

// 1. Object: object data type that we are going to store key value pairs data.

let person = {
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

let fruits = ["apple", "banana", "orange", "grape"]
let prices = [10, 20, 30, 40]
let fruitsAndPrices = ["apple", 10, "banana", 20, "orange", 30, "grape", 40]

console.log(fruits);
console.log(prices);
console.log(fruitsAndPrices);
console.log(fruitsAndPrices[0]);
console.log(fruitsAndPrices[1]);
console.log(fruitsAndPrices[2]);
console.log(fruitsAndPrices[3]);


// 3. function: function represents a block of code or collection of statements to complete a specific task.
function lauunchBrowserAndlogin(browserName) {
    console.log("Launch the " + browserName + " Browser");
    console.log("Enter the URL: https://www.icici.com/");
    console.log("Enter the username as 'DeepakSaini' and password as 'Deepak@123'");
    console.log("Click on the login button");
}


//4. set : represents a collection of unique values of any data type.

let empIds = new Set();
empIds.add(1234);
empIds.add(1235);
empIds.add(1236);
empIds.add(1234);
console.log(empIds);
console.log(empIds.size);


//5. map: A map can store multiple key value pairs. A map allows duplicate values.But they won't allow duplicate keys. If we try to add duplicate keys, the old value will be replaced by the new value.

let empMap = new Map();
empMap.set(123, "Deepak");
empMap.set(124, "Reema");
empMap.set(125, "Saini");
empMap.set(123, "Siya");
empMap.set(126, "Gagan");
empMap.set(127, "Gurpreet");
console.log(empMap);
console.log(empMap.get(123));
empMap.delete(127);
console.log(empMap);


//6. Date: Date data type represents the date and time values.
let currentDate = new Date(); // current date and time
console.log(currentDate);

//Current year
console.log(currentDate.getFullYear());

//Current month
console.log(currentDate.getMonth() + 1); // month starts from 0 to 11

//Current date
console.log(currentDate.getDate()); // date starts from 1 to 31

//Current hour
console.log(currentDate.getHours());

//Current minutes
console.log(currentDate.getMinutes());

//Current seconds
console.log(currentDate.getSeconds());