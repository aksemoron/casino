import React from 'react'

class Card extends React.Component {

  render() {
    const { image } = this.props.card
    return(
      <div>
        <img src={image} width="210px" alt="" />
      </div>
    )
  }
}

export default Card
