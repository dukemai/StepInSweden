import React from 'react';
import PropTypes from 'prop-types';

import Option from './Option';

const propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    onFilterChange: PropTypes.func.isRequired,
};
const defaultProps = {
};

const Criteria = ({ title, options, onFilterChange }) => (
    <section className="criteria">
        <h4 className="criteria__title">{title}</h4>
        <div className="options">
            {
                options.map(option => (
                    <Option
                        key={option.value}
                        {...{...option, id: option.value}}
                        onChange={() => onFilterChange(option.value)}
                    />
                ))
            }
        </div>   
    </section>    
);

Criteria.propTypes = propTypes;
Criteria.defaultProps = defaultProps;
export default Criteria;