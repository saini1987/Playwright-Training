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
numbers.splice(2, 2, 2.5, 3.5) //splice(index, numberOfvaluesToBeRemoved, values to be added)
console.log(numbers);

// 8. Creating a new array by extrating a portion of an existing array
console.log("Creating a new array by extrating a portion of an existing array:");
let extractedNumbers = numbers.slice(2, 4); //slice(startIndex, endIndex+1)
console.log(extractedNumbers);

// 9. Merge two or more arrays to create a new array
console.log("Merge two or more arrays to create a new array:");
let numbers1: number[] = [1, 2, 3, 4]
let numbers2: number[] = [5, 6, 7, 8]
let numbers3: number[] = [9, 10]
//let mergedArrays: number[] = numbers1.concat(numbers2, numbers3)
let mergedArrays: number[] = numbers1.concat(numbers2).concat(numbers3) // we can also use multiple concat method to merge more than 2 arrays
console.log(mergedArrays)

// 10. Finding the index of a specific value in the array
console.log("Finding the index of a specific value in the array:");
let indexOfBanana = fruits.indexOf("banana");
console.log("Index of banana : " + indexOfBanana)
let indexOfManago = fruits.indexOf("Mango")
console.log("Index of Mango : " + indexOfManago)

// 11. Iterate the values of an array.
console.log("Iterating the values of an array:");
for (let fruit of fruits) {
    console.log(fruit)
}

// 12. Reverse the values within array
console.log("Reverse the values within array:");
let num: number[] = [1, 8, 2, 10, 3, 7,4, 9, 5, 6]
console.log(num.reverse())

// 13. Sort the values within array
console.log("Sort the values within array:");
console.log(num.sort((a, b) => a - b)) // for ascending order
console.log(num.sort((a, b) => a - b).reverse())


//14. Special lambda expression in array(map --> manipulate, filter --> reduce and forEach --> iterate values)
let input: number[] = [1,2,3,4,5,6]

//map ==> get the square of each and every number
let squareNumbers : number[] = input.map(x=>x*x);
console.log(squareNumbers)

//filter ==> get the even numbers from the array
let evenNumbers: number[] = input.filter(x=>x%2===0)
console.log(evenNumbers)

//forEach ==> loop each and every value from array.
input.forEach(x=>console.log(x))