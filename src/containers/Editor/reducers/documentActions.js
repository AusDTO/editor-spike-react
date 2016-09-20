import uuid from 'uuid';

import * as t from './documentActionTypes';
import imgPlaceholder from '../../../components/Minister/img-placeholder.gif'

function makeBlock(kind, attrs) {
  return { id: uuid.v4(), kind, ...attrs };
}

function blurb() {
  return "The Digital Transformation Office (DTO) was established as an executive agency in July 2015. Its mission is to lead the […]";
}

export const SIMPLE_BLOCKS = ["h1", "h2", "h3", "p", "blockquote"];

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
      case "ColumnList":
        return {
          type: t.APPEND_BLOCK,
          block: makeBlock("ColumnList", { columns: [
            {heading: "List item 1", content: blurb() },
            {heading: "List item 2", content: blurb() },
            {heading: "List item 3", content: blurb() },
          ]})
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

