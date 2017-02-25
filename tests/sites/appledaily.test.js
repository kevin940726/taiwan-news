import twnews from '../../src';
import { appledaily as suites } from '../suites';

const platform = 'appledaily';

suites.forEach((suite, index) => {
  describe(`suite ${index}`, () => {
    const expected = suite.news;

    test('find the title of the news', async () => {
      const news = await twnews(suite.url, platform);
      expect(news.title).toBe(expected.title);
    });

    test('find the content of the news', async () => {
      const news = await twnews(suite.url, platform);
      expect(news.content).toBe(expected.content);
    });

    test('find the date of the news', async () => {
      const news = await twnews(suite.url, platform);
      expect(news.date.getTime()).toBe(expected.date.getTime());
    });

    test('find the authors of the news', async () => {
      const news = await twnews(suite.url, platform);
      expect(news.authors).toEqual(expected.authors);
    });

    test('find the url of the news', async () => {
      const news = await twnews(suite.url, platform);
      expect(news.url).toBe(expected.url);
    });

    test('find the platform of the news', async () => {
      const news = await twnews(suite.url, platform);
      expect(news.platform).toBe(expected.platform);
    });

    test('find the categories of the news', async () => {
      const news = await twnews(suite.url, platform);
      expect(news.categories).toEqual(expected.categories);
    });

    test('find the medias of the news', async () => {
      const news = await twnews(suite.url, platform);
      expect(news.medias).toEqual(expected.medias);
    });

    test('find the sources of the news', async () => {
      const news = await twnews(suite.url, platform);
      expect(news.sources).toEqual(expected.sources);
    });

    test('find the subtitle of the news', async () => {
      const news = await twnews(suite.url, platform);
      expect(news.subtitle).toBe(expected.subtitle);
    });

    test.skip('find the social of the news', async () => {
      const news = await twnews(suite.url, platform);
      expect(news.social).toEqual(expected.social);
    });
  });
});
