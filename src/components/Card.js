import React from 'react'

class Card extends React.Component {

  render() {
    const { value, image } = this.props.card
    return(
      <div>
        <h3>{value}</h3>
        <img src={image} width="150px" alt="" />
      </div>
    )
  }
}

export default Card
