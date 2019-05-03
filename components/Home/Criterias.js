import React from 'react';
import PropTypes from 'prop-types';

import criterias from '../../data/criterias.json';

const propTypes = {};
const defaultProps = {};
const Criterias = ({}) => (
  <section className="cell medium-5">
    <p className="h3 h3--criteria-title">Answer the below questions</p>
    {Object.keys(criterias).map(criteria => (
      <div className="callout" key={criteria}>
        <h4>{criterias[criteria].title}</h4>
        <div className="grid-x grid-padding-x">
          {criterias[criteria].options.map((option, index) => (
            <label
              key={option}
              className="cell medium-4"
              htmlFor={`ckb-${index}`}
            >
              <input id={`ckb-${index}`} type="checkbox" /> {option}
            </label>
          ))}
        </div>
      </div>
    ))}
  </section>
);
Criterias.propTypes = propTypes;
Criterias.defaultProps = defaultProps;
export default Criterias;
