import React from 'react'
import {connect} from 'react-redux'

const CardImage = (props) => {
  const { image, value } = props.card
  return props.cardCounterOn ? (
    <div style={{color: value <= 6 ? "green" : value < 10 ? "grey" : "red"}}>
      <img className= "cardImage" src={image}  border="4px solid" width="205px"  alt="" />
    </div>
  )
  :
  (
   <div>
     <img className= "cardImage" src={image} width="205px"  alt="" />
   </div>
  )
}

const mapStateToProps = (state) => {
  return {cardCounterOn: state.blackjack.cardCounterOn}
}
export default connect(mapStateToProps)(CardImage)
