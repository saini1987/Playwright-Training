import { Page } from "@playwright/test";
import loginpage from "../page-elements/home-page-elements.json";
import { WebCommons } from "../../commons/ui/web-commons";

export class HomePageSteps {

    page: Page;
    web: WebCommons;
    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    // Method to verify home page is displayed
    async verifyHomePageIsDisplayed() {
        await this.web.isElementVisible(loginpage.applicationHubLink);
    }

    // Method to click on profile icon is displayed
    async clickProfileIcon() {
        await this.web.clickElement(loginpage.profileLink);
    }

    // Method to click logout button is displayed
    async clickLogoutButton() {
        await this.web.clickElement(loginpage.logoutLink);
    }
}

export default HomePageSteps;