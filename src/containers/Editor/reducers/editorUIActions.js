
import * as t from './editorUIActionTypes';

export const showMinisterChooser = (block) => ({
  type: t.SHOW_MINISTER_CHOOSER,
  block
});

export const hideMinisterChooser = () => ({
  type: t.HIDE_MINISTER_CHOOSER
});
