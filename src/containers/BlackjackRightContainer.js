import React from 'react'
import Cardcount from '../components/Cardcount'
import BasicStrategy from '../components/BasicStrategy'

class BlackjackRightContainer extends React.Component {
  render() {
    return (
      <div className="rightSide">
        <Cardcount />
        <BasicStrategy />
      </div>
    )
  }
}

export default BlackjackRightContainer
