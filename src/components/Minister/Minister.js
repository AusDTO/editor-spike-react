import React, { Component, PropTypes } from 'react';

import './Minister.css'

export default class Minister extends Component {
  render () {
    let { block: minister } = this.props;
    return (
      <div className="Minister">
        <figure>
          <img alt={`${minister.name}`} src={minister.image} />
        </figure>
        <article>
          <h3>{minister.name}</h3>
          <p>{minister.title}</p>
        </article>
      </div>
    );
  }
}

Minister.propTypes = {
  block: PropTypes.object.isRequired
};

