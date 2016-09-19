import React, { Component, PropTypes } from 'react';

export default class CommonEditControls extends Component {
  render () {
    let { children } = this.props;
    return (
      <div className="common-edit-controls">
        <button onClick={this.deleteBlock.bind(this)}>delete</button>
        { children }
      </div>
    );
  }

  deleteBlock() {
    console.log("delete block");
    let { block, onDeleteBlock } = this.props;
    onDeleteBlock(block);
  }
}

CommonEditControls.propTypes = {
  block: PropTypes.object.isRequired,
  onDeleteBlock: PropTypes.func.isRequired
};


