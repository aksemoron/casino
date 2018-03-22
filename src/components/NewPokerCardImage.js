import React from 'react'
import {connect} from 'react-redux'
import {  } from '../actions/pokerActions'

class PokerCardImage extends React.Component{

  render() {
    const { image } = this.props.card
    return (
      <div>
       <img src={image} width="225px"  alt="" />
      </div>
      )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, { })(PokerCardImage)
