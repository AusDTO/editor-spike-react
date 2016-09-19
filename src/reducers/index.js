import { combineReducers } from 'redux';
import Document from './Document';
import UI from './UI'

export default combineReducers({
  document: Document,
  ui: UI 
})
