import { test, expect } from '@playwright/test';
import LoginPageSteps from '../../page-objects/page-steps/login-page-steps';
import HomePageSteps from '../../page-objects/page-steps/home-page-steps';
import CookiesPageSteps from '../../page-objects/page-steps/cookies-page-steps';

let loginpage: LoginPageSteps;
let homepage: HomePageSteps;
let cookiespage: CookiesPageSteps;

test.describe('Application Tests', () => {

    test.beforeEach(async ({ page }) => {
        loginpage = new LoginPageSteps(page);
        homepage = new HomePageSteps(page);
        cookiespage = new CookiesPageSteps(page);
    });

    test('Test Case 1: verify Cookies pop up is launched.', async () => {
        await loginpage.launchApplication();
        await cookiespage.verifyCookiesPageIsDisplayed();
    });

    test('Test Case 2: verify Cookies pop up content.', async () => {
        await loginpage.launchApplication();
        await cookiespage.verifyCookiesPageIsDisplayed();
        await cookiespage.verifyCookiesContent();
    });

    test('Test Case 3: verify Cookies pop up logos.', async () => {
        await loginpage.launchApplication();
        await cookiespage.verifyCookiesPageIsDisplayed();
        await cookiespage.verifyCookiesPopUpLogos();
    });

    test('Test Case 4: verify Cookies pop up selection buttons.', async () => {
        await loginpage.launchApplication();
        await cookiespage.verifyCookiesPageIsDisplayed();
        await cookiespage.verifyCookiesPopUpSelectionButtons();
    });

    test('Test Case 5: verify Cookies pop up switch buttons.', async () => {
        await loginpage.launchApplication();
        await cookiespage.verifyCookiesPageIsDisplayed();
        await cookiespage.verifyCookiesPopUpSwitchButtons();
    });

    test('Test Case 6: verify show details feature in Cookies pop up.', async () => {
        await loginpage.launchApplication();
        await cookiespage.verifyCookiesPageIsDisplayed();
        await cookiespage.verifyShowDetailsLinkCookiesPopup();
        await cookiespage.clickShowDetailsLinkCookiesPopup();
        await cookiespage.verifyExpandedViewOfCookiesPopup();
    });

    test('Test Case 7: verify Cookies Pop up can be closed successfully.', async () => {
        await loginpage.launchApplication();
        await cookiespage.verifyCookiesPageIsDisplayed();
        await cookiespage.verifyCookiesPopUpSelectionButtons
        await cookiespage.clickCookiesSelectionButton("Allow All");
        await cookiespage.verifyCookiesPopupIsClosed();
    });


    test('Test Case 8: verify user is able to login successfully with valid credentials.', async () => {
        await loginpage.launchApplication();
        await cookiespage.verifyCookiesPageIsDisplayed();
        await cookiespage.verifyCookiesPopUpSelectionButtons
        await cookiespage.clickCookiesSelectionButton("Allow All");
        await cookiespage.verifyCookiesPopupIsClosed();
        await loginpage.verifyLoginPageIsDisplayed();
        await loginpage.enterUsernameAndPassword("", "");
        await loginpage.clickLoginButton();
        await homepage.verifyHomePageIsDisplayed();
    });

    test('Test Case 9: verify error message is displayed for invalid login attempt.', async () => {
        await loginpage.launchApplication();
        await cookiespage.verifyCookiesPageIsDisplayed();
        await cookiespage.verifyCookiesPopUpSelectionButtons
        await cookiespage.clickCookiesSelectionButton("Allow All");
        await cookiespage.verifyCookiesPopupIsClosed();
        await loginpage.verifyLoginPageIsDisplayed();
        await loginpage.enterUsernameAndPassword("", "");
        await loginpage.clickLoginButton();
        await loginpage.verifyInvalidLoginErrorMessageIsDisplayed();
    });


    test('Test Case 10: verify forgot password functionality within the login page.', async () => {
        await loginpage.launchApplication();
        await cookiespage.verifyCookiesPageIsDisplayed();
        await cookiespage.verifyCookiesPopUpSelectionButtons
        await cookiespage.clickCookiesSelectionButton("Allow All");
        await cookiespage.verifyCookiesPopupIsClosed();
        await loginpage.verifyLoginPageIsDisplayed();
        await loginpage.clickForgotPasswordLink();
        await loginpage.verifyForgotPasswordConfirmationMessageIsDisplayed();
    });

    test('Test Case 11: verify social media login option within the login page.', async () => {
        await loginpage.launchApplication();
        await cookiespage.verifyCookiesPageIsDisplayed();
        await cookiespage.verifyCookiesPopUpSelectionButtons
        await cookiespage.clickCookiesSelectionButton("Allow All");
        await cookiespage.verifyCookiesPopupIsClosed();
        await loginpage.verifyLoginPageIsDisplayed();
        await loginpage.verifySocialMediaLoginOptionsAreDisplayed();
    });

    test('Test Case 12: verify logout functionality within the login page.', async () => {
        await loginpage.launchApplication();
        await cookiespage.verifyCookiesPageIsDisplayed();
        await cookiespage.verifyCookiesPopUpSelectionButtons
        await cookiespage.clickCookiesSelectionButton("Allow All");
        await cookiespage.verifyCookiesPopupIsClosed();
        await loginpage.verifyLoginPageIsDisplayed();
        await loginpage.enterUsernameAndPassword("", "");
        await loginpage.clickLoginButton();
        await homepage.verifyHomePageIsDisplayed();
        await homepage.clickProfileIcon();
        await homepage.clickLogoutButton();
        await loginpage.verifyLoginPageIsDisplayed();
    });

});
