
import Immutable from 'seamless-immutable';

function indexOfBlock(blocks, blockId) {
  return blocks.findIndex(block => block.id === blockId)
}

function Store(state = Immutable({document: {blocks: []}}), action) {
  switch (action.type) {
    case 'appendBlock':
      return state.updateIn(['document', 'blocks'], list => list.concat(action.block));
    case 'updateBlockContent':
      return state.updateIn([
        'document',
        'blocks',
        indexOfBlock(state.document.blocks, action.blockId),
        'content'
      ], _ => action.newContent);
    case 'updateBlockOrder':
      return state.updateIn(['document', 'blocks'], _ => action.blocks);
    case 'deleteBlock':
      return state.updateIn(['document', 'blocks'], list => list.filter(block => block.id !== action.block.id));
    default:
      console.warn(`unknown action type ${action.type}`);
      return state;
  }
}

/*

State looks like this:

{
  document: {
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
}


*/

export default Store;
