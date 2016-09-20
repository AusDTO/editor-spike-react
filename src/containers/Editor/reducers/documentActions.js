import uuid from 'uuid';

import * as t from './documentActionTypes';
import imgPlaceholder from '../../../components/Minister/img-placeholder.gif'

const SIMPLE_BLOCKS = ["h1", "h2", "h3", "p", "blockquote"];

function makeBlock(kind, attrs) {
  return { id: uuid.v4(), kind, ...attrs };
}

export const appendBlock = (blockKind) => {
  if (SIMPLE_BLOCKS.includes(blockKind)) {
    return {
      type: t.APPEND_BLOCK,
      block: makeBlock(blockKind, {content: "Lorem ipsum..."})
    };
  } else {
    switch (blockKind) {
      case "Minister":
        return {
          type: t.APPEND_BLOCK,
          block: makeBlock(blockKind, {
            image: imgPlaceholder,
            name: "[Placeholder name]",
            title: "[Placeholder title]"
          })
        };
      default:
        console.warn(`Unknown block kind ${blockKind}`);
    }
  }
};

export const updateBlockContent = (blockId, newContent) => ({
  type: t.UPDATE_BLOCK_CONTENT,
  blockId,
  newContent
});

export const updateBlockOrder = (blocks) => ({
  type: t.UPDATE_BLOCK_ORDER,
  blocks
});

export const deleteBlock = (block) => ({
  type: t.DELETE_BLOCK,
  block
});

export const setMinister = (block, minister) => ({
  type: t.SET_MINISTER,
  block,
  minister
});

