
import Immutable from 'seamless-immutable';

function Store(state = Immutable({document: {blocks: []}}), action) {
  switch (action.type) {
    case 'appendBlock':
      return state.updateIn(['document', 'blocks'], list => list.concat(action.block));
    case 'updateBlockContent':
      return state.updateIn(['document', 'blocks', action.blockIndex, 'content'], _ => action.newContent);
    default:
      return state;
  }
}

export default Store;
