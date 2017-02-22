import fetch from 'isomorphic-fetch';
import cheerio from 'cheerio';

import platforms from './platforms';

function twnews(url, platform) {
  return platforms(platform)(fetch, cheerio, url);
}

export default twnews;
