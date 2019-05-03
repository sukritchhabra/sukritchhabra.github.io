import { combineReducers } from 'redux';

import { reducer as sample } from 'state/sample';
import { reducer as browser } from 'state/browser';
import { reducer as jobs } from 'state/jobs';
import { reducer as info } from 'state/info';

export default combineReducers({
  sample,
  browser,
  jobs,
  info,
});
