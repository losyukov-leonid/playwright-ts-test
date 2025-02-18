import { chromium, type FullConfig } from '@playwright/test';
import { CookieDisclaimer } from '@components/cookieDisclaimer.component';
import { BasePage } from '@pageobjects/base.page';

async function globalSetup(config: FullConfig) {
  const baseURL = config.projects[0].use.baseURL;
  const browser = await chromium.launch();
  const context = await browser.newContext({
    baseURL
  });
  const page = await context.newPage();
  const basePage = new BasePage(page);
  const cookieDisclaimer = new CookieDisclaimer(page);

  await basePage.navigateTo();
  await cookieDisclaimer.expectPopupVisible();
  await cookieDisclaimer.acceptAllCookies();
  await context.storageState({ path: 'auth.json' });
  await browser.close();
}

export default globalSetup;
