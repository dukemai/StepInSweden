import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string,
    link: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    steps: PropTypes.arrayOf(PropTypes.string), 
};
const defaultProps = {
    address: '',
    link: '',
    links: [],
    tags: [],
    steps: [],
};

const Suggestion = ({ title, description, address, link, tags, steps, links }) => (
    <div className="suggestion">
        <h4 className="suggestionTitle text-primary">
            {title}
        </h4>
        <p className="suggestionDescription">
            {description}
        </p>
        {
            Boolean(address) && (
                <p className="suggestionAddress">
                    Address: {address}
                </p>
            )
        }
        {
            Boolean(link) && (
                <p className="suggestionLinks">
                    <a href={link}>{link}</a>
                    {
                        Boolean(links && links.length) && links.map(moreLink => (
                            <a href={moreLink}>{moreLink}</a>
                        ))
                    }
                </p>
            )
        }
        {
            Boolean(steps.length) && (
                <p className="steps">
                    <span className="steps__title">You can</span>
                    {
                        steps.map(step => (
                            <span key={step} className="step">{step}</span>
                        ))
                    }
                </p>    
            )
        }
        {
            Boolean(tags.length) && (
                <p className="tags">
                    {
                        tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                        ))
                    }
                </p>    
            )
        }
    </div>
);

Suggestion.propTypes = propTypes;
Suggestion.defaultProps = defaultProps;
export default Suggestion;