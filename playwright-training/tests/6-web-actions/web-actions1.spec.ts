import { test, expect } from '@playwright/test';

test('xpath selector', async ({ page }) => {

    // 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // 2.verify application logo is displayed
    const logo = page.locator('img.logo')
    await expect(logo).toBeVisible();
    console.log("Logo is displayed successfully")

    // 3.Verify application caption displayed as "Experience the difference"
    const caption = page.locator('p.caption')
    const expectedCaption = "Experience the difference"
    const actualCaption = await caption.textContent();
    await expect(actualCaption).toBe(expectedCaption)
    console.log("Caption is displayed successfully and verified successfully")

    // 4.Enter invalid username 
    const username = page.locator('input[name="username"]');
    await username.fill('invalidUser');
    console.log("Invalid username is entered successfully")

    // 5.Enter empty Password   
    const password = page.locator('input[name="password"]');
    await password.fill('');
    console.log("Empty password is entered successfully")

    // 6.Click on login button 
    const loginBtn = page.locator("input[value='Log In']");
    await loginBtn.click();
    console.log("Login button is clicked successfully")

    //Highlight the login button
    await loginBtn.evaluate((element) => {
        element.style.backgroundColor = 'yellow';
        element.style.border = '2px solid red';
    });

    // 7.Verify the error message "Please enter a username and password."
    const errorMessage = await page.locator('p.error')
    // const expectErrorMessage = "Please enter a username and password."
    // const actualErroeMessage = errorMessage.textContent();
    // await expect(actualErroeMessage).toBe(expectErrorMessage);
    await expect(errorMessage).toHaveText('Please enter a username and password.');
    console.log("Error message is displayed successfully and verified successfully")

    // 8.Click on admin page link
    const adminPageLink = page.locator("ul.leftmenu > li > a[href*='admin']");
    await adminPageLink.click();
    console.log("Admin page link is clicked successfully")

    // 9.select the option "soap" from dba mode radio button
    await selectDBAMode(page, 'soap');
    console.log("Option soap is selected successfully from dba mode radio button")

    // 10.Scroll to loan provider dropdown
    const loadProvider = await page.locator("#loanProvider");
    await loadProvider.scrollIntoViewIfNeeded();
    console.log("Scrolled to loan provider dropdown successfully")

    // 11.Select the option web service from the dropdown
    loadProvider.selectOption({ label: 'Web Service' });
    console.log("Option web service is selected successfully from loan provider dropdown")

    // 12.click on submit button
    const submitBtn = page.locator("input[value='Submit']");
    await submitBtn.click();
    console.log("Submit button is clicked successfully")

    // 13.verify submission is successful by validating success message
    const successMessage = page.locator('//b[text()="Settings saved successfully."]');
    await expect(successMessage).toBeVisible();
    console.log("Success message is displayed successfully")

    // 14.Click on services page link
    const serviceLink = page.locator("ul.leftmenu>li>a[href*='services']")
    await serviceLink.click();
    console.log("Service page link is clicked successfully")

    // 15.wait for service page
    const bookStoreServices = page.locator("//span[text()='Bookstore services:']");
    await expect(bookStoreServices).toBeVisible();
    console.log("Bookstore services table is displayed successfully")

    // 16.Scroll down till bookstore services table
    await bookStoreServices.scrollIntoViewIfNeeded();
    console.log("Scrolled down till bookstore services table successfully")

    // 17.get total rows of books store services table
    const rows = page.locator("//span[text()='Bookstore services:']/following-sibling::table[1]//tr");
    const totalRows = await rows.count();
    console.log("Total rows in book store services table: " + totalRows);

    // 18.get total columns of books store services table
    const columns = page.locator("//span[text()='Bookstore services:']/following-sibling::table[1]//tr[1]/td");
    const totalColumns = await columns.count();
    console.log("Total columns in book store services table: " + totalColumns);

    // 19.Print table data (row wise and column wise data)
    for (let r: number = 1; r <= totalRows; r++) {

        for (let c: number = 1; c <= totalColumns; c++) {

            const cell = page.locator(`//span[text()='Bookstore services:']/following-sibling::table[1]//tr[${r}]/td[${c}]`);
            const cellValue = await cell.textContent();
            console.log(`Row ${r} Column ${c}: ${cellValue}`);
        }
    }

});

// Reusable function to select dba mode
async function selectDBAMode(page: any, option: string) {
    const dbaMode = page.locator(`table.form>tbody>tr>td>input[value='${option}']`);
    await dbaMode.click();
}