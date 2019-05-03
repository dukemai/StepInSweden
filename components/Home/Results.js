import React from 'react';
import PropTypes from 'prop-types';

import ResultItem from './ResultItem';
import { suggestionsBank } from '../../data';

const propTypes = {};
const defaultProps = {};
const Results = ({}) => (
  <section className="cell medium-7">
    <p className="h3 h3--suggestion-title">Suggestions for you</p>
    {suggestionsBank.map(suggestion => (
      <ResultItem key={suggestion.title} {...suggestion} />
    ))}
  </section>
);
Results.propTypes = propTypes;
Results.defaultProps = defaultProps;
export default Results;
