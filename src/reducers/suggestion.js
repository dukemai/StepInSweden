import { FILTER_SUGGESTIONS } from '../actions/ActionTypes';
import { suggestionsBank } from '../data';

const INITIAL_STATES = {
  sources: suggestionsBank,
  filteredSources: [...suggestionsBank],
};

export default function app(state = INITIAL_STATES, action) {
  switch (action.type) {
    case FILTER_SUGGESTIONS: {
      const { filteredSources } = action;
      return {
        ...state,
        filteredSources: [...filteredSources],
      }
    }
    default:
      return state;
  }
}

