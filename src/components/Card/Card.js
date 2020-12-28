import React, { useMemo } from 'react'
import style from './style.js'
import { css } from 'aphrodite'
import { ProgressBar } from './..'
import cute from './../../assets/cute.png';
const Card = ({ image, name, hp, str, weak, happy, btn }) => {

    const happyList = useMemo(() => {
        const list = []
        for (let i = 1; i <= happy; i++) {
            list.push(<img key={i} className={css(style.cuteImage)} src={cute} alt="cute" />)
        }
        return list
    }, [happy])

    return (
        <div className={css(style.container)} >
            <img className={css(style.image)} src={image} alt={name} />
            <div className={css(style.desc)}>
                <div className={css(style.name)}>{name.toUpperCase()}</div>
                <div className={css(style.descContainer)}>
                    <div className={css(style.descText)}>HP</div>
                    <div className={css(style.descBar)}><ProgressBar value={hp} /></div>
                </div>
                <div className={css(style.descContainer)}>
                    <div className={css(style.descText)}>STR</div>
                    <div className={css(style.descBar)}><ProgressBar value={str} /></div>
                </div>
                <div className={css(style.descContainer)}>
                    <div className={css(style.descText)}>WEAK</div>
                    <div className={css(style.descBar)}><ProgressBar value={weak} /></div>
                </div>
                <div className={css(style.cuteContainer)}>
                    {happyList}
                </div>

            </div >
        </div >
    )
}
export { Card }