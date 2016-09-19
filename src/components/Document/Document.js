import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ContentEditable from 'react-contenteditable';

import CommonEditControls from '../CommonEditControls';
import Minister from '../Minister';
import Block from '../Block';

import DndItemTypes from './DndItemTypes';
import './Document.css';

class Document extends Component {

  moveBlock(id, atIndex) {
    let { block, index } = this.findBlock(id);

    let reorderedBlocks = update(this.props.blocks.asMutable(), {
      $splice: [
        [index, 1],
        [atIndex, 0, block]
      ]
    });

    this.props.onBlocksReordered(reorderedBlocks);
  }

  findBlock(id) {
    const { blocks } = this.props;
    const block = blocks.filter(c => c.id === id)[0];

    return {
      block,
      index: blocks.indexOf(block)
    };
  }

  render() {
    let { blocks } = this.props;
    return (
      <div className="Document">
        {
          blocks.map((block) => {
            return (
              <Block id={block.id} key={block.id} moveBlock={this.moveBlock.bind(this)} findBlock={this.findBlock.bind(this)}>
                <CommonEditControls
                  block={block}
                  onDeleteBlock={this.deleteBlock.bind(this)}
                  onChooseMinister={this.onChooseMinister.bind(this)}
                >
                  {
                    (block.kind === "Minister") ?
                      <Minister minister={block.minister}/>
                    :
                      <ContentEditable
                        tagName={block.kind}
                        html={block.content}
                        onChange={this.contentEditableChanged.bind(this, block.id)}
                      />
                  }
                </CommonEditControls>
              </Block>
            );
          })
        }
      </div>
    );
  }

  contentEditableChanged(blockId, event) {
    let { onBlockContentChanged } = this.props;
    onBlockContentChanged(blockId, event.target.value);
  }

  deleteBlock(block) {
    let { onBlockDeleted } = this.props;
    onBlockDeleted(block);
  }

  onChooseMinister(block) {
    let { onChooseMinister } = this.props;
    onChooseMinister(block);
  }
}

Document.propTypes = {
  blocks: PropTypes.array.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  onBlockContentChanged: PropTypes.func.isRequired,
  onBlocksReordered: PropTypes.func.isRequired,
  onBlockDeleted: PropTypes.func.isRequired,
  onChooseMinister: PropTypes.func.isRequired,
};

const blockTarget = {
  drop() {
  }
};

export default DragDropContext(HTML5Backend)(DropTarget(DndItemTypes.BLOCK, blockTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(Document));