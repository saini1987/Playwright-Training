/*========================================================

Assertion: Default method provided by playwright to compare the expected results vs actual results.

2 Types of Assertions:
1. Hard Assertions: If the assertion fails, the test will stop executing and will be marked as failed.
2. Soft Assertions: If the assertion fails, the test will continue executing and will be marked as failed at the end of the test.

syntax of Hard Assertion:
expect(actual).toBe(expected);

syntax of Soft Assertion:
expect.soft(actual).toBe(expected);

========================================================*/

import { test, expect } from '@playwright/test';

test('xpath selector', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=3FC4E458A560171BFBB5998363783C57');
    //Syntax 1: //tagname[@attribute='attribute value']
    page.locator("//img[@alt='ParaBank']");

    expect(page.locator("//img[@alt='ParaBank']")).toBeVisible();
    expect.soft(page.locator("//img[@alt='ParaBank']")).toHaveAttribute('alt', 'ParaBank');
});
