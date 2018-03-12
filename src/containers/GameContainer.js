import React from 'react'
import Table from '../components/Table'

class GameContainer extends React.Component {
  state = {
    dealer: [],
    dealerValue: "",
    player: [],
    playerValue: "",
    started: false,
    deckId: "",
    remaining: "",
    dealt: false,
    stand: false,
  }

  startGame = () => {
    fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(res=>res.json())
    .then(json => this.setState({
      deckId: json.deck_id,
      remaining: json.remaining,
      started: true
    }))
  }

  dealCards = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=3`)
    .then(res=>res.json())
    .then(json => this.setState({
      dealer: json.cards.slice(0,1),
      dealerValue: this.getValue(json.cards.slice(0,1)),
      player: json.cards.slice(1,3),
      playerValue: this.getValue(json.cards.slice(1,3)),
      remaining: json.remaining,
      dealt: true,
      stand: false
    }))
  }

  clickHit = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`)
    .then(res=>res.json())
    .then(json => this.setState({
      player: [...this.state.player, json.cards[0]],
      playerValue: this.getValue([...this.state.player, json.cards[0]]),
      remaining: json.remaining
    }))
  }

  cardValues = { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8,
                 '9': 9, '10': 10, 'JACK': 10, 'QUEEN': 10, 'KING': 10, 'ACE': 11}

  getValue = (cards) =>{
    let count = 0
    let mappedCards = cards.map(card => card.value)
    cards.forEach(card => {count += this.cardValues[card.value]})
    if (mappedCards.includes("ACE") && count > 21) {
      count -= (10 * mappedCards.filter(card => {return card === "ACE"}).length)
    }
    return count
  }

  clickStand = () => {
    this.setState({
      stand: true,
    }, () => {
      this.checkDealer()
    })
  }

  checkDealer = () => {
    if (this.state.dealerValue < 16) {
      fetch(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/?count=1`)
      .then(res=>res.json())
      .then(json => this.setState({
        dealer: [...this.state.dealer, json.cards[0]],
        remaining: json.remaining,
        dealerValue: this.getValue([...this.state.dealer, json.cards[0]])
      }, () => {
        this.checkDealer()
      }))
    }
  }

  render() {
    return (
      <div>
        <Table deck={this.state.deck} remaining={this.state.remaining} started = {this.state.started}
              dealCards ={this.dealCards} dealt={this.state.dealt} startGame={this.startGame}
              dealer={this.state.dealer} dealerValue={this.state.dealerValue}
              player={this.state.player} playerValue={this.state.playerValue}  clickHit={this.clickHit}
              clickStand={this.clickStand} stand={this.state.stand}/>
      </div>
    )
  }
}

export default GameContainer
