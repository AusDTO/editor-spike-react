import React, { Component, PropTypes } from 'react';
import './CommonEditControls.css'

export default class CommonEditControls extends Component {

  render () {
    let { block, children, activeConfigBlock } = this.props;

    let className = ''
    if (block && activeConfigBlock && block.id === activeConfigBlock.id) {
      className = 'active'
    }

    return (
      <div className={`CommonEditControls ${className}`} onClick={this.configureBlock.bind(this)} >

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

  configureBlock() {
    const { onClick, block } = this.props
    onClick(block)
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
