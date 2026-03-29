import { expect, test } from "@playwright/test";

test.describe("home page", () => {
  test("should load the home page", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveURL(/\/(en|pt|es)$/);
    await expect(page).toHaveTitle(/victor|portfolio/i);
  });

  test("should render main heading", async ({ page }) => {
    await page.goto("/");

    const heading = page.getByRole("heading").first();
    await expect(heading).toBeVisible();
  });
});
