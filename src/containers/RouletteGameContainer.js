import React from 'react'
import NavBar from '../components/NavBar'
import Roulette from '../components/Roulette'

class RouletteGameContainer extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Roulette/>
      </div>
    )
  }
}

export default RouletteGameContainer
