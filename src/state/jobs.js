import { createReducer, createActions } from 'reduxsauce';
import { createSelector } from 'reselect';
import Immutable from 'seamless-immutable';
import dataInfo from 'data';

const INITIAL_STATE = Immutable({
  data: [...dataInfo.jobs],
});

const { Types, Creators } = createActions({
  updateBrowserWidth: ['width'],
});

export const JobsTypes = Types; // JobsTypes
export default Creators; // SampleActions

// Reducers
const updateBrowserWidth = (state, { width }) => state.merge({
  width,
});

// Relate Action Types to reducers
export const reducer = createReducer(INITIAL_STATE, {
  [JobsTypes.UPDATE_BROWSER_WIDTH]: updateBrowserWidth,
});

// Selectors
const selectBase = state => state.jobs;

export const selectJobs = createSelector(
  selectBase,
  ({ data }) => [...data],
);

export const selectCurrentJob = createSelector(
  selectJobs,
  jobs => jobs.find(job => job.isCurrent),
);

export const selectJobTitles = createSelector(
  selectJobs,
  jobs => jobs.map(job => job.position),
);
