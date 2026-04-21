import { test, expect } from '@playwright/test';

const HOME = '/portafolio/';
const ABOUT = '/portafolio/#/about';

test.describe('Landing page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(HOME);
  });

  test('renders the landing stage with color grid', async ({ page }) => {
    await expect(page.locator('[data-name="Landing"]')).toBeVisible();
  });

  test('shows Projects and About Me buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Projects' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'About Me' })).toBeVisible();
  });

  test('color toggle switches between color and B&W mode', async ({ page }) => {
    const toggle = page.getByRole('button', { name: 'Toggle color mode' });
    await expect(toggle).toContainText('ON');
    await toggle.click();
    await expect(toggle).toContainText('OFF');
    await toggle.click();
    await expect(toggle).toContainText('ON');
  });

  test('opens and closes Projects overlay', async ({ page }) => {
    await page.getByRole('button', { name: 'Projects' }).click();
    const overlay = page.locator('[data-name="ProjectsOverlay"]');
    await expect(overlay).toBeVisible();
    await page.getByRole('button', { name: 'Close projects' }).click();
    await expect(overlay).not.toBeVisible();
  });

  test('navigates to About page', async ({ page }) => {
    await page.getByRole('button', { name: 'About Me' }).click();
    await expect(page).toHaveURL(/#\/about/, { timeout: 10000 });
  });
});
