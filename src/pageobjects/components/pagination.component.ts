import { BasePage } from '@pageobjects/base.page';

export class Pagination extends BasePage {
  container = this.page.locator('div.pager');
  pressedBtn = this.container.locator('button');
  nextBtn = this.container.locator('//a[contains(@class, "tertiary")]');

  async expectPaginationVisible() {
    await this.expectElementVisible(this.container);
    await this.expectElementVisible(this.pressedBtn);
    await this.expectElementVisible(this.nextBtn);
  }
}
