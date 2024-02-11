import { By, WebElement, WebDriver, until } from "selenium-webdriver";
import { HomePage } from "../page-objects/home-page";
import BasePageSteps from "./base-page-steps";

export class HomePageSteps extends HomePage{
    constructor(driver: WebDriver) {
        super(driver);
        this.baseMethods = new BasePageSteps(driver);
    }

    async selectItem() {
        await this.baseMethods.findElementAndClick(this.searchBar);
    }
}