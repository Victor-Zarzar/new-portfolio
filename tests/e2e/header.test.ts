import { expect, test } from "@playwright/test";

test.describe("contact page", () => {
  test("should render contact form fields", async ({ page }) => {
    await page.goto("/contact");

    await expect(page.locator("form")).toBeVisible();

    await expect(page.getByRole("textbox", { name: /name/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /email/i })).toBeVisible();
    await expect(page.getByRole("textbox", { name: /subject/i })).toBeVisible();

    const messageField = page
      .getByRole("textbox", { name: /message/i })
      .or(page.locator("textarea"));

    await expect(messageField).toBeVisible();

    await expect(
      page.getByRole("button", { name: /send|submit|contact/i }),
    ).toBeVisible();
  });
});
