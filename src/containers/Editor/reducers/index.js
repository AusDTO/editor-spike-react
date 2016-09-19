import { combineReducers } from 'redux';
import document from './document';
import editorUI from './editorUI'

export default combineReducers({
  document, editorUI
});
