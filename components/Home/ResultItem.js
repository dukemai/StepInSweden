import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const ResultItem = ({ title, description, tags, address, link }) => (
  <section>
    <div className="news-card-tag">
      {tags.map(tag => (
        <span key={tag} className="label">
          <a href="#">{tag}</a>
        </span>
      ))}
    </div>
    <div className="card news-card">
      <div className="card-section">
        <div className="news-card-date">{address}</div>
        <article className="news-card-article">
          <h4 className="news-card-title">
            <a href={link}>{title}</a>
          </h4>
          <p className="news-card-description">{description}</p>
        </article>
      </div>
    </div>
  </section>
);
ResultItem.propTypes = propTypes;
ResultItem.defaultProps = defaultProps;
export default ResultItem;
