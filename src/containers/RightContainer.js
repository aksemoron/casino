import React from 'react'
import Bankroll from '../components/Bankroll'
import Cardcount from '../components/Cardcount'

class RightContainer extends React.Component {
  render() {
    return (
      <div className="rightSide">
        <Cardcount />
        <Bankroll />
      </div>
    )
  }
}

export default RightContainer
