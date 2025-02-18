import { BasePage } from '@pageobjects/base.page';

export class CookieDisclaimer extends BasePage {
  popupWindow = this.page.locator('div#cw-controls');
  header = this.page.locator('h2#cwc-title');
  description = this.page.locator('p#cwc-description');
  manageBtn = this.page.getByTestId('cwc-manage');
  rejectBtn = this.page.getByTestId('cwc-reject');
  acceptBtn = this.page.getByTestId('cwc-accept');

  async acceptAllCookies() {
    await this.acceptBtn.click();
    await this.expectElementVisible(this.popupWindow, false);
  }

  async expectPopupVisible() {
    await this.expectElementVisible(this.popupWindow);
    await this.expectElementVisible(this.header);
    await this.expectElementVisible(this.description);
    await this.expectElementVisible(this.manageBtn);
    await this.expectElementVisible(this.rejectBtn);
  }
}
