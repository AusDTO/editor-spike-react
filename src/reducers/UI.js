
import Immutable from 'seamless-immutable';

function initialState() {
  return Immutable({
    ministerChooser: {}
  });
}

export default function UI(state = initialState(), action) {
  switch (action.type) {
    case 'showMinisterChooser':
      return state;
    default:
      return state;
  }
}
