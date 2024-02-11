import { By } from "selenium-webdriver";
import BasePage from "./base-page";
import BasePageSteps from "../steps/base-page-steps";

export class HomePage extends BasePage{
    protected logo = By.className("octicon octicon-mark-github");
    protected searchBar = By.className("flex-1");
    protected baseMethods: BasePageSteps;
}