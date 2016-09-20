
import Immutable from 'seamless-immutable';
import * as actions from './editorUIActionTypes';
import { ministers } from './dummyData';

function initialState() {
  return Immutable({
    ministers: ministers,
    ministerChooser: {
      forBlock: null
    }
  });
}

export default function ui(state = initialState(), action) {
  switch (action.type) {
    case actions.SHOW_MINISTER_CHOOSER:
      return state.updateIn(['ministerChooser', 'forBlock'], _ => action.block);
    case actions.HIDE_MINISTER_CHOOSER:
      return state.updateIn(['ministerChooser', 'forBlock'], _ => null);
    default:
      return state;
  }
}
