import React, { Component, PropTypes } from 'react';
import './CommonEditControls.css'

export default class CommonEditControls extends Component {

  render () {
    let { block, children } = this.props;
    return (
      <div className="CommonEditControls" >

        <div className="tools" >
          <button className="info">&lt;{block.kind}&gt;</button>
          <button className="action" onClick={this.deleteBlock.bind(this)}>delete</button>
        </div>

        { children }
      </div>
    );
  }

  deleteBlock() {
    let { block, onDeleteBlock } = this.props;
    onDeleteBlock(block);
  }
}

CommonEditControls.propTypes = {
  block: PropTypes.object.isRequired,
  onDeleteBlock: PropTypes.func.isRequired
};


