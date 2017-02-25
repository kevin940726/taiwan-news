/* @flow */
import appledaily from './sites/appledaily';

import type { Site } from '../flow/twnews.js.flow';

function platforms(platform: string): Site {
  return {
    appledaily,
  }[platform];
}

export default platforms;
