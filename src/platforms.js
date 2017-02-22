import appledaily from './sites/appledaily';

function platforms(platform) {
  return {
    appledaily,
  }[platform];
}

export default platforms;
