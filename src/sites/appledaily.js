/* @flow */
import typeof Fetch from 'isomorphic-fetch';
import typeof Cheerio from 'cheerio';
import type { News } from '../../flow/twnews.js.flow';

const platform: string = 'appledaily';

async function appledaily(fetch: Fetch, cheerio: Cheerio, url: string): Promise<News> {
  const $ = await fetch(url)
    .then(res => res.text())
    .then(body => cheerio.load(body));

  const jsonld = JSON.parse($('script[type="application/ld+json"]').html());
  // get JSON-LD schema object

  const AUTHORS_REGEX: RegExp = /（(.*)／.*報導）/g;
  const PHOTOGRAPHERS_REGEX: RegExp = /^(.*[\u3000-\u303F])(.*)攝$/g;

  const title = jsonld.headline || $('#h1').text();
  // get title

  const summary = $('#summary').text();

  const content = summary.replace(AUTHORS_REGEX, '');
  // get content

  const date = new Date(jsonld.dateCreated);
  // get date

  const authorsGroup = AUTHORS_REGEX.exec(summary);
  const authors = authorsGroup ?
    [authorsGroup[1]] :
    [];
  // get authors
  // need to find examples with multiple authors

  const categories = jsonld.keywords;
  // get categories

  const medias = Array.prototype.map.call($('.lbimg.sgimg a'), (node) => {
    const img = $(node);
    const photographersGroup = PHOTOGRAPHERS_REGEX.exec(img.attr('title'));
    PHOTOGRAPHERS_REGEX.lastIndex = 0;

    return {
      url: img.attr('href'),
      photographers: photographersGroup ? [photographersGroup[2]] : [],
      caption: photographersGroup ? photographersGroup[1] : '',
      isVideo: false,
      isPrimary: img.hasClass('t1'),
    };
  });
  // get medias

  const sources = [];
  // get sources
  // need examples

  const subtitle = null;
  // get subtitle
  // need examples

  const social = {};
  // get social counts
  // need implement

  return {
    url,
    platform,
    title,
    subtitle,
    content,
    date,
    authors,
    categories,
    medias,
    sources,
    social,
  };
}

export default appledaily;
