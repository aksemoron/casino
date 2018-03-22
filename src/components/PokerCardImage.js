import React from 'react'
import {connect} from 'react-redux'
import { addNewCard, removeNewCard } from '../actions/pokerActions'

class PokerCardImage extends React.Component{
  state ={
    clicked: false
  }

  clickCard = () => {
    if (!this.props.newPlayerCards.includes(this.props.card)) {
      this.setState({
        clicked: true
      })
      this.props.addNewCard(this.props.card)
    } else {
      this.setState({
        clicked: false
      })
      this.props.removeNewCard(this.props.card)
    }
  }

  render() {
    const { image } = this.props.card
    return this.state.clicked ? (
      <div>
        <img className= "clickedPokerCardImage" onClick={()=>this.clickCard()} src={image} width="225px" alt="" />
        <div className="heldCard">
          HELD
        </div>
      </div>
      )
      :
      (
      <div>
       <img onClick={()=>this.clickCard()} src={image} width="225px"  alt="" />
      </div>
      )
  }

}

const mapStateToProps = (state) => {
  return {
    newPlayerCards: state.poker.newPlayerCards
  }
}

export default connect(mapStateToProps, {addNewCard, removeNewCard })(PokerCardImage)
