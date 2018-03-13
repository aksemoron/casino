import React from 'react'
import Table from '../components/Table'
import NavBar from '../components/NavBar'

class GameContainer extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <div className="table" >
          <Table />
        </div>
      </div>
    )
  }
}



export default GameContainer
