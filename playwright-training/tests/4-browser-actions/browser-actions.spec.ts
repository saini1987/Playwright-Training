import { test, expect, chromium } from '@playwright/test';

test('Browser actions - Open and Close Browser', async () => {

    // Launch the browser engine (chrome browser)
    const browserEngine = await chromium.launch({ channel: 'chrome', headless: false });

    // Launch the browser context or incognito window from the browser engine
    const browserContext = await browserEngine.newContext();

    //Clear all the cookies before beginning the execution.
    await browserContext.clearCookies();

    // Launch a new tab or page within the browser context
    const page = await browserContext.newPage();

    // Maximize the browser window to a specific size (e.g., 1920x1080)
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Enter URL://https://www.google.com and launch the google application.
    await page.goto('https://www.google.com/');

    // Verify application launched by using the title of the application.
    await expect(page).toHaveTitle('Google');

    // Locate sign in button and take screenshot.
    const signInButton = page.locator('text=Sign in');
    await signInButton.screenshot({ path: 'screenshots/sign-in-button.png' });

    // Launch a new application within the same tab or page by using the url: https://playwright.dev/.
    await page.goto('https://playwright.dev/');

    // Take  a screenshot of the entire window.
    await page.screenshot({ path: 'screenshots/playwright-homepage.png', fullPage: true });
    

    // Go back to the previous Google application.
    await page.goBack();

    // Move forward to the Playwright application.
    await page.goForward();

    // Refresh the current application.
    await page.reload();

    //Launch the new tab within the same browser.
    const newPage = await browserContext.newPage();

    //Launch the new application with the url: https://www.selenium.dev/.
    await newPage.goto('https://www.selenium.dev/');

    // Go back to the previous application available in the previous tab.
    await page.bringToFront();

    // Get the current brower URL.
    const currentURL = page.url();
    console.log('Current URL:', currentURL);

    // Close the current page.
    await page.close();

    //Close all pages ot tabs.
    await browserEngine.close();

});
