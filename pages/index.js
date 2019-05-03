import React from 'react';
import PropTypes from 'prop-types';

import Criterias from '../components/Home/Criterias';
import Results from '../components/Home/Results';
import Header from '../components/Home/Header';
import FirstDays from '../components/Home/FirstDays';

const propTypes = {};
const defaultProps = {};
const Home = ({}) => (
  <section className="grid-x grid-padding-x">
    <Header />
    <FirstDays />
    <Criterias />
    <Results />
  </section>
);
Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
export default Home;
