import { expect, test } from '@playwright/test'

// test.only ==> It will execute only particular test cases by skipping all other test cases.
// test.skip() ==> It will skip the particular test case and execute all other test cases.
// test.fail() ==> I am expecting particular test case to be failed. Highlight this test case if it is not failed.
// test.fixme() ==> I am sure this test case is not working.Please ignore even if it is failed.
// test.slow() ==> playwright will consider that there is loading issue. and it may be slowness. so using slow() method is will increase the slowness 3X times from normal time


test.describe("Group 1 Tests", async () => {
    // test.only("Group 1 Tests 1", async () => {
    //     console.log("Group 1 Tests 1 -- executing")
    // })

    // test.fail("Group 1 Tests 2", async () => {
    //     console.log("Group 1 Tests 2 -- executing")
    //     expect(1).toBe(2)
    // })


    // test.skip("Group 1 Tests 3", async () => {
    //     console.log("Group 1 Tests 3 -- executing")
    // })


    // test.fixme("Group 1 Tests 4", async () => {
    //     console.log("Group 1 Tests 4 -- executing")
    //     expect(1).toBe(2);
    // })

    test("Group 1 Tests 5", async () => {
        test.slow()
        console.log("Group 1 Tests 5 -- executing")
        await new Promise(resolve => setTimeout(resolve, 40000)); // wait for 40 sec
    })


    // if test will take even more than 90 sec
    test("Group 1 Tests 6", async () => {
        test.setTimeout(180000)
        console.log("Group 1 Tests 6 -- executing")
        await new Promise(resolve => setTimeout(resolve, 100000)); // wait for 100 sec
    })

    test("Group 1 Tests 7", async () => {
        console.log("Group 1 Tests 7 -- executing")
    })

})