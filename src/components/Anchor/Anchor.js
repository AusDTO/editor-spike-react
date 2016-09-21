import React from 'react'

const Anchor = ({ block, onChange }) => {
  const { type, content, href = '#' } = block

  return (
    <a
      onChange={onChange}
      contentEditable="true"
      className={type === 'seemore' ? 'see-more' : ''}
      href={href}
      dangerouslySetInnerHTML={{__html: content}}>
    </a>
  )
}

export default Anchor
