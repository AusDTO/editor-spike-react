import React, { Component, PropTypes } from 'react';

import HTMLTagElement from './HTMLTagElement';
import CommonEditControls from './CommonEditControls';

class Document extends Component {

  render() {
    let { document, onBlockContentChanged } = this.props;
    return (
      <div className="document">
        {
          document.blocks.map((block,index) => {
            return (
							<CommonEditControls key={index}>
								<HTMLTagElement
									tagName={block.kind}
                  content={block.content}
                  blockIndex={index}
                  onContentChange={onBlockContentChanged}/>
							</CommonEditControls>
						);
          })
        }
      </div>
    );
  }
}

Document.propTypes = {
  document: PropTypes.object.isRequired,
	onBlockContentChanged: PropTypes.func.isRequired
};

export default Document;
