import React from 'react'

const Anchor = ({ block }) => {
  const { type, content, href = '#' } = block
  switch (type) {
    case 'seemore':
      return (
        <a className="see-more" href={href}>{content}</a>
      )
    default:
      return (
        <a href={href}>{content}</a>
      )
  }
}

export default Anchor
