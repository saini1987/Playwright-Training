import { expect, test } from '@playwright/test'

// test.describe refers group of tests releated to particular feature
//test refer individual test
test.describe("Group 1 Tests", async () => {
    test("Group 1 Tests 1", { tag: '@sanity' }, async () => {
        console.log("Group 1 Tests 1 -- executing")
    })

    test("Group 1 Tests 2", { tag: '@smoke' }, async () => {
        console.log("Group 1 Tests 2 -- executing")
    })

})


test.describe("Group 2 Tests", async () => {
    test("Group 2 Tests 1", { tag: '@regression' }, async () => {
        console.log("Group 2 Tests 1 -- executing")
    })

    test("Group 2 Tests 2", { tag: ['@smoke', '@regression'] }, async () => {
        console.log("Group 2 Tests 2 -- executing")
    })

})

