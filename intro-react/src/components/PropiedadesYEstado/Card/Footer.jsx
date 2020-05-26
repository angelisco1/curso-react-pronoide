import React from 'react'
import Button from './Button'

const Footer = ({text1, text2}) => {
  return (
    <div>
      <Button text={text1} />
      <Button text={text2} />
    </div>
  )
}

export default Footer
