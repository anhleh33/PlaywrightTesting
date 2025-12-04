import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

test.describe("Login in Dev lab", () => {
    test.beforeEach("Loading login page login", async({page}) => {
        await page.goto('https://dkq832w8boiiy.cloudfront.net/#/login')
        await expect(page.locator('body > app-root > app-sign-in > div > div.min-h-dvh.flex.items-center.m-auto.logo_login > div > div > div.flex.items-center.gap-10.flex-col > img'))
            .toBeVisible()
        await expect(page.locator('body > app-root > app-sign-in > div > div.w-\[60rem\].bg-cover.bg-no-repeat.h-screen.form_login_mb.hidden.sm\:block')).toBeVisible()
        await expect(page.locator('body > app-root > app-sign-in > div > div.min-h-dvh.flex.items-center.m-auto.logo_login > div > div > form > div:nth-child(1) > input')).toBeVisible()
        await expect(page.locator('body > app-root > app-sign-in > div > div.min-h-dvh.flex.items-center.m-auto.logo_login > div > div > form > div.flex.flex-col.gap-1.hide_input_reveal > p-iconfield > input')).toBeVisible()
        await expect(page.locator('body > app-root > app-sign-in > div > div.min-h-dvh.flex.items-center.m-auto.logo_login > div > div > div.w-full.pt-4.flex.flex-col.items-center.justify-center > app-button:nth-child(1) > p-button > button')).toBeVisible()
        await expect(page.locator('body > app-root > app-sign-in > div > div.min-h-dvh.flex.items-center.m-auto.logo_login > div > div > div.w-full.pt-4.flex.flex-col.items-center.justify-center > app-button.w-full.add-border > p-button > button > span')).toBeVisible()
    })

    test('Login as a foreman', async({page}) => {
        
    })
})