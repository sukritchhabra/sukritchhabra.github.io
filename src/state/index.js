import { combineReducers } from 'redux';

import { reducer as sample } from 'state/sample';
import { reducer as browser } from 'state/browser';

export default combineReducers({
  sample,
  browser,
});
