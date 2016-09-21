import React, { Component, PropTypes } from 'react';
import './Palette.css';

class Palette extends Component {
  render () {
    return (
      <div className="Palette">
        {this.blockButton("h1")}
        {this.blockButton("h2")}
        {this.blockButton("h3")}
        {this.blockButton("p")}
        {this.blockButton("blockquote")}
        {this.blockButton("a")}
        {this.blockButton("Minister")}
        {this.blockButton("ColumnList", "List (columns)")}
        {this.blockButton("RowList", "List (rows)")}
      </div>
    );
  }

  blockButton(blockName, buttonText) {
    buttonText = buttonText || blockName;
    return (
      <button onClick={this.props.onBlockClicked.bind(this, blockName)}>{buttonText}</button>
    );
  }
}

Palette.propTypes = {
  onBlockClicked: PropTypes.func.isRequired
};

export default Palette;


