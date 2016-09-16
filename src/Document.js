import React, { Component, PropTypes } from 'react';

import ContentEditable from 'react-contenteditable';
import CommonEditControls from './CommonEditControls';

class Document extends Component {

  render() {
    let { document } = this.props;
    return (
      <div className="document">
        {
          document.blocks.map((block,index) => {
            return (
              <CommonEditControls key={index}>
                <ContentEditable
                  tagName={block.kind}
                  html={block.content}
                  onChange={this.contentEditableChanged.bind(this, index)}
                />
              </CommonEditControls>
            );
          })
        }
      </div>
    );
  }

  contentEditableChanged(blockIndex, event) {
    let { onBlockContentChanged } = this.props;
    onBlockContentChanged(blockIndex, event.target.value);
  }
}

Document.propTypes = {
  document: PropTypes.object.isRequired,
	onBlockContentChanged: PropTypes.func.isRequired
};

export default Document;
