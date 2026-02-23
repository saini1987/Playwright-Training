// Asynchronus function with promise that returns either resolve or reject

function sampleAsyncFunction(): Promise<string> {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
            resolve(`Success! the random number is ${randomNumber}`);
        } else {
            reject(new Error(`Failure! the random number is ${randomNumber}`));
        }
    });
};

// calling the async function and handling the promise
async function executeTest(): Promise<void> {
const result: string = await sampleAsyncFunction();
console.log(result)
}

// call the async function to see the result
executeTest();
