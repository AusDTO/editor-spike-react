import React, { Component, PropTypes } from 'react';
import DndItemTypes from './DndItemTypes';
import { DragSource, DropTarget } from 'react-dnd';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};

const blockSource = {
  beginDrag(props) {
    return {
      id: props.id,
      originalIndex: props.findBlock(props.id).index
    };
  },

  endDrag(props, monitor) {
    const { id: droppedId, originalIndex } = monitor.getItem();
    const didDrop = monitor.didDrop();

    if (!didDrop) {
      props.moveBlock(droppedId, originalIndex);
    }
  }
};


const blockTarget = {
  canDrop() {
    return true;
  },

  hover(props, monitor) {
    const { id: draggedId } = monitor.getItem();
    const { id: overId } = props;

    if (draggedId !== overId) {
      const { index: overIndex } = props.findBlock(overId);
      props.moveBlock(draggedId, overIndex);
    }
  }
};


class Block extends Component {
  render() {
    const { isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1;

    let { children } = this.props;
    return connectDragSource(connectDropTarget(
      <div style={{ ...style, opacity }}>
        { children }
      </div>
    ));
  }
}

Block.propTypes = {
  moveBlock: PropTypes.func.isRequired,
  findBlock: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};

export default DropTarget(DndItemTypes.BLOCK, blockTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))(DragSource(DndItemTypes.BLOCK, blockSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Block));

