import React, { Component, PropTypes } from 'react';
import './CommonEditControls.css'

export default class CommonEditControls extends Component {

  render () {
    let { block, children } = this.props;
    return (
      <div className="CommonEditControls" >

        <div className="tools" >
          <button className="info">&lt;{block.kind}&gt;</button>
          <button className="destructive" onClick={this.deleteBlock.bind(this)}>Delete!</button>
          { block.kind === "Minister" && <button className="action" onClick={this.chooseMinister.bind(this)}>Pick minister</button> }
        </div>
        <div className="child-component">
          { children }
        </div>
      </div>
    );
  }

  deleteBlock() {
    let { block, onDeleteBlock } = this.props;
    onDeleteBlock(block);
  }

  chooseMinister() {
    let { block, onChooseMinister } = this.props;
    onChooseMinister(block);
  }
}

CommonEditControls.propTypes = {
  block: PropTypes.object.isRequired,
  onDeleteBlock: PropTypes.func.isRequired,
  onChooseMinister: PropTypes.func.isRequired
};


