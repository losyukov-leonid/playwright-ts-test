import { BasePage } from '@pageobjects/base.page';

export class SearchControls extends BasePage {
  container = this.page.locator('//div[@data-el="Sidebar"]');
  accessTypeHeader = this.container.getByText('Access type');
  accessTypeFhOption = this.container.locator('//label[@for="filter-field-gold"]');
  accessTypeFanOption = this.container.locator('//label[@for="filter-field-fan"]');
  accessTypePaidOption = this.container.locator('//label[@for="filter-field-vod"]');
  sortByHeader = this.container.getByText('Sort by');
  sortByRelevantOption = this.container.locator('//label[@for="filter-field-type-relevance"]');
  sortByNewestOption = this.container.locator('//label[@for="filter-field-type-new"]');
  sortByPopularOption = this.container.locator('//label[@for="filter-field-type-popular"]');
  orientationHeader = this.container.getByText('orientation');
  orientationStraightOption = this.container.locator('//label[@for="filter-field-orientation-straight"]');
  orientationGayOption = this.container.locator('//label[@for="filter-field-orientation-gay"]');
  orientationTransgenderOption = this.container.locator('//label[@for="filter-field-orientation-transgender"]');
  productionHeader = this.container.getByText('Production');
  productionProOption = this.container.locator('//label[@for="filter-field-studio"]');
  productionHomemadeOption = this.container.locator('//label[@for="filter-field-creator"]');
  categoriesHeader = this.container.getByText('Filter by categories');
  categoriesMultiselect = this.container.locator('//div[@data-el="MultiselectCategories"]');
  qualityHeader = this.container.getByText('Quality');
  qualitySdOption = this.container.locator('//label[@for="filter-field-quality-sd"]');
  qualityHdOption = this.container.locator('//label[@for="filter-field-quality-hd"]');
  qualityUhdOption = this.container.locator('//label[@for="filter-field-quality-uhd"]');
  durationHeader = this.container.getByText('Duration');
  durationShortOption = this.container.locator('//label[@for="filter-field-length-short"]');
  durationMediumOption = this.container.locator('//label[@for="filter-field-length-medium"]');
  durationLongOption = this.container.locator('//label[@for="filter-field-length-long"]');
  resetFiltersBtn = this.container.locator('button');

  async expectSearchControlsVisible() {
    await this.expectElementVisible(this.container);
    await this.expectElementVisible(this.accessTypeHeader);
    await this.expectElementVisible(this.accessTypeFhOption);
    await this.expectElementVisible(this.accessTypeFanOption);
    await this.expectElementVisible(this.accessTypePaidOption);
    await this.expectElementVisible(this.sortByHeader);
    await this.expectElementVisible(this.sortByRelevantOption);
    await this.expectElementVisible(this.sortByNewestOption);
    await this.expectElementVisible(this.sortByPopularOption);
    await this.expectElementVisible(this.orientationHeader);
    await this.expectElementVisible(this.orientationStraightOption);
    await this.expectElementVisible(this.orientationGayOption);
    await this.expectElementVisible(this.orientationTransgenderOption);
    await this.expectElementVisible(this.productionHeader);
    await this.expectElementVisible(this.productionProOption);
    await this.expectElementVisible(this.productionHomemadeOption);
    await this.expectElementVisible(this.categoriesHeader);
    await this.expectElementVisible(this.categoriesMultiselect);
    await this.expectElementVisible(this.qualityHeader);
    await this.expectElementVisible(this.qualitySdOption);
    await this.expectElementVisible(this.qualityHdOption);
    await this.expectElementVisible(this.qualityUhdOption);
    await this.expectElementVisible(this.durationHeader);
    await this.expectElementVisible(this.durationShortOption);
    await this.expectElementVisible(this.durationMediumOption);
    await this.expectElementVisible(this.durationLongOption);
    await this.expectElementVisible(this.resetFiltersBtn);
  }
}
