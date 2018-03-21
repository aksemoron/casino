import React from 'react'
import {connect} from 'react-redux'

const PokerCardImage = (props) => {
  const { image, value } = props.card
  return (
   <div>
     <img className= "cardImage" src={image} width="190px"  alt="" />
   </div>
  )
}

const mapStateToProps = (state) => {
}

export default connect(mapStateToProps)(PokerCardImage)
