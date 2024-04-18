import { test, expect } from "@playwright/test";

// Empty input
test("test", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByLabel("Consent", { exact: true }).click();
  await page.getByRole("link", { name: "Sign In" }).click();
  await page.getByRole("button", { name: "Sign In" }).click();
});

// Invalid email and valid pass
test("test2", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByLabel("Consent", { exact: true }).click();
  await page.getByRole("link", { name: "Sign In" }).click();
  await page.getByLabel("Email", { exact: true }).click();
  await page.getByLabel("Email", { exact: true }).fill("abc@");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("randompass");
  await page.getByRole("button", { name: "Sign In" }).click();
});

// Valid email and valid pass (non-existing account)
test("test3", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByLabel("Consent", { exact: true }).click();
  await page.getByRole("link", { name: "Sign In" }).click();
  await page.getByLabel("Email", { exact: true }).click();
  await page.getByLabel("Email", { exact: true }).fill("abc@gmail.com");
  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("randompass");
  await page.getByRole("button", { name: "Sign In" }).click();
});

// Empty forgot pass
test("test4", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByLabel("Consent", { exact: true }).click();
  await page.getByRole("link", { name: "Sign In" }).click();
  await page.getByRole("link", { name: "Forgot Your Password?" }).click();
  await page.getByRole("button", { name: "Reset My Password" }).click();
});

// Invalid email in forgot pass
test("test5", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByLabel("Consent", { exact: true }).click();
  await page.getByRole("link", { name: "Sign In" }).click();
  await page.getByRole("link", { name: "Forgot Your Password?" }).click();
  await page.getByLabel("Email", { exact: true }).click();
  await page.getByLabel("Email", { exact: true }).fill("abc@");
  await page.getByRole("button", { name: "Reset My Password" }).click();
});

// Valid email in forgot pass
test("test6", async ({ page }) => {
  await page.goto("https://magento.softwaretestingboard.com/");
  await page.getByLabel("Consent", { exact: true }).click();
  await page.getByRole("link", { name: "Sign In" }).click();
  await page.getByRole("link", { name: "Forgot Your Password?" }).click();
  await page.getByLabel("Email", { exact: true }).click();
  await page.getByLabel("Email", { exact: true }).fill("abc@gmail.com");
  await page.getByRole("button", { name: "Reset My Password" }).click();
});
