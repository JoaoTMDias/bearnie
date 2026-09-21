import type { Locator, Page } from "@playwright/test";
import { test as base } from "@playwright/test";

export class ComponentPreview {
  constructor(private readonly page: Page) {}

  get(id: string): Locator {
    return this.page.locator(`[data-component-preview="preview-${id}"]`);
  }
}

type ComponentPreviewFixtures = {
  componentPreview: ComponentPreview;
};

export const test = base.extend<ComponentPreviewFixtures>({
  componentPreview: async ({ page }, use) => {
    await use(new ComponentPreview(page));
  },
});
