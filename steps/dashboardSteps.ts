import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../config/pageFixture";
import { APP_URL, CUSTOM_DUCATI_SCRAMBLER_PAGE } from "../resources/appConstants";

setDefaultTimeout(60 * 1000 * 2)

Given('I am on the Ducati Scrambler website', async function () {
    await fixture.page.goto(APP_URL);
})

When('I click {string}', async function (buttonText) {
    const domText = buttonText.charAt(0) + buttonText.substring(1).toLowerCase();
    await fixture.page.locator(`//main[contains(@class,'xl:hidden')]/descendant::a[contains(text(),'${domText}')]`).dispatchEvent('click');
});


Then('I should see the “Create Your Custom Scrambler Ducati” page', async function () {
    await expect(fixture.page).toHaveURL(CUSTOM_DUCATI_SCRAMBLER_PAGE);
});