import React from 'react'

class PlayerOptions extends React.Component {
  render() {
    const {clickHit, clickStand} = this.props

    return (
      <div className="playerOptions">
        <button onClick={clickHit}>HIT</button>
        <button onClick={clickStand}>STAND</button>
      </div>
    )
  }
}

export default PlayerOptions
