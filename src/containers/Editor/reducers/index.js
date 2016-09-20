import { combineReducers } from 'redux';

import document from './document';
import editorUI from './editorUI'
import * as documentActions from './documentActions';
import * as editorUIActions from './editorUIActions';

const reducer = combineReducers({
  document, editorUI
});

const actions = { ...documentActions, ...editorUIActions };

export { actions, reducer };

