import React from 'react'
import CardImage from './CardImage'
import {connect} from 'react-redux'

class Dealer extends React.Component {

  render() {
    const { dealer, dealerValue} = this.props
    let cards = dealer.map((card, index) => <CardImage key={card.code + index} card={card}  /> )

    return(
      <div className="dealerCards">
        <div className="dealerCardsValue">
          <h2>Dealer Value: {dealerValue} </h2>
        </div>
        <div className="dealerCardsImages">
          {cards}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dealer: state.blackjack.dealer, dealerValue: state.blackjack.dealerValue
  }
}

export default connect(mapStateToProps)(Dealer)
