import { BasePage } from '@pageobjects/base.page';

export class Footer extends BasePage {
  container = this.page.locator('//div[@class="fh-footer "]');
  startEarningBtn = this.container.locator('a#footer-nav-start-earning');
  infoContainer = this.page.locator('div.fh-footer__info');
  disclaimerLink = this.infoContainer.locator('a.fh-footer__disclaimer-link');
  copyrightText = this.infoContainer.locator('div.fh-footer__copyright-text');
  twitterLink = this.infoContainer.locator('div.fh-footer__links > a');
  companyAddressWrap = this.infoContainer.locator('div.fh-footer__company-address-wrap');
  companyAddressAsacpLink = this.infoContainer.locator('div.fh-footer__company-address-asacp > a');

  async expectFooterVisible() {
    await this.expectElementVisible(this.container);
    await this.expectElementVisible(this.startEarningBtn);
    await this.expectElementVisible(this.disclaimerLink);
    await this.expectElementVisible(this.copyrightText);
    await this.expectElementVisible(this.twitterLink);
    await this.expectElementVisible(this.companyAddressWrap);
    await this.expectElementVisible(this.companyAddressAsacpLink);
  }
}
