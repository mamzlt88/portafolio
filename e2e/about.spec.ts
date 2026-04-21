import { test, expect } from '@playwright/test';

const ABOUT = '/portafolio/#/about';

async function scrollToId(page: any, id: string) {
  await page.evaluate((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'instant' });
  }, id);
  await page.waitForTimeout(300);
}

test.describe('About page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(ABOUT);
  });

  test('renders About Me section', async ({ page }) => {
    await expect(page.locator('#about-me')).toBeVisible();
    await expect(page.locator('text=About Me').first()).toBeVisible();
  });

  test('renders bio text', async ({ page }) => {
    await expect(page.locator('text=Venezuelan designer')).toBeVisible();
  });

  test('shows navigation pills', async ({ page }) => {
    await expect(page.locator('text=About Me').first()).toBeVisible();
    await expect(page.locator('text=Timeline').first()).toBeVisible();
  });

  test('close button navigates back to landing', async ({ page }) => {
    const closeBtn = page.locator('div.cursor-pointer').filter({
      has: page.locator('svg path[d="M18 6L6 18"]'),
    }).first();
    await closeBtn.click();
    await expect(page).toHaveURL(/portafolio\/?(?:#\/?)?$/, { timeout: 10000 });
  });

  test('Details section renders on scroll', async ({ page }) => {
    await scrollToId(page, 'details');
    await expect(page.locator('text=Details').first()).toBeVisible();
  });

  test('renders stat cards', async ({ page }) => {
    await scrollToId(page, 'details');
    await expect(page.locator('text=10+').first()).toBeVisible();
    await expect(page.locator('text=5 years').first()).toBeVisible();
    await expect(page.locator('text=8 years').first()).toBeVisible();
  });

  test('Timeline section renders', async ({ page }) => {
    await scrollToId(page, 'timeline');
    // Exact match to avoid strict-mode collision with "ESTIMATES & TIMELINES"
    await expect(page.getByText('Timelines', { exact: true })).toBeVisible({ timeout: 5000 });
    await expect(page.locator('text=Endava').first()).toBeVisible();
  });
});

test.describe('About page — mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test.beforeEach(async ({ page }) => {
    await page.goto(ABOUT);
  });

  test('bio text is readable — left edge within viewport', async ({ page }) => {
    const bio = page.locator('text=Venezuelan designer');
    await expect(bio).toBeVisible();
    const box = await bio.boundingBox();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(390);
  });

  test('shows mobile skills section with category labels', async ({ page }) => {
    await scrollToId(page, 'skills');
    await expect(page.getByText('Design Tools', { exact: true })).toBeVisible({ timeout: 5000 });
    await expect(page.getByText('UX Design', { exact: true })).toBeVisible();
    await expect(page.getByText('Strategy', { exact: true })).toBeVisible();
  });
});
