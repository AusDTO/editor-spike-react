import React, { Component, PropTypes } from 'react';
import ContentEditable from 'react-contenteditable';

export default class HTMLTagElement extends Component {
  onChange (ev) {
    console.log(ev.target.value);
  }

  render () {
    let { tagName, content } = this.props;
    return (
      React.createElement(
        tagName,
        {}, 
        <ContentEditable html={content} onChange={this.onChange} />
      )
    );
  }
}

HTMLTagElement.propTypes = {
  tagName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
