import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import { Modal } from './Modal'
import { CardSearch } from './CardSearch'
import { Card } from './Card'
const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {
  state = {
    isLoading: true,
    isOpenModal: false,
    cards: [],
    myDex: [],
    searchName: "",
    searchType: "",
  }

  toggleCardSearch = (e) => {
    this.setState(s => ({ isOpenModal: !s.isOpenModal }))

  }

  searchCard = async () => {
    let res = await axios.get(`http://localhost:3030/api/cards?name=${this.state.searchName}&type=${this.state.searchType}`)
    this.setState({ cards: res.data.cards })
  }

  addCard = (card) => {
    this.setState(s => ({ myDex: [...s.myDex, card] }))
  }
  removeCard = (card) => {
    this.setState(s => ({ myDex: s.myDex.filter(c => c.id != card.id) }))
  }

  inputChange = (name, val) => {
    this.setState({ [name]: val })
  }

  render() {

    return (
      <div className="App" style={{ overflowY: "scroll", height: "100%" }}>
        <button onClick={this.toggleCardSearch} >Add</button>
        <Modal isOpen={this.state.isOpenModal} toggle={this.toggleCardSearch} >
          <CardSearch searchCard={this.searchCard}
            cards={this.state.cards}
            addCard={this.addCard}
            myDex={this.state.myDex}
            inputChange={this.inputChange}
            searchType={this.state.searchType}
            searchName={this.state.searchName}
          />
        </Modal>
        {
          this.state.myDex.map(c => <Card key={c.id} card={c} action={this.removeCard} btnDisplay="Remove" inputChange={this.inputChange} />)
        }
      </div>
    )
  }
}

export default App
