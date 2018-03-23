import React from 'react'

class PokerTopContainer extends React.Component {
  render() {
    return (
      <div className="pokerPayout">
        <div className="pokerPayoutTitle panelHeader">
          Poker Pay Outs
        </div>
        <div className="pokerIndividualPayouts">
          <div>
            Royal Flush --- 800 to 1
          </div>
          <div>
            Straight Flush --- 50 to 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Straight --- 4 to 1
          </div>
          <div>
            Four Of a Kind --- 25 to 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Three of a Kind --- 3 to 1
          </div>
          <div>
            Full House --- 9 to 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Two Pair --- 2 to 1
          </div>
          <div>
            Flush --- 6 to 1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; One Pair --- 1 to 1
          </div>
        </div>
      </div>
    )
  }
}

export default PokerTopContainer
