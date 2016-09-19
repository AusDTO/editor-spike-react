import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import Palette from './Palette.js';
import Document from './Document.js';

class Editor extends Component {
  render() {
    let { appendBlock, updateBlockContent, updateBlockOrder, document } = this.props;
    return (
      <div className="editor">
        <Palette onBlockClicked={appendBlock}/>
        <Document
          blocks={document.blocks}
          onBlockContentChanged={updateBlockContent}
          onBlocksReordered={updateBlockOrder}
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
      dispatch({type: 'appendBlock', block: {id: uuid.v4(), kind: blockKind, content: "Lorem ipsum..."}});
    },
    updateBlockContent: (blockId, newContent) => {
      dispatch({type: 'updateBlockContent', blockId, newContent});
    },
    updateBlockOrder: (blocks) => {
      dispatch({type: 'updateBlockOrder', blocks});
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
