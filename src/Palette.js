import React, { Component, PropTypes } from 'react';

class Palette extends Component {
  render () {
    return (
      <div className="palette">
        {this.blockButton("h1")}
        {this.blockButton("h2")}
        {this.blockButton("h3")}
        {this.blockButton("p")}
        {this.blockButton("blockquote")}
        {this.blockButton("Minister")}
      </div>
    );
  }

  blockButton(blockName) {
    return (
      <button onClick={this.props.onBlockClicked.bind(this, blockName)}>{blockName}</button>
    );
  }
}

Palette.propTypes = {
  onBlockClicked: PropTypes.func.isRequired
};

export default Palette;


