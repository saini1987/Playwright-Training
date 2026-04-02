import { test, expect } from '@playwright/test';

test('Automate Alerts', async ({ page }) => {

    //1. Enter URL and Launch the application (https://demoqa.com/alerts) 
    await page.goto("https://demoqa.com/alerts");
    console.log("Application is launched successfully");

    //2. Locate Alert buttons to trigger the alerts 
    const infoAlertButton = page.locator("button#alertButton");
    const confirmAlertButton = page.locator("button#confirmButton");
    const promptAlertButton = page.locator("button#promtButton");

    //3. Click on the information alert and copy the alert message and then select OK button
    page.once('dialog', async dialog => {
        //copy  and print the alert message
        console.log("Information Alert message: " + await dialog.message());
        //click on the OK button
        await dialog.accept();
    });

    //trigger the information alert
    await infoAlertButton.click();

    //wait for the 2 sec
    await page.waitForTimeout(2000);


    //4. Click on the Confirmation alert, copy the alert message, and select the Cancel button.
    page.once('dialog', async dialog => {
        //copy  and print the alert message
        console.log("Confirmation Alert message: " + await dialog.message());
        //click on the Cancel button
        await dialog.dismiss();
    });

    //trigger the confirmation alert 
    await confirmAlertButton.click();

    //wait for the 2 sec
    await page.waitForTimeout(2000);

    //5. Click on the prompt alert. Copy the alert message. Enter text. Then Select OK button.
    page.once('dialog', async dialog => {
        //copy  and print the alert message
        console.log("Prompt Alert message: " + await dialog.message());
        //Enter text in the prompt alert and click on the Cancel button
        await dialog.accept("Playwright Training");
    });

    //trigger the prompt alert
    await promptAlertButton.click();

    //wait for the 2 sec
    await page.waitForTimeout(2000);

});