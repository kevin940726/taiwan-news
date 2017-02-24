import twnews from '../../src';

const url = 'http://www.appledaily.com.tw/realtimenews/article/local/20170222/1062133/%E7%BD%B9%E7%99%8C%E7%97%87%E4%B9%9F%E8%83%BD%E5%BF%AB%E6%A8%82%E6%B4%BB%E3%80%80%E8%BF%91%E7%99%BE%E6%82%A3%E8%80%85%E5%9B%9E%E9%86%AB%E9%99%A2%E6%85%B6%E9%87%8D%E7%94%9F';
const platform = 'appledaily';

let news = {};

beforeAll(async () => {
  news = await twnews(url, 'appledaily');
  return news;
});

test('find the title of the news', () => {
  expect(news.title).toBe('罹癌症也能快樂活　近百患者回醫院慶重生');
});

test('find the content of the news', () => {
  expect(news.content).toBe('衛福部豐原醫院今天舉辦「病友回娘家，百位癌友歡慶生」活動，有近百名癌症病友參加慶祝重生。抗癌一年多的葉媽媽說，抗癌很痛苦差點就走不下去，還好有醫師和親友鼓勵，現在已經恢復正常生活，還可以到醫院當志工。豐原醫院乳房外科主任吳建廷表示，癌症存活率逐年提高，病患要勇敢就醫。慶生活動在豐原醫院9樓舉行，近百名乳癌、大腸癌病友參加，醫院推出大蛋糕，醫護人員與患者切蛋糕後響起熱烈歡呼聲。癌症病友都說，除了醫學治療，最重要是心情調適，放寬心地接受、適應、配合治療，就可以戰勝癌症。55歲抗癌1年多的葉媽媽講起抗癌過程紅了眼眶。她說，化療、標靶治療會噁心、嘔吐、食慾全無，真的非常痛苦，曾經和患糖尿病的好友抱著哭。後來告訴自己，遇到了就要面對，她還有家人、子女與可愛的孫子，開始學習與病共存、相信專業，積極接受治療。現在恢復正常生活外，還到醫院急診室當志工，現在他體重增加了近5公斤，現在醫生常要她減肥，她都笑著說：「我現在是心寬體胖。」彰化基督教醫院乳房中心主任陳達人表示，醫學日益進步，各類癌症治療存活率都在提高，以乳癌來說，0期患者治療的5年存活率高達99%，1期的5年存活率約有95%，乳癌2期治療的5年存活率也約有90%。陳達人說：「心情開朗、適度運動、配合醫師治療，是抗癌的法寶。」');
});

test('find the date of the news', () => {
  const date = new Date('2017/02/22 21:28');
  expect(news.date.getTime()).toBe(date.getTime());
});

test('find the authors of the news', () => {
  expect(news.authors).toEqual(['陳世河']);
});

test('find the url of the news', () => {
  expect(news.url).toBe(url);
});

test('find the platform of the news', () => {
  expect(news.platform).toBe(platform);
});

test('find the categories of the news', () => {
  expect(news.categories).toEqual(['社會']);
});

test('find the medias of the news', () => {
  expect(news.medias).toEqual([
    {
      url: 'http://twimg.edgesuite.net/images/ReNews/20170222/640_ad4ff681c014af6c4b2a88c13641c145.jpg',
      photographers: ['陳世河'],
      caption: '近百名癌症病友回醫院慶重生。',
      isVideo: false,
      isPrimary: true,
    },
    {
      url: 'http://twimg.edgesuite.net/images/ReNews/20170222/640_c146a78d1b2a3851fe96b3ac38891904.jpg',
      photographers: ['陳世河'],
      caption: '55歲葉媽媽講起抗癌過程痛苦紅了眼眶。',
      isVideo: false,
      isPrimary: false,
    },
    {
      url: 'http://twimg.edgesuite.net/images/ReNews/20170222/640_ef2f0545c510992ac1fdfab745a987a1.jpg',
      photographers: ['陳世河'],
      caption: '抗癌成功葉媽媽恢復健康生活後，還到醫院擔任志工。',
      isVideo: false,
      isPrimary: false,
    },
  ]);
});

test('find the sources of the news', () => {
  expect(news.sources).toEqual([]);
});
