async function appledaily(fetch, cheerio, url) {
  const $ = await fetch(url)
    .then(res => res.text())
    .then(body => cheerio.load(body));

  const dateRegex = /(\d{4})年(\d{2})月(\d{2})日(\d{2}):(\d{2})/g;
  const authorsRegex = /（(.*)／.*報導）/g;

  const title = $('#h1').text();
  const content = $('#summary').text().replace(authorsRegex, '');

  const dateGroup = dateRegex.exec($('time').text());
  const date = dateGroup ?
    new Date(dateGroup[1], +dateGroup[2] - 1, dateGroup[3], dateGroup[4], dateGroup[5]) :
    null;

  const authorsGroup = authorsRegex.exec($('#summary').text());
  const authors = authorsGroup ?
    [authorsGroup[1]] :
    [];

  return {
    title,
    content,
    date,
    authors,
  };
}

export default appledaily;
