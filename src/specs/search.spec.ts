import { Header } from '@components/header.component';
import { expect, test as base } from '@playwright/test';
import { HomePage } from '@pageobjects/home.page';
import { SearchResultPage } from '@pageobjects/searchResult.page';

const test = base.extend<{ pages: { homePage: HomePage; header: Header; searchResultPage: SearchResultPage } }>({
  pages: async ({ page }, use) => {
    const pages = {
      homePage: new HomePage(page),
      header: new Header(page),
      searchResultPage: new SearchResultPage(page)
    };
    await use(pages);
  }
});

test.describe('Search', () => {
  const searchTerm = 'Homemade';
  const urlRegex = new RegExp(`\\/search\\/videos\\?q=${searchTerm.toLowerCase()}$`);
  const defaultVideosCount = 60;

  test.beforeEach(async ({ pages }) => {
    await pages.homePage.navigateTo();
    await pages.homePage.expectPageVisible();
  });

  test('Check unique search results number', async ({ page, pages }) => {
    const { homePage, header, searchResultPage } = pages;

    await homePage.navigateTo();
    await homePage.expectPageVisible();
    await homePage.expectHotVideosHaveCount(defaultVideosCount);
    await homePage.expectMainVideosHaveCount(defaultVideosCount);
    await header.fillSearchInput(searchTerm);
    await page.keyboard.press('Enter');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(urlRegex);
    await searchResultPage.expectPageVisible();
    await searchResultPage.expectSearchResultVideosHaveCount(defaultVideosCount);
    await searchResultPage.expectAllSearchResultVideosHaveUniqueIds();
  });
});
