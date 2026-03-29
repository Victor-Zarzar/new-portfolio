import { expect, test } from "@playwright/test";

const routes = ["/", "/about", "/contact", "/projects", "/privacypolicy"];

test.describe("static pages", () => {
  for (const route of routes) {
    test(`should load ${route}`, async ({ page }) => {
      await page.goto(route);

      if (route === "/") {
        await expect(page).toHaveURL(/\/(en|pt|es)$/);
      } else {
        await expect(page).toHaveURL(new RegExp(`/[a-zA-Z-]+${route}$`));
      }

      await expect(page).toHaveTitle(/victor|portfolio/i);
    });
  }
});
