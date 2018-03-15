import React from 'react'
import {connect} from 'react-redux'
import {clickHit, clickStand} from '../actions/game'

class PlayerOptions extends React.Component {
  render() {
    const {clickHit, clickStand, deckId} = this.props

    return (
      <div className="playerOptions">
        <div className="hitButton">
          <img onClick={() => clickHit(deckId)} width="100px" src="http://www.clker.com/cliparts/3/q/w/6/w/U/sword-hi.png" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;
          <span className="tooltiptext">HIT!</span>
        </div>
        <div className="standButton">
          <img onClick={() => clickStand()} width="120px" src="http://pngimg.com/uploads/shield/shield_PNG1268.png?i=1" alt=""/>
          <span className="tooltiptext">STAND!</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    deckId: state.deckId, dealerValue: state.dealerValue, playerValue: state.playerValue
  }
}

export default connect(mapStateToProps, {clickHit, clickStand})(PlayerOptions)
