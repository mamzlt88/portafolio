import { test, expect } from '@playwright/test';

const HOME = '/portafolio/';
const ABOUT = '/portafolio/#/about';

test.describe('Responsive — mobile (390px)', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('landing stage fits within viewport width', async ({ page }) => {
    await page.goto(HOME);
    const stage = page.locator('[data-name="Landing"]');
    await expect(stage).toBeVisible();
    const box = await stage.boundingBox();
    expect(box!.width).toBeLessThanOrEqual(390);
  });

  test('Projects button is tappable (sufficient touch target)', async ({ page }) => {
    await page.goto(HOME);
    const btn = page.getByRole('button', { name: 'Projects' });
    await expect(btn).toBeVisible();
    const box = await btn.boundingBox();
    expect(box!.height).toBeGreaterThanOrEqual(24);
  });

  test('Projects overlay shows mobile list layout', async ({ page }) => {
    await page.goto(HOME);
    await page.getByRole('button', { name: 'Projects' }).click();
    await expect(page.locator('text=View case study').first()).toBeVisible({ timeout: 3000 });
  });

  test('no horizontal scroll on landing page', async ({ page }) => {
    await page.goto(HOME);
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(392);
  });

  test('no horizontal scroll on about page', async ({ page }) => {
    await page.goto(ABOUT);
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(392);
  });
});

test.describe('Responsive — tablet (768px)', () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test('landing renders without overflow', async ({ page }) => {
    await page.goto(HOME);
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(770);
  });

  test('About page bio text is visible', async ({ page }) => {
    await page.goto(ABOUT);
    await expect(page.locator('text=Venezuelan designer')).toBeVisible();
  });
});
