import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    index: PropTypes.number,
    content: PropTypes.string,
};
const defaultProps = {
    index: 0,
    content: '',
};

const Step = ({ index, content }) => (
    <div className="step">
        <span className="step__number">
            {index}
        </span>
        <div className="step__content">    
            {content}
        </div>
    </div>    
);

Step.propTypes = propTypes;
Step.defaultProps = defaultProps;
export default Step;