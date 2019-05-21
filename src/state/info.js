import { createReducer } from 'reduxsauce';
import { createSelector } from 'reselect';
import Immutable from 'seamless-immutable';
import userData from 'data';

const INITIAL_STATE = Immutable({
  data: userData.info,
});

// const { Types, Creators } = createActions({});

// export const InfoTypes = Types; // Types
// export default Creators; // Actions

// // Reducers

// // Relate Action Types to reducers
export const reducer = createReducer(INITIAL_STATE, {});

// Selectors
const selectBase = state => state.info;

export const selectInfoData = createSelector(
  selectBase,
  ({ data }) => data,
);


export const selectSocial = createSelector(
  selectInfoData,
  ({ social }) => [...social].sort((a, b) => {
    if (a.order < b.order) return -1;

    return 1;
  }),
);
