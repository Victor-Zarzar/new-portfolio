import { expect, test } from "@playwright/test";

test.describe("I18n", () => {
  test.describe("Language Switching", () => {
    test("should switch language using URL on homepage", async ({ page }) => {
      await page.goto("/en");

      await expect(page.locator("html")).toHaveAttribute("lang", "en");

      await page.goto("/pt");

      await expect(page.locator("html")).toHaveAttribute("lang", "pt");
    });

    test("should switch language using URL on about page", async ({ page }) => {
      await page.goto("/en/about");

      await expect(page.locator("html")).toHaveAttribute("lang", "en");

      await page.goto("/pt/about");

      await expect(page.locator("html")).toHaveAttribute("lang", "pt");
    });
  });
});
