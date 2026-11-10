import { defineConfig } from "cf/config";

export default defineConfig({
  accountId: "a59ac0b4a5f0636f5cc69bc28bba2425",
  worker: {
    name: "bureau-of-critical-normalcy",
    compatibilityDate: "2026-11-10",
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
    },
  },
});
