// tests/saucedemo/users.spec.ts
import { test, expect } from '@playwright/test';

const BASE = 'https://www.saucedemo.com/';

// users to test
const users = [
  'standard_user',
  'locked_out_user',
  'problem_user',
  'performance_glitch_user',
  'error_user',
  'visual_user'
];

const PASSWORD = 'secret_sauce';

// Reusable login helper
async function login(page, username: string) {
  await page.goto(BASE);
  await expect(page).toHaveTitle('Swag Labs');
  await page.locator('#user-name').fill(username);
  await page.locator('#password').fill(PASSWORD);
  await page.locator('#login-button').click();
}

test.describe('Sauce Demo - user matrix', () => {
  for (const username of users) {
    test(`${username}`, async ({ page }, testInfo) => {
      if (username === 'performance_glitch_user') {
        testInfo.setTimeout(60_000);
      }

      // perform login
      await login(page, username);

      if (username === 'locked_out_user') {
        await expect(page.locator('[data-test="error"]')).toBeVisible();
        await expect(page.locator('[data-test="error"]')).toContainText(/locked out/i);
        await expect(page).toHaveURL(BASE);
        return;
      }

      if (username === 'standard_user') {
        await expect(page).toHaveURL(/inventory.html|inventory/);
        await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
        return;
      }

      if (username === 'performance_glitch_user') {
        await expect(page.locator('[data-test="inventory-container"]')).toBeVisible({ timeout: 45_000 });
        return;
      }

      if (username === 'problem_user') {
        await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
        const broken = await page.locator('.inventory_item_img img').first().evaluate((img: HTMLImageElement) => !img || (img.naturalWidth === 0));
        if (broken) {
          test.info().annotations.push({ type: 'warning', description: 'Detected broken product image for problem_user' });
        }
        return;
      }

      if (username === 'error_user') {
        const errorBanner = page.locator('[data-test="error"]');
        if (await errorBanner.count() > 0 && await errorBanner.isVisible()) {
          test.info().annotations.push({ type: 'info', description: 'error_user produced error banner' });
        } else {
          await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
        }
        return;
      }

      if (username === 'visual_user') {
        await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
        await page.screenshot({ path: `screenshots/${username}-inventory.png`, fullPage: true });
        return;
      }

      await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
    });
  }
});
