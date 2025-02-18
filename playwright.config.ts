import 'tsconfig-paths/register';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/specs',
  tsconfig: './tsconfig.json',
  reporter: [['list', { printSteps: true }]],
  use: {
    baseURL: 'https://faphouse.com/',
    headless: true,
    storageState: 'auth.json'
  },
  globalSetup: require.resolve('./global-setup'),
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
