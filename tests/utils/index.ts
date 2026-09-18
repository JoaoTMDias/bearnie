import { mergeTests } from "@playwright/test";
import { test as accessibilityTest } from "./accessibility";

export const test = mergeTests(accessibilityTest);
export { expect } from "@playwright/test";
