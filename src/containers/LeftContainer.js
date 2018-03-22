import React from 'react'
import LeaderBoard from '../components/LeaderBoard'
import Bankroll from '../components/Bankroll'
import PokerBankroll from '../components/PokerBankroll'

class RightContainer extends React.Component {
  render() {
    return (
      <div className="leftSide">
        <LeaderBoard />
        <Bankroll />
        <PokerBankroll />
      </div>
    )
  }
}

export default RightContainer
