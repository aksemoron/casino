import React from 'react'
import LeaderBoard from '../components/LeaderBoard'
import Bankroll from '../components/Bankroll'

class RightContainer extends React.Component {
  render() {
    return (
      <div className="leftSide">
        <LeaderBoard />
        <Bankroll />
      </div>
    )
  }
}

export default RightContainer
