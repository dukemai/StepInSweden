import React from 'react';
import PropTypes from 'prop-types';

import { firstdays } from '../../data';

const propTypes = {};
const defaultProps = {};
const FirstDays = ({}) => (
  <section className="block-list cell callout callout--first-days">
    <header className="h4">Things to fix in your first days</header>
    <ul>
      {firstdays.map((activity, key) => (
        <li key={key}>
          <div>
            <p className="list-header">DOUBLE LINE</p>
            <p className="list-subheader dark">{activity.content}</p>
          </div>
          <div />
        </li>
      ))}
    </ul>
  </section>
);
FirstDays.propTypes = propTypes;
FirstDays.defaultProps = defaultProps;
export default FirstDays;
