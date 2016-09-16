
import Immutable from 'seamless-immutable';

function Store(state = Immutable({document: {blocks: []}}), action) {
  switch (action.type) {
    case 'appendBlock':
      return state.updateIn(['document', 'blocks'], list => list.concat(action.block));
    case 'updateBlockContent':
      // FIXME this is inherently unsafe. The blockIndex is only guaranteed to be
      // valid if there is only one action in the dispatch queue at a time.
      return state.updateIn(['document', 'blocks', action.blockIndex, 'content'], _ => action.newContent);
    default:
      console.warn("unknown action type ${action.type}");
      return state;
  }
}

export default Store;
