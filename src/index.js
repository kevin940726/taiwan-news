import fetch from 'isomorphic-fetch';
import cheerio from 'cheerio';

import appledaily from './sites/appledaily';

function twnews(url) {
  return appledaily(fetch, cheerio, url);
}

export default twnews;
