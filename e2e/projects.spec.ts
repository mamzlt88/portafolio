import { test, expect } from '@playwright/test';

const HOME = '/portafolio/';

test.describe('Projects overlay', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOME);
    await page.getByRole('button', { name: 'Projects' }).click();
    await expect(page.locator('[data-name="ProjectsOverlay"]')).toBeVisible();
    await page.waitForTimeout(700);
  });

  test('shows Experience filter pill', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Experience' })).toBeVisible();
  });

  // On desktop the project titles are absolutely-positioned buttons inside
  // `hidden md:block`. On mobile they're in `md:hidden`. We use `:visible`
  // to always grab the one that's actually rendered at the current viewport.
  test('opens White Label case study', async ({ page }) => {
    await page.locator('button:visible').filter({ hasText: /White/i }).first().click();
    await expect(page.locator('[data-name="CaseStudy"]')).toBeVisible({ timeout: 8000 });
  });

  test('opens Trading Automation case study', async ({ page }) => {
    await page.locator('button:visible').filter({ hasText: /Trading/i }).first().click();
    await expect(page.locator('[data-name="CaseStudy"]')).toBeVisible({ timeout: 8000 });
  });

  test('opens Sports Media case study', async ({ page }) => {
    await page.locator('button:visible').filter({ hasText: /Sports/i }).first().click();
    await expect(page.locator('[data-name="CaseStudy"]')).toBeVisible({ timeout: 8000 });
  });

  test('opens Unified Health case study', async ({ page }) => {
    await page.locator('button:visible').filter({ hasText: /Process|Unification/i }).first().click();
    await expect(page.locator('[data-name="CaseStudy"]')).toBeVisible({ timeout: 8000 });
  });
});
