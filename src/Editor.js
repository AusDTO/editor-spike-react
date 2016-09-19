import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import Palette from './Palette';
import Document from './Document';
import MinisterChooser from './MinisterChooser';
import './Editor.css';
import imgPlaceholder from './img-placeholder.gif';

class Editor extends Component {
  render() {
    let {
      appendBlock,
      updateBlockContent,
      updateBlockOrder,
      deleteBlock,
      chooseMinister,
      ministerChosen,
      document,
      ui
    } = this.props;

    return (
      <div className="Editor">
        <Palette onBlockClicked={appendBlock} />
        <MinisterChooser
          block={ui.ministerChooser.forBlock}
          ministers={ui.ministers}
          onMinisterChosen={ministerChosen}/>
        <Document
          blocks={document.blocks}
          onBlockContentChanged={updateBlockContent}
          onBlocksReordered={updateBlockOrder}
          onBlockDeleted={deleteBlock}
          onChooseMinister={chooseMinister}
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
    document: state.document,
    ui: state.ui
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appendBlock: (blockKind) => {
      switch (blockKind) {
        case "h1":
        case "h2":
        case "h3":
        case "p":
        case "blockquote":
          dispatch({type: 'appendBlock', block: {id: uuid.v4(), kind: blockKind, content: "Lorem ipsum..."}});
          break;
        case "Minister":
          dispatch({type: 'appendBlock', block: {id: uuid.v4(), kind: "Minister", minister: {
            image: imgPlaceholder,
            name: "[Placeholder name]",
            title: "[Placeholder title]"
          }}});
          break;
        default:
          console.warn(`Unknown block kind ${blockKind}`);
      }
    },
    updateBlockContent: (blockId, newContent) => {
      dispatch({type: 'updateBlockContent', blockId, newContent});
    },
    updateBlockOrder: (blocks) => {
      dispatch({type: 'updateBlockOrder', blocks});
    },
    deleteBlock: (block) => {
      dispatch({type: 'deleteBlock', block});
    },
    chooseMinister: (block) => {
      dispatch({type: 'showMinisterChooser', block});
    },
    ministerChosen: (block, minister) => {
      dispatch({type: 'ministerChosen', block, minister});
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
