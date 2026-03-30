import { expect, test } from '@playwright/test'

// test.describe refers group of tests releated to particular feature
//test refer individual test
test.describe("Group 1 Tests", async () => {
    test("Group 1 Tests 1", async () => {
        console.log("Group 1 Tests 1 -- executing")
    })

    test("Group 1 Tests 2", async () => {
        console.log("Group 1 Tests 2 -- executing")
    })

})


test.describe("Group 2 Tests", async () => {
    test("Group 2 Tests 1", async () => {
        console.log("Group 2 Tests 1 -- executing")
    })

    test("Group 2 Tests 2", async () => {
        console.log("Group 2 Tests 2 -- executing")
    })

})

//Global hooks
test.beforeAll(async () => {
    console.log("****Global hooks before all : This runs once before all test cases***")
})

test.afterAll(async () => {
    console.log("****Global hooks after all : This runs once after all test cases***")
})

test.beforeEach(async () => {
    console.log("---Global hooks before each : This runs once before each test cases***")
})

test.afterEach(async () => {
    console.log("---Global hooks after each : This runs once after each test cases***")
})