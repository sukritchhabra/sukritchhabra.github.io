import { createReducer } from 'reduxsauce';
import { createSelector } from 'reselect';
import Immutable from 'seamless-immutable';
import dataInfo from 'data';

const INITIAL_STATE = Immutable({
  data: [...dataInfo.jobs],
});

// const { Types, Creators } = createActions({});

// export const JobsTypes = Types; // Types
// export default Creators; // Actions

// // Reducers

// // Relate Action Types to reducers
export const reducer = createReducer(INITIAL_STATE, {});

// Selectors
const selectBase = state => state.jobs;

export const selectJobs = createSelector(
  selectBase,
  ({ data }) => [...data],
);

export const selectCurrentJob = createSelector(
  selectJobs,
  jobs => jobs.find(job => job.isCurrent) || {},
);

export const selectJobTitles = createSelector(
  selectJobs,
  jobs => jobs.map(job => job.position),
);
