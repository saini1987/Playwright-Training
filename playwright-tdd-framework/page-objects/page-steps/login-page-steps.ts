import { Page } from "@playwright/test";
import loginpage from "../page-elements/login-page-elements.json";
import { WebCommons } from "../../commons/ui/web-commons";
import config from '../../config/config.json';

export class LoginPageSteps {

    page: Page;
    web: WebCommons;
    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    // Method to launch the application
    async launchApplication() {
        await this.web.launchApplication(config.QA.app.baseUrl);
    }

    // Method to verify login page is displayed
    async verifyLoginPageIsDisplayed() {
        await this.web.isElementVisible(loginpage.loginPageHeader);
    }
    // Method to enter username and password
    async enterUsernameAndPassword(username: string, password: string) {
        await this.web.typeText(loginpage.businessEmailTextBox, username);
        await this.web.typeText(loginpage.passwordTextBox, password);
    }

    //Method to click on login button
    async clickLoginButton() {
        await this.web.clickElement(loginpage.loginButton);
    }

    //Method to click on forgot password link
    async clickForgotPasswordLink() {
        await this.web.clickElement(loginpage.forgotPasswordLink);
    }

    // Method to verify forgot password confirmation message is displayed
    async verifyForgotPasswordConfirmationMessageIsDisplayed() {
        await this.web.isElementVisible(loginpage.forgotPasswordConfirmationMsg);
    }

    // Method to verify error message is displayed for invalid login
    async verifyInvalidLoginErrorMessageIsDisplayed() {
        await this.web.isElementVisible(loginpage.loginErrorMessage);
    }

    //Method to verify the social media login options within the login page
    async verifySocialMediaLoginOptionsAreDisplayed() {
        await this.web.isElementVisible(loginpage.googleIcon);
        await this.web.isElementVisible(loginpage.linkedInIcon);
    }

    // Method to click on sign up link within the login page
    async clickSignUpLink() {
        await this.web.clickElement(loginpage.signUpLink);
    }
}

export default LoginPageSteps;