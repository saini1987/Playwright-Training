// An Array is a collection of multiple values.

// 1. Creating an array
console.log("Creating an array:");
let fruits: string[] = ["apple", "banana", "cherry"];
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(fruits);
console.log(numbers);

// 2. Accessing array elements
console.log("Accessing array elements:");
console.log(fruits[1]);
console.log(numbers[2]);


// 3. Adding additional values to the existing array at the end
console.log("Adding additional values to the existing array at the end:");
numbers.push(6);
console.log(numbers);

// 4. Removing last element from the existing array
console.log("Removing last element from the existing array:");
numbers.pop();
console.log(numbers);

//5.  Adding additional values to the existing array at the beginning
console.log("Adding additional values to the existing array at the beginning:");
numbers.unshift(0);
console.log(numbers);

// 6. Removing first element from the existing array
console.log("Removing first element from the existing array:");
numbers.shift();
console.log(numbers);

// 7. Add or remove one or more values within the array from a specific index
console.log("Add or remove one or more values within the array from a specific index:");
numbers.splice(2,2,2.5,3.5) //splice(index, numberOfvaluesToBeRemoved, values to be added)
console.log(numbers);

// 8. Creating a new array by extrating a portion of an existing array
console.log("Creating a new array by extrating a portion of an existing array:");
let extractedNumbers = numbers.slice(2, 4); //slice(startIndex, endIndex+1)
console.log(extractedNumbers);

