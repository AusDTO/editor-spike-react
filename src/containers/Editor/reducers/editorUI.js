
import Immutable from 'seamless-immutable';
import * as editorUIActions from './editorUIActionTypes';
import * as documentActions from './documentActionTypes';

function initialState() {
  return Immutable({
    ministers: [
      {
        id: 1,
        name: "Senator the Hon Mitch Fifield",
        title: "Minister for Communications",
        image: "https://raw.githubusercontent.com/AusDTO/gov-au-images/master/ministers/mitch-fifield-260x140.png"
      },
      {
        id: 2,
        name: "Senator the Hon Fiona Nash",
        title: "Minister for Regional Communications",
        image: "https://raw.githubusercontent.com/AusDTO/gov-au-images/master/ministers/fiona-nash-260x140.jpg"
      }
    ],
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
