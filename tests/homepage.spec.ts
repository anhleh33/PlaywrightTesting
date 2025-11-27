import { test, expect } from "@playwright/test";

test.describe("Homepage Feature", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://ecommerce-playground.lambdatest.io/");
    });

    // test("Homepage loads correctly", async ({ page }) => {
    //     await expect(page).toHaveTitle("Your Store");
    //     await expect(page.locator("#search")).toBeVisible();
    // });

    test("Hover My Account menu", async ({ page }) => {
        await page.hover("a[role='button']:has-text('My account')");
        await expect(page.locator("a:has-text('Login')")).toBeVisible();
    });

    test("Navigate to Login", async ({ page }) => {
        await page.hover("a[role='button']:has-text('My account')");
        await page.click("a:has-text('Login')");
        await expect(page).toHaveURL(/login/);
    });

    test("Navigate to Register", async ({ page }) => {
        await page.hover("a[role='button']:has-text('My account')");
        await page.click("a:has-text('Register')");
        await expect(page).toHaveURL(/register/);
    });

    // test("Search for product", async ({ page }) => {
    //     const searchbar = page.locator("#search > div.search-input-group.flex-fill > div.search-input.d-flex > div.flex-fill > input[type=text]")
    //     await searchbar.fill("iPhone");
    //     await searchbar.press("Enter");

    //     const products = page.locator(".product-layout");
    //     const count = await products.count();

    //     await expect(count).toBeGreaterThan(0);
    // });

    test("Featured product can be opened", async ({ page }) => {
        const product = page.locator(".product-thumb").first();
        await product.click();
        await expect(page.locator("h1")).toBeVisible();
    });

});
