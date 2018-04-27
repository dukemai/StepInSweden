import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Suggestion from './Suggestion';
import { FirstDays } from '../';

import './styles.css';

const propTypes = {
    suggestionsBank: PropTypes.arrayOf(PropTypes.shape({})),
    showFirstDay: PropTypes.bool,
};
const defaultProps = {
    suggestionsBank: [],
    showFirstDay: false,
};

const SuggestionList = ({ suggestionsBank, showFirstDay }) => (
    <section className="suggestions">
        <h2 className="suggestions__title text-primary">Suggestions for you</h2>
        {
            showFirstDay && (
                <FirstDays />
            )
        }
        <p className="suggestions__description">There are {suggestionsBank.length} suggestions for you</p>
        {
            suggestionsBank.map((suggestion, key)=> (
                <Suggestion {...suggestion} key={key} />
            ))
        }
    </section>    
);

SuggestionList.propTypes = propTypes;
SuggestionList.defaultProps = defaultProps;

const mapStateToProps = state => ({
    suggestionsBank: state.suggestion.filteredSources,
    showFirstDay: state.criteria.firstTime.options[0].selected,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SuggestionList);