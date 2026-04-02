import { expect, test } from "@playwright/test";

test.describe("Header", () => {
  test("should render social buttons with correct links", async ({ page }) => {
    await page.goto("/en");

    const header = page.locator("header");
    const githubButton = header.getByRole("link", { name: /github/i });
    const linkedinButton = header.getByRole("link", { name: /linkedin/i });

    await expect(githubButton).toBeVisible();
    await expect(linkedinButton).toBeVisible();

    await expect(githubButton).toHaveAttribute("href", /github\.com/i);
    await expect(linkedinButton).toHaveAttribute("href", /linkedin\.com/i);
  });

  test("should open github link in new tab", async ({ page, context }) => {
    await page.goto("/en");

    const acceptCookies = page.getByRole("button", { name: /accept/i });

    if (await acceptCookies.isVisible().catch(() => false)) {
      await acceptCookies.click();
    }

    const header = page.locator("header");
    const githubButton = header.getByRole("link", { name: /github/i });

    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      githubButton.click(),
    ]);

    await newPage.waitForLoadState();
    await expect(newPage).toHaveURL(/github\.com/i);
  });
});
