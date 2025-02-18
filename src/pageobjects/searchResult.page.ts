import { Footer } from '@components/footer.component';
import { Header } from '@components/header.component';
import { JoinBanner } from '@components/joinBanner.component';
import { Pagination } from '@components/pagination.component';
import { SearchControls } from '@components/searchControls.component';
import { BasePage } from '@pageobjects/base.page';
import { expect, Page } from '@playwright/test';

export class SearchResultPage extends BasePage {
  header: Header;
  searchControls: SearchControls;
  pagination: Pagination;
  joinBanner: JoinBanner;
  footer: Footer;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
    this.searchControls = new SearchControls(page);
    this.pagination = new Pagination(page);
    this.joinBanner = new JoinBanner(page);
    this.footer = new Footer(page);
  }

  title = this.page.locator('h1.title');
  videoInfoDetailsCategories = this.page.locator('div.video-info-details__categories');
  pagingDetailsSubtitle = this.page.locator('p.subtitle');
  searchResultGrid = this.page.locator('//div[@data-el="ThumbsList" and @data-el-type="search-list"]');
  searchResultVideos = this.searchResultGrid.locator('xpath=/div');
  relatedSearchesSection = this.page.locator('//div[@data-qa="related-searches"]');
  relatedSearchesSectionHeader = this.relatedSearchesSection.locator('h2');
  relatedSearchesGrid = this.relatedSearchesSection.locator('//div[@data-el="RelatedSearch"]');

  async expectPageVisible() {
    await this.header.expectHeaderVisible();
    await this.searchControls.expectSearchControlsVisible();
    await this.expectElementVisible(this.title);
    await this.expectElementVisible(this.videoInfoDetailsCategories);
    await this.expectElementVisible(this.pagingDetailsSubtitle);
    await this.expectElementVisible(this.searchResultGrid);
    await this.pagination.expectPaginationVisible();
    await this.expectElementVisible(this.relatedSearchesSection);
    await this.expectElementVisible(this.relatedSearchesSectionHeader);
    await this.expectElementVisible(this.relatedSearchesGrid);
    await this.joinBanner.expectJoinBannerVisible();
    await this.footer.expectFooterVisible();
  }

  async expectSearchResultVideosHaveCount(count: number) {
    await this.expectElementsHaveCount(this.searchResultVideos, count);
  }

  async expectAllSearchResultVideosHaveUniqueIds() {
    const videoElements = await this.searchResultVideos.all();
    const totalCount = videoElements.length;
    const ids = new Set(await Promise.all(videoElements.map((el) => el.getAttribute('data-id'))));

    expect(ids.has(null)).toBeFalsy();
    expect(ids.size).toBe(totalCount);
  }
}
