import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const Header = ({}) => (
  <header className="subnav-hero-section cell">
    <div>
      <h1 className="subnav-hero-headline">Step in Sweden</h1>
      <p>Where you can get help for your first days in Sweden</p>
    </div>
  </header>
);
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
