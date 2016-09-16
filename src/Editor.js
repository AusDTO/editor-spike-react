import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Palette from './Palette.js';
import Document from './Document.js';

class Editor extends Component {
  render() {
    let { appendBlock, document } = this.props;
    return (
      <div className="editor">
        <Palette onBlockClicked={appendBlock}/>
        <Document document={document}/>
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
      switch (blockKind) {
        case "h1":
        case "h2":
        case "h3":
        case "p":
        case "blockquote": {
          dispatch({type: 'appendBlock', block: {kind: blockKind, content: "Lorem ipsum..."}});
          break;
        }
        default: {
          console.warn("unknown block name", blockKind);
        }
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
