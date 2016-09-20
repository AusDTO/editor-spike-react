import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Palette from '../../components/Palette';
import Document from '../../components/Document';
import MinisterChooser from '../../components/MinisterChooser';

import './Editor.css';
import { actions } from './reducers';

class Editor extends Component {
  render() {
    let {
      appendBlock,
      updateBlockContent,
      updateBlockOrder,
      deleteBlock,
      chooseMinister,
      setMinister,
      document,
      editorUI 
    } = this.props;

    return (
      <div className="Editor">
        <Palette onBlockClicked={appendBlock} />
        <MinisterChooser
          block={editorUI.ministerChooser.forBlock}
          ministers={editorUI.ministers}
          onMinisterChosen={setMinister}/>
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
  let dispatchAction = (action) => {
    return (...args) => dispatch(action(...args));
  };

  return {
    appendBlock:        dispatchAction(actions.appendBlock),
    updateBlockContent: dispatchAction(actions.updateBlockContent),
    updateBlockOrder:   dispatchAction(actions.updateBlockOrder),
    deleteBlock:        dispatchAction(actions.deleteBlock),
    chooseMinister:     dispatchAction(actions.chooseMinister),
    setMinister:        dispatchAction(actions.setMinister)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
