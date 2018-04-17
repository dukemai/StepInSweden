import React from 'react'
import Link from 'gatsby-link'

import { SuggestionList, RightFilter } from '../components';
import './styles.css';

const IndexPage = () => (
  <section className="screen screen--home row">
    <SuggestionList />
    <RightFilter />
  </section>
)

export default IndexPage
