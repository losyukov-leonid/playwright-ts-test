import { BasePage } from '@pageobjects/base.page';

export class JoinBanner extends BasePage {
  container = this.page.locator('//a[@data-el-jes="footer_banner"]');
  title = this.container.locator('div.fh-join-banner__title');
  featuresList = this.container.locator('div.fh-join-banner__features');
  getMembershipBtn = this.container.locator('div.fh-join-banner__button');

  async expectJoinBannerVisible() {
    await this.expectElementVisible(this.container);
    await this.expectElementVisible(this.title);
    await this.expectElementVisible(this.featuresList);
    await this.expectElementVisible(this.getMembershipBtn);
  }
}
