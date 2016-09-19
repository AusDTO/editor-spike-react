import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import Palette from '../../components/Palette';
import Document from '../../components/Document';
import MinisterChooser from '../../components/MinisterChooser';
import imgPlaceholder from '../../components/Minister/img-placeholder.gif';

import './Editor.css';

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
      editorUI 
    } = this.props;

    return (
      <div className="Editor">
        <Palette onBlockClicked={appendBlock} />
        <MinisterChooser
          block={editorUI.ministerChooser.forBlock}
          ministers={editorUI.ministers}
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
    editorUI: state.editorUI
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
