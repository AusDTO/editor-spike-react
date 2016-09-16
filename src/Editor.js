import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Palette from './Palette.js';
import Document from './Document.js';

class Editor extends Component {
  render() {
    let { appendBlock, blockContentChanged, document } = this.props;
    return (
      <div className="editor">
        <Palette onBlockClicked={appendBlock}/>
        <Document
					document={document}
					onBlockContentChanged={blockContentChanged}
				/>
      </div>
    );
  }
}

Editor.propTypes = {
  document: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    document: state.document
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appendBlock: (blockKind) => {
			dispatch({type: 'appendBlock', block: {kind: blockKind, content: "Lorem ipsum..."}});
    },
    blockContentChanged: (blockIndex, newContent) => {
			dispatch({type: 'updateBlockContent', blockIndex: blockIndex, newContent: newContent});
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
