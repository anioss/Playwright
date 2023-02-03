import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig ={
  testMatch: ["tests/basicInteractions.spec.ts","tests/example.spec.ts",
   "tests/alert.test.ts"
   ,"tests/dropdown.test.ts",
   "frame.test.ts",
  "calendar.test.ts",
"uploadDownload.test.ts",
"pomTest/addToCart.test.ts"],

  

  use: {
    headless: false,
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    screenshot: "on",
    
    
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "always"
  }]]
};

export default config;
