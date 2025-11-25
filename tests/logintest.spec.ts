import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.getByPlaceholder('Email').fill('test@example.com');
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('https://example.com/dashboard');
  await expect(page.getByText('Welcome')).toBeVisible();
});
