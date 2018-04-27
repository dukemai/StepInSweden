import React from 'react';
import PropTypes from 'prop-types';

import Step from './Step';
import { firstdays } from '../../data';
import './styles.css';

const propTypes = {
};
const defaultProps = {
};

const FirstDays = ({ }) => (
    <section className="firstDays">
        <h4 className="text-primary">First things to do in first days</h4>
        {
            firstdays.map((firstday, index) => (
                <Step {...firstday} index={index + 1} />
            ))
        }
    </section>    
);

FirstDays.propTypes = propTypes;
FirstDays.defaultProps = defaultProps;
export default FirstDays;