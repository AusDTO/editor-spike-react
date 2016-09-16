import React, { Component, PropTypes } from 'react';
import ContentEditable from 'react-contenteditable';

class HTMLTagElement extends Component {
  render () {
    let { tagName, content } = this.props;
    return (
      <ContentEditable tagName={tagName} html={content} onChange={this.onChange.bind(this)}/>
    );
  }

  onChange(event) {
    let { blockIndex, onContentChange } = this.props;
    onContentChange(blockIndex, event.target.value);
  }
}

HTMLTagElement.propTypes = {
  tagName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
	blockIndex: PropTypes.number.isRequired,
	onContentChange: PropTypes.func.isRequired,
}

export default HTMLTagElement;
