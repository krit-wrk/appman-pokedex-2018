import React from 'react'
import { Card } from './components'
import styles from './style'

const App = () => {

  return (
    <div style={styles.app} >
      <div style={styles.titleContainer} >
        My Pokedex
      </div>
      <div style={styles.dexContainer}>
        <div style={styles.card}>
          <Card
            name="Deoxys ex"
            happy={3}
            hp={30}
            image={"https://images.pokemontcg.io/ex8/98.png"}
            str={40}
            weak={60} />
        </div>
      </div>

    </div>
  )

}

export default App
