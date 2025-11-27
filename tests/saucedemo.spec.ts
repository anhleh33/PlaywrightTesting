import { test, expect } from "@playwright/test";

test.describe("Swag Lab", () => {
    test("Loading login form", async({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await expect(page).toHaveTitle("Swag Labs")
        await expect(page.locator("#root > div > div.login_logo")).toHaveText("Swag Labs")

        let username = page.locator("#user-name")
        let pwd = page.locator("#password")
        let loginbtn = page.locator("#login-button")
        await expect(username).toBeVisible()
        await expect(pwd).toBeVisible()
        await expect(loginbtn).toBeVisible()
    });

    test("Log in with standard user", async({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator("#user-name").fill("standard_user")
        await page.locator("#password").fill("secret_sauce")
        await page.locator("#login-button").click()

        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
        await expect(page.locator('[class="inventory_container"]')).toBeVisible();
    });

    test("Log in with locked-out user", async({page}) => {
        await page.goto('https://www.saucedemo.com/')
        await page.locator("#user-name").fill("locked_out_user")
        await page.locator("#password").fill("secret_sauce")
        await page.locator("#login-button").click()
        
        let msg = page.locator('[data-test="error"]')
        await expect(msg).toBeVisible()
        await expect(msg).toContainText("Sorry, this user has been locked out.")
    });
})