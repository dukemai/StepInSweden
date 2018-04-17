import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Criteria from './Criteria';
import { toggleFilter } from '../../actions';

import './styles.css'

const propTypes = {
    who: PropTypes.shape({}).isRequired,
    what: PropTypes.shape({}).isRequired,
    firstTime: PropTypes.shape({}).isRequired,
    onFilterChange: PropTypes.func.isRequired,
};
const defaultProps = {
};

const RightFilter = ({ who, what, firstTime, onFilterChange }) => (
    <section className="filters">
        <h2 className="pageTitle text-primary">
            Step into Sweden
        </h2>
        <p className="pageDescription">
            Select criterias matching to you will help finding more adequate information
        </p>
        <Criteria
            {...who}
            onFilterChange={(value) => onFilterChange('who', value)}
        />
        <Criteria
            {...what}
            onFilterChange={(value) => onFilterChange('what', value)}
        />
        <Criteria
            {...firstTime}
            onFilterChange={(value) => onFilterChange('firstTime', value)}
        />
        <div className="filters__button">
            <button className="suggestionButton">See suggestions</button>
        </div>
    </section>
);

RightFilter.propTypes = propTypes;
RightFilter.defaultProps = defaultProps;

const mapStateToProps = state => ({
    who: state.criteria.who,
    what: state.criteria.what,
    firstTime: state.criteria.firstTime,
});

const mapDispatchToProps = dispatch => ({
    onFilterChange: (group, value) => {
        dispatch(toggleFilter(group, value));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RightFilter);