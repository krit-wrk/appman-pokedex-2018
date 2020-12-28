import React from 'react'
import { Card } from './components'
import style from './style'
import { css } from 'aphrodite'
const App = () => {

  return (
    <div className={css(style.app)} >
      <div className={css(style.titleContainer)} >
        My Pokedex
      </div>
      <div className={css(style.dexContainer)}>
        <div className={css(style.card)}>
          <Card
            name="Deoxys ex"
            happy={3}
            hp={30}
            image={"https://images.pokemontcg.io/ex8/98.png"}
            str={40}
            weak={90} />
        </div>
      </div>

    </div>
  )

}

export default App
