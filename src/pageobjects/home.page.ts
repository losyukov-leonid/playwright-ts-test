import { Footer } from '@components/footer.component';
import { Header } from '@components/header.component';
import { JoinBanner } from '@components/joinBanner.component';
import { Pagination } from '@components/pagination.component';
import { BasePage } from '@pageobjects/base.page';
import { Page } from '@playwright/test';

export class HomePage extends BasePage {
  header: Header;
  pagination: Pagination;
  joinBanner: JoinBanner;
  footer: Footer;

  constructor(page: Page) {
    super(page);
    this.header = new Header(page);
    this.pagination = new Pagination(page);
    this.joinBanner = new JoinBanner(page);
    this.footer = new Footer(page);
  }

  pageContentWrapper = this.page.locator('//div[@data-el="PageContentWrapper"]');
  headerBannerSlider = this.pageContentWrapper.locator('//aside[@data-el="HeaderBannerSlider"]');
  hotVideosSection = this.pageContentWrapper.locator('//div[@data-el-block="first_60_on_main"]');
  hotVideosSectionTitle = this.hotVideosSection.locator(
    'xpath=/preceding-sibling::div[@class="title-row title-row_gold"]'
  );
  hotVideos = this.hotVideosSection.locator('xpath=/div');
  exclusiveScenesSectionContainer = this.pageContentWrapper.locator('div.exclusive-scenes-section__container');
  exclusiveScenesSectionLogo = this.exclusiveScenesSectionContainer.locator('div.exclusive-scenes-section__avatar');
  exclusiveScenesSectionTitle = this.exclusiveScenesSectionContainer.locator('p.exclusive-scenes-section__title');
  exclusiveScenesSectionMoreVideosBtn = this.exclusiveScenesSectionContainer.locator(
    'button.exclusive-scenes-section__header-more-videos-button'
  );
  exclusiveScenesSectionSubtitle = this.exclusiveScenesSectionContainer.locator('p.exclusive-scenes-section__subtitle');
  exclusiveScenesSectionJoinToWatchLink = this.exclusiveScenesSectionContainer.locator(
    '//a[@data-el="AnchorGoToJoin" and not(contains(@class, "footer-button"))]'
  );
  creatorsContestSection = this.pageContentWrapper.locator('//div[@data-el-block="contest"]');
  creatorsContestSectionTitle = this.creatorsContestSection.locator(
    'xpath=/preceding-sibling::div[@class="title-row title-row_gold"][1]'
  );
  creatorsContestSectionMoreVideosBtn = this.creatorsContestSection.locator(
    'xpath=/following-sibling::div//a[@data-el-element="show_more"]'
  );
  mainVideosSection = this.pageContentWrapper.locator('//div[@data-el-block="second_60_on_main"]');
  mainVideos = this.mainVideosSection.locator('xpath=/div');
  popularCategoriesSectionHeader = this.pageContentWrapper.locator('div.related-category-header');
  popularCategoriesSectionList = this.pageContentWrapper.locator('div.related-category-list');
  popularChannelsSectionHeader = this.pageContentWrapper.locator('//div[contains(@class, "related-studio-header")][1]');
  popularChannelsSectionList = this.popularChannelsSectionHeader.locator('xpath=/following-sibling::div[1]');
  popularCreatorsSectionHeader = this.pageContentWrapper.locator('//div[contains(@class, "related-studio-header")][2]');
  popularCreatorsSectionList = this.popularCreatorsSectionHeader.locator('xpath=/following-sibling::div[1]');

  async expectPageVisible() {
    await this.header.expectHeaderVisible();
    await this.expectElementVisible(this.pageContentWrapper);
    await this.expectElementVisible(this.headerBannerSlider);
    await this.expectElementVisible(this.hotVideosSectionTitle);
    await this.expectElementVisible(this.hotVideosSection);
    await this.expectElementVisible(this.exclusiveScenesSectionLogo);
    await this.expectElementVisible(this.exclusiveScenesSectionTitle);
    await this.expectElementVisible(this.exclusiveScenesSectionMoreVideosBtn);
    await this.expectElementVisible(this.exclusiveScenesSectionSubtitle);
    await this.expectElementVisible(this.exclusiveScenesSectionJoinToWatchLink);
    await this.expectElementVisible(this.creatorsContestSectionTitle);
    await this.expectElementVisible(this.creatorsContestSection);
    await this.expectElementVisible(this.creatorsContestSectionMoreVideosBtn);
    await this.expectElementVisible(this.mainVideosSection);
    await this.pagination.expectPaginationVisible();
    await this.expectElementVisible(this.popularCategoriesSectionHeader);
    await this.expectElementVisible(this.popularCategoriesSectionList);
    await this.expectElementVisible(this.popularChannelsSectionHeader);
    await this.expectElementVisible(this.popularChannelsSectionList);
    await this.expectElementVisible(this.popularCreatorsSectionHeader);
    await this.expectElementVisible(this.popularCreatorsSectionList);
    await this.joinBanner.expectJoinBannerVisible();
    await this.footer.expectFooterVisible();
  }

  async expectHotVideosHaveCount(count: number) {
    await this.expectElementsHaveCount(this.hotVideos, count);
  }

  async expectMainVideosHaveCount(count: number) {
    await this.expectElementsHaveCount(this.mainVideos, count);
  }
}
