import { UPDATE_FILTER } from '../actions/ActionTypes';
import { criterias } from '../data';

const computeOptions = criteria => ({
  ...criteria,
  options: criteria.options.map(option => ({
    label: option,
    value: option,
    selected: false,
  }))
});

const INITIAL_STATES = {
  who: computeOptions(criterias.who),
  what: computeOptions(criterias.what),
  firstTime: computeOptions(criterias.firstTime),
};

export default function app(state = INITIAL_STATES, action) {
  switch (action.type) {
    case UPDATE_FILTER: {
      const { filterGroup, group } = action;
      const newState = {
        ...state,
      }
      newState[group] = {...filterGroup};
      return newState;
    }
    default:
      return state;
  }
}

