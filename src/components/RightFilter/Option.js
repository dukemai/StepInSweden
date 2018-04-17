import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};
const defaultProps = {
};

const Option = ({ id, label, value, selected, onChange }) => (
    <div className="option">
        <input
            value={value}
            id={id}
            checked={selected}
            className="option__select"
            type="checkbox"
            onChange={onChange}
        />
        <label htmlFor={id} className="option__label">{label}</label>
    </div>   
);

Option.propTypes = propTypes;
Option.defaultProps = defaultProps;
export default Option;