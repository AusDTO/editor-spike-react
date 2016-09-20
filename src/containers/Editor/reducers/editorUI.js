
import Immutable from 'seamless-immutable';
import * as editorUIActions from './editorUIActionTypes';
import * as documentActions from './documentActionTypes';
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
    case editorUIActions.SHOW_MINISTER_CHOOSER:
      return state.updateIn(['ministerChooser', 'forBlock'], _ => action.block);
    case documentActions.SET_MINISTER:
      return state.updateIn(['ministerChooser', 'forBlock'], _ => null);
    default:
      return state;
  }
}
