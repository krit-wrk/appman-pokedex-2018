import React from 'react'
import { Card } from '../../components'
import style from './style'
import { css } from 'aphrodite'
import { Modal } from "react-responsive-modal";
const MyDex = () => {
    const [isOpen, setIsOpen] = React.useState(false);


    return (
        <div className={css(style.container)} >

            <div onClick={() => setIsOpen(true)} className={css(style.titleContainer)} >
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

            <Modal
                styles={{
                    modal: { margin: 0, padding: 0 }
                }}
                open={isOpen}
                onClose={setIsOpen}
                showCloseIcon={false}

            >
                <div className={css(style.card)}>
                    <Card
                        name="Deoxys ex"
                        happy={3}
                        hp={30}
                        image={"https://images.pokemontcg.io/ex8/98.png"}
                        str={40}
                        weak={90} />
                </div>
            </Modal>

        </div>
    )

}

export { MyDex }
