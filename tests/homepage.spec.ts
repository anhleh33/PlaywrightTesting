import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

test.describe("Homepage Feature", () => {
    test.beforeEach(async ({ page }) => {
        console.log("Running Lambdatest Playground")
        await page.goto("https://ecommerce-playground.lambdatest.io/")
    });

    test("Homepage loads correctly", async ({ page }) => {
        await expect(page.url()).toBe("https://ecommerce-playground.lambdatest.io/")
        await expect(page).toHaveTitle("Your Store")

        await expect(page.locator("#search")).toBeVisible()
        await expect(page.locator("#nav")).toBeVisible()
    })

    test("Has title", async ({ page }) => {

    })
})
