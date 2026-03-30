import { Page } from "@playwright/test";
import cookiespage from "../page-elements/cookies-page-elements.json";
import { WebCommons } from "../../commons/ui/web-commons";

export class CookiesPageSteps {

    page: Page;
    web: WebCommons;

    constructor(page: Page) {
        this.page = page;
        this.web = new WebCommons(page);
    }

    //Method to verify cookies header is displayed
    async verifyCookiesPageIsDisplayed() {
        await this.web.isElementVisible(cookiespage.cookiesHeader);
    }

    // Method to verify the content of the cookies page
    async verifyCookiesContent() {
        await this.web.isElementVisible(cookiespage.cookiesContent);
    }

    //Method to verify the logo is displayed on the cookies page
    async verifyCookiesPopUpLogos() {
        await this.web.isElementVisible(cookiespage.creaioLogo);
        await this.web.isElementVisible(cookiespage.cookiesBotLogo);
    }

    // Method to verify all the selection buttons are displayed on the cookies page
    async verifyCookiesPopUpSelectionButtons() {
        await this.web.isElementVisible(cookiespage.allowAllBtn);
        await this.web.isElementVisible(cookiespage.allowSelectionBtn);
        await this.web.isElementVisible(cookiespage.denyBtn);
    }

    // Method to verify switch buttons are displayed on the cookies page
    async verifyCookiesPopUpSwitchButtons() {
        await this.web.isElementVisible(cookiespage.necessarySwitchBtn);
        await this.web.isElementVisible(cookiespage.preferencesSwitchBtn);
        await this.web.isElementVisible(cookiespage.statisticsSwitchBtn);
        await this.web.isElementVisible(cookiespage.marketingSwitchBtn);
    }

    // Method to verify the show details button is displayed on the cookies page
    async verifyShowDetailsLinkCookiesPopup() {
        await this.web.isElementVisible(cookiespage.showDetailsLink);
    }

    // Method to click on the show details link on the cookies page
    async clickShowDetailsLinkCookiesPopup() {
        await this.web.clickElement(cookiespage.showDetailsLink);
    }

    // Method to verify the expanded view after click on the show details link of the cookies popup is displayed
    async verifyExpandedViewOfCookiesPopup() {
        await this.web.isElementVisible(cookiespage.cookiePopupExpandedView);
    }

    //Method to click on the cookies selection button
    async clickCookiesSelectionButton(buttonName: string) {
        switch (buttonName.toLowerCase()) {
            case "allow all":
                await this.web.clickElement(cookiespage.allowAllBtn);
                break;
            case "allow selection":
                await this.web.clickElement(cookiespage.allowSelectionBtn);
                break;
            case "deny":
                await this.web.clickElement(cookiespage.denyBtn);
                break;
            default:
                throw new Error(`Button with name ${buttonName} not found on the cookies page`);
        }
    }

    // Method to verify cookies popuu is closed
    async verifyCookiesPopupIsClosed() {
        await this.web.isElementNotVisible(cookiespage.cookiesHeader);
    }

} 

export default CookiesPageSteps;