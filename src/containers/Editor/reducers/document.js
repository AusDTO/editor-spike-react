
import Immutable from 'seamless-immutable';

function initialState() {
  return Immutable({
    blocks: []
  });
};

function indexOfBlock(blocks, blockId) {
  return blocks.findIndex(block => block.id === blockId)
}

export default function document(state = initialState(), action) {
  switch (action.type) {
    case 'appendBlock':
      return state.updateIn(['blocks'], list => list.concat(action.block));
    case 'updateBlockContent':
      return state.updateIn([
        'blocks',
        indexOfBlock(state.blocks, action.blockId),
        'content'
      ], _ => action.newContent);
    case 'updateBlockOrder':
      return state.updateIn(['blocks'], _ => action.blocks);
    case 'deleteBlock':
      return state.updateIn(['blocks'], list => list.filter(block => block.id !== action.block.id));
    case 'ministerChosen':
      return state.updateIn(['blocks'], list =>
        list.map(block => {
          if (block.id === action.block.id) {
            return block.updateIn(['minister'], _ => action.minister);
          } else {
            return block;
          }
        })
      );
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
