import { createReducer, createActions } from 'reduxsauce';
import { createSelector } from 'reselect';
import Immutable from 'seamless-immutable';
import { sizes } from 'utils/media';

const INITIAL_STATE = Immutable({
  width: window.innerWidth,
});

const { Types, Creators } = createActions({
  updateBrowserWidth: ['width'],
});

export const BrowserTypes = Types; // BrowserTypes
export default Creators; // SampleActions

// Reducers
const updateBrowserWidth = (state, { width }) => state.merge({
  width,
});

// Relate Action Types to reducers
export const reducer = createReducer(INITIAL_STATE, {
  [BrowserTypes.UPDATE_BROWSER_WIDTH]: updateBrowserWidth,
});

// Selectors
const selectBase = state => state.browser;

export const selectBrowserWidth = createSelector(
  selectBase,
  ({ width }) => width,
);

export const selectIsMobile = createSelector(
  selectBrowserWidth,
  width => width <= sizes.phone,
);
