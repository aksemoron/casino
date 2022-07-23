import React from 'react'

const PokerCardImage = (props) => {

  const { image } = props.card
  return (
    <div>
     <img src={image} width="225px"  alt="" />
    </div>
    )
}

export default PokerCardImage
