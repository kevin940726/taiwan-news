/* @flow */
import fetch from 'isomorphic-fetch';
import cheerio from 'cheerio';
import platforms from './platforms';

import type { News } from '../flow/twnews.js.flow';

function twnews(url: string, platform: string): Promise<News> {
  return platforms(platform)(fetch, cheerio, url);
}

export default twnews;
