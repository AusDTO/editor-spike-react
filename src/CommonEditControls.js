import React, { Component, PropTypes } from 'react';
import './CommonEditControls.css'

export default class CommonEditControls extends Component {

  render () {
    let { children } = this.props;
    return (
      <div className="CommonEditControls" >

        <div className="tools" >
          <button onClick={this.deleteBlock.bind(this)}>delete</button>
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


