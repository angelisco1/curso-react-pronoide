import React from 'react'

const Sugus = ({color, sabor}) => {
  const styles = {
    backgroundColor: color,
    border: '1px solid black',
    width: '100px',
    height: '100px',
  }

  return (
    <div style={styles}>
      {sabor}
    </div>
  )
}

export default Sugus
