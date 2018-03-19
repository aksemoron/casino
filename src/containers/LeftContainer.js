import React from 'react'
import LeaderBoard from '../components/LeaderBoard'
import PlayerHelp from '../components/PlayerHelp'

class RightContainer extends React.Component {
  render() {
    return (
      <div className="leftSide">
        <LeaderBoard />
        <PlayerHelp />
      </div>
    )
  }
}

export default RightContainer
