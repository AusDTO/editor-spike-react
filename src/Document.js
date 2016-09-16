import React, { Component, PropTypes } from 'react';
import HTMLTagElement from './HTMLTagElement';

class Document extends Component {

  render() {
    let { document } = this.props;
    return (
      <div className="document">
        {
          document.blocks.map((block,index) => {
            console.log(block)
            return <HTMLTagElement key={index} tagName={block.kind} content={block.content}/>
          })
        }
      </div>
    );
  }
}

Document.propTypes = {
  document: PropTypes.object.isRequired
};

export default Document;

