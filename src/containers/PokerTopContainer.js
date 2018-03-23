import React from 'react'

class PokerTopContainer extends React.Component {

  render() {
    return (
      <div className="pokerPayout">
        <div className="pokerPayoutTitle panelHeader">
          Poker Pay Outs
        </div>
        <div className="middlePokerPayouts">
          <div>
            <span className="payoutName">Full House</span> &nbsp;&nbsp;&nbsp; <span className="payoutNumbers">9 to 1</span>
          </div>
          <div>
            <span className="payoutName">Flush</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="payoutNumbers">6 to 1</span>
          </div>
          <div>
            <span className="payoutName">Straight</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="payoutNumbers">4 to 1</span>
          </div>
        </div>
        <div className="leftPokerPayouts">
          <div>
            <span className="payoutName">Royal Flush</span> &nbsp;&nbsp;&nbsp;&nbsp; <span className="payoutNumbers">800 to 1</span>
          </div>
          <div>
            <span className="payoutName">Straight Flush</span> &nbsp;&nbsp;&nbsp; <span className="payoutNumbers">50 to 1</span>
          </div>
          <div>
            <span className="payoutName">Four of a Kind</span> &nbsp;&nbsp; <span className="payoutNumbers">25 to 1</span>
          </div>
        </div>
        <div className="rightPokerPayouts">
          <div>
            <span className="payoutName">Three of a Kind</span> &nbsp;&nbsp;&nbsp; <span className="payoutNumbers">3 to 1</span>
          </div>
          <div>
            <span className="payoutName">Two Pair</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="payoutNumbers">2 to 1</span>
          </div>
          <div>
            <span className="payoutName">One Pair</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="payoutNumbers">1 to 1</span>
          </div>
        </div>
      </div>
    )
  }
}

export default PokerTopContainer
