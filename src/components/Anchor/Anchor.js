import React from 'react'
import ContentEditable from 'react-contenteditable';

const Anchor = ({ block, onChange }) => {
  const { type, content, href = '#' } = block

  return (
    <a
      onChange={onChange}
      contentEditable="true"
      className={type === 'seemore' ? 'see-more' : ''}
      href={href}>
      {content}
    </a>
  )
}

export default Anchor
