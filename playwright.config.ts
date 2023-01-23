import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig ={
  testMatch: ["tests/example.spec.ts"]
};
export default config;
