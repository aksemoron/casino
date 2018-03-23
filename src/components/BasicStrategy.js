import React from 'react'

class BasicStrategy extends React.Component {
  render() {
    return(
      <div className="playerHelp">
        <div className="panelHeader">
          Basic Strategy
        </div>
        <img src={require("../icons/blackjack.gif")} width="100%" height="450px" alt="what"/>
      </div>
    )
  }
}

export default BasicStrategy
