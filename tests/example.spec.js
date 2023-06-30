// @ts-check
import { test, expect } from "@playwright/test";

test("intl list format renders", async ({ page }) => {
  await page.goto('/')

  const container = page.getByTestId("list-container");

  await expect(container).toHaveText(/first/);
  await expect(container).toHaveText(/second/);
  await expect(container).toHaveText(/third/);
});
