
import Immutable from 'seamless-immutable';

function Store(state = Immutable({document: {blocks: []}}), action) {
  switch (action.type) {
    case 'appendBlock':
      return state.updateIn(['document', 'blocks'], list => list.concat(action.block));
    case 'updateBlockContent':
      // NOTE: referencing blocks by index would be prone to race conditions in a collaborative editing scenario.
      // An insert from one editor applied before an update from another editor would shift the index.
      return state.updateIn(['document', 'blocks', action.blockIndex, 'content'], _ => action.newContent);
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
        type: "p",
        content: "hi there!"
      },
      {
        type: "p",
        content: "how are you?"
      },
    ]
  }
}


*/

export default Store;
