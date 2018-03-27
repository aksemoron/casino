import React from 'react'
import {connect} from 'react-redux'
import { topUsers } from '../actions/game'

class LeaderBoard extends React.Component {
  componentDidMount() {
    this.props.topUsers()
  }

  componentDidUpdate(prevProps, prevState) {
    this.props.topUsers()
  }

  sortLeaderBoard = (leaderBoard) => {
    return leaderBoard.sort(function(a,b){
      return b.bankroll - a.bankroll
    })
  }

  render() {
    const {leaderBoard} = this.props
    let sortedLeaderBoard = this.sortLeaderBoard(leaderBoard).slice(0,10)
    let rank = 1
    let leaders = sortedLeaderBoard.map(leader => {
      return <div key={leader.id} className="leaderScore">
        {rank++}.&nbsp;
        <span>
          {leader.username}:
        </span>&nbsp;
        <span style={{color:"green"}}>
          ${leader.bankroll}
        </span>
      </div>
    })
    return(
      <div className="leaderboard">
        <div className="panelHeader">
          Leaderboard
        </div>
        {leaders}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    leaderBoard: state.user.leaderBoard
  }
}

export default connect(mapStateToProps, {topUsers})(LeaderBoard)
