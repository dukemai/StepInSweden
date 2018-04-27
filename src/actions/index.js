import { find, filter, indexOf, findIndex } from 'lodash';

import { UPDATE_FILTER, FILTER_SUGGESTIONS } from './ActionTypes';

export function toggleFilter(group, filterValue) {
    return (dispatch, getState) => {
        const state = getState();
        const filterGroup = state.criteria[group];
        const filter = find(filterGroup.options, { value: filterValue })
        filter.selected = !filter.selected;
        dispatch({
            type: UPDATE_FILTER,
            filterGroup,
            group,
        });

        dispatch(loadSuggestions());
    }
}

const hasValidTag = (suggestion, criterias) => findIndex(suggestion.tags, tag =>
        findIndex(criterias, criteria => criteria.value === tag) > -1) > -1; 

const suggestionsFitForAll = (suggestions, whoOptions) => filter(suggestions, (suggestion) => !hasValidTag(suggestion, whoOptions));
const suggestionsFitForSelectedWho = (suggestions, selectedWhoOptions) => filter(suggestions, (suggestion) => hasValidTag(suggestion, selectedWhoOptions));

export function loadSuggestions() {
    return (dispatch, getState) => {
        const state = getState();
        const { criteria } = state;
        const whoFilters = filter(criteria.who.options, { selected: true });
        const whatFilters = filter(criteria.what.options, { selected: true });
        
        const { sources } = state.suggestion;
        const forAll = suggestionsFitForAll(sources, criteria.who.options);
        const forWho = suggestionsFitForSelectedWho(sources, whoFilters);

        const filteredSources = filter([...forWho, ...forAll],
            (suggestion) => (!whatFilters.length || hasValidTag(suggestion, whatFilters)));
    
        dispatch({
            type: FILTER_SUGGESTIONS,
            filteredSources,
        })
    }
}