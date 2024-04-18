import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByLabel("Consent", { exact: true }).click();
  await page.getByRole("link", { name: "Sign In" }).click();
  await page.getByRole("button", { name: "Sign In" }).click();
});
