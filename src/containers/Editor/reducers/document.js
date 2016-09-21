
import Immutable from 'seamless-immutable';
import * as actions from './documentActionTypes';

function initialState() {
  return Immutable({
    blocks: [],
    configure: {}
  });
};

function indexOfBlock(blocks, blockId) {
  return blocks.findIndex(block => block.id === blockId)
}

export default function document(state = initialState(), action) {
  switch (action.type) {
    case actions.APPEND_BLOCK:
      return state.updateIn(['blocks'], list => list.concat(action.block));
    case actions.UPDATE_BLOCK_CONTENT:
      return state.updateIn([
        'blocks',
        indexOfBlock(state.blocks, action.blockId),
        'content'
      ], _ => action.newContent);
    case actions.UPDATE_BLOCK_PROPERTY:
      return state.updateIn([
        'blocks',
        indexOfBlock(state.blocks, action.blockId),
        action.prop
      ], _ => action.propValue);
    case actions.UPDATE_BLOCK_ORDER:
      return state.updateIn(['blocks'], _ => action.blocks);
    case actions.DELETE_BLOCK:
      return state.updateIn(['blocks'], list => list.filter(block => block.id !== action.block.id));
    case actions.SET_MINISTER:
      return state.updateIn(['blocks'], list =>
        list.map(block => {
          if (block.id === action.block.id) {
            let { image, name, title } = action.minister;
            return { ...block, image, name, title };
          } else {
            return block;
          }
        })
      );
    case actions.CONFIGURE_BLOCK:
      return state.updateIn(['configure'], _ => action.blockId)
    default:
      return state;
  }
}

/*

State looks like this:

{
  blocks: [
    {
      id: "e458faf3-e21f-4bc1-8949-d6bb26d4e93b",
      type: "p",
      content: "hi there!"
    },
    {
      id: "e458faf3-e21f-4bc1-8949-d6bb26d4e73a",
      type: "p",
      content: "how are you?"
    },
  ]
}


*/
