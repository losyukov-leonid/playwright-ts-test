import { BasePage } from '@pageobjects/base.page';

export class Header extends BasePage {
  container = this.page.locator('//div[@data-el="GNavbar"]');
  topRow = this.container.locator('//div[contains(@class, "row_top-desktop")]');
  logo = this.topRow.locator('//a[@class="logo"]');
  orientationsControlBtn = this.topRow.locator('//button[contains(@class, "orientations-control")]');
  searchInput = this.topRow.locator('//input[@data-el="SuggestedSearch"]');
  languagePickerBtn = this.topRow.locator('//div[@data-test-id="language-picker-btn"]');
  signInBtn = this.topRow.locator('//a[contains(@href, "signin")]');
  joinBtn = this.topRow.locator('//a[@data-el="AnchorGoToJoin"]');
  mainRow = this.container.locator('//div[contains(@class, "row_main-desktop")]');
  navLinks = this.mainRow.locator('//div[@data-el="NavbarDesktop"]//div[contains(@class, "g-navbar__col")]');
  becomeCreatorLink = this.mainRow.locator('//a[contains(@class, "link_become-creator")]');

  async fillSearchInput(searchTerm: string) {
    await this.clickOnElement(this.searchInput);
    await this.fillText(this.searchInput, searchTerm);
  }

  async expectHeaderVisible() {
    await this.expectElementVisible(this.container);
    await this.expectElementVisible(this.logo);
    await this.expectElementVisible(this.orientationsControlBtn);
    await this.expectElementVisible(this.searchInput);
    await this.expectElementVisible(this.languagePickerBtn);
    await this.expectElementVisible(this.signInBtn);
    await this.expectElementVisible(this.joinBtn);
    await this.expectElementVisible(this.mainRow);
    await this.expectElementsHaveCount(this.navLinks, 9);
    await this.expectElementVisible(this.becomeCreatorLink);
  }
}
