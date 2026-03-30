import { expect, test } from '@playwright/test'

// test.describe refers group of tests releated to particular feature
//test refer individual test
test.describe("Group 1 test", async () => {
    test("Group 1 test 1", { tag: '@sanity' }, async () => {
        console.log("Group 1 test 1 -- executing")
    })

    test("Group 1 test 2", { tag: '@smoke' }, async () => {
        console.log("Group 1 test 2 -- executing")
    })

})


