// String ==> It is nothing but collection of characters written together within quotation.

//1. Storing string in a variable
let greeting: string = "Hello, World!"; // double quotes
let name: string = 'John Doe'; // single quotes
let message: string = `Welcome to TypeScript!`; // backticks (template literals)

console.log(greeting); // Output: Hello, World!
console.log(name); // Output: John Doe
console.log(message); // Output: Welcome to TypeScript! 

//advantage of backticks is that we can use string interpolation and multi-line strings easily.
let firstName: string = "Jane";
let lastName: string = "Smith";

//old way of concatenating strings
let fullNameOld: string = firstName + " " + lastName;
console.log(fullNameOld); // Output: Jane Smith

//new way of concatenating strings using template literals
let fullName: string = `${firstName} ${lastName}`;
console.log(fullName); // Output: Jane Smith


/************************String Methods *********************************** */

//1. Storing string in a variable
console.log("1. Storing string in a variable")
let originalString: string = " Username : DeepakSaini | Password : admin123 ";
console.log("Orignal String : " + originalString);

//2. calculate the total number of characters available in a string ===> string.length
console.log("2. calculate the total number of characters available in a string")
let stringLength: number = originalString.length;
console.log("Total Number of Chars in a String: " + stringLength)

//3. get the specific character from the string at a specific index ===> string.charAt(index)
console.log("3. get the specific character from the string at a specific index")
let charAtIndex5: string = originalString.charAt(5)
console.log("char at index 5 : " + charAtIndex5)

//4. reverse the string
let reverseString: string = " "
for (let i = originalString.length - 1; i >= 0; i--) {
    //reverseString +=originalString.charAt(i)
    reverseString = reverseString + originalString.charAt(i)
}
console.log(reverseString);

//5. removing unwanted spaces(begining & ending) from the string ===> string.trim()
console.log("5. removing unwanted spaces(begining & ending) from the string");
console.log("Orignal string :  '" + originalString + "'");
console.log("Orignal string after trim:  '" + originalString.trim() + "'");

//6. remove all the spaces from the string ==> string.replace(/[exp]/g, newChar
console.log("6. remove all the spaces from the string");
let stringWithoutSapces: string = originalString.replace(/ /g, "");
console.log(stringWithoutSapces);

//7. remove all the alphabet from the string
console.log("//7. remove all the alphabet from the string");
let stringWithoutAlpabet: string = originalString.replace(/[a-zA-Z]/g, "");
console.log(stringWithoutAlpabet);

//8. remove all the numbers from the string
console.log("//8. remove all the numbers from the string");
let stringWithoutNumbers: string = originalString.replace(/[0-9]/g, "");
console.log(stringWithoutNumbers);

//9. remove all the special character from the string
console.log("//9. remove all the special characters from the string");
let stringWithoutSpecialChars: string = originalString.replace(/[^a-zA-Z0-9]/g, "");
console.log(stringWithoutSpecialChars);

//10. convert the string into uppercase ==> string.toUpperCase()
console.log("//10. convert the string into uppercase");
let upperCaseString: string = originalString.toUpperCase();
console.log(upperCaseString);

//11. convert the string into lowercase ==> string.toLowerCase()
console.log("//11. convert the string into lowercase");
let lowerCaseString: string = originalString.toLowerCase();
console.log(lowerCaseString);

//12. Extract specific part of the string based on the starting and ending index ==> string.substring(startIndex, endIndex+1)
console.log("12.Extract specific part of the string based on the starting and ending index");
let username: String = originalString.substring(12, 17);
console.log("username : " + username);
let password: String = originalString.substring(31);
console.log("password : " + password);

//13. Extract the specific part of the string from the dynamic text ==> string.split(delimiter) ==> string[]
console.log("13. Extract the specific part of the string from the dynamic text");
let splittedValues: string[] = originalString.split(" ");
console.log(splittedValues[3]);
console.log(splittedValues[7]);

// deepak joining typescript training session in the bharath tech accademy

let stringToSplit: string = "deepak joining typescript training session in the bharath tech accademy";
let splittedString: string[] = stringToSplit.split(" ");
console.log(splittedString);
let reverseStrings: string = "";

for (let i = splittedString.length - 1; i >= 0; i--) {
    reverseStrings += splittedString[i] + " "
}
console.log(reverseStrings)

//14. Compare two different strings
//=== operator for strict Equality (compares both value and type)(case sensitive)
//== operator for loose Equality (compares only value)(case sensitive)
//includes() method for Substring check(case sensitive)
// startsWith() and endsWith() methods for Prefix and Suffix check(case sensitive)
console.log("14. Compare two different strings");
let string1: string = "Hello World!";
let string2: string = "hello world!";
console.log("Using === operator : " + (string1 === string2));
console.log("Using == operator : " + (string1 == string2));

let String3: string = "100";
let numberValue: number = 100;
console.log("Comparing string and number using === operator : " + (String3 === numberValue));
console.log("Comparing string and number using == operator : " + (String3 == numberValue));

let String4: string = "TypeScript";
console.log("Checking if String4 includes 'Type' : " + String4.includes("Type"));
console.log("Checking if String4 includes 'type' : " + String4.includes("type"))
console.log("Checking if String4 startsWith 'Type' : " + String4.startsWith("Type"))
console.log("Checking if String4 startsWith 'Script' : " + String4.endsWith("Script"))

//15. Data Conversion
console.log("15. Data Conversion")

//converting other data types to string
let stdCode: number = 4444;
let phone: number = 786544254;
let stdCodeString = String(stdCode);
console.log(stdCodeString + phone);

//converting string to other data types
let balance: string = "Account balance is 9,999.99 rupees";
balance = balance.replace(/[^0-9.]/g, "");
let bal: number = parseFloat(balance)
console.log(bal > 10000)
