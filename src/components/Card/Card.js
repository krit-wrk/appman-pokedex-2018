import React, { useMemo } from 'react'
import styles from './style.js'
import './style.css'
import { ProgressBar } from './..'
import cute from './../../assets/cute.png';
const Card = ({ image, name, hp, str, weak, happy, btn }) => {

    const happyList = useMemo(() => {
        const list = []
        for (let i = 1; i <= happy; i++) {
            list.push(<img key={i} style={styles.cuteImage} src={cute} alt="cute" />)
        }
        return list
    }, [happy])

    return (
        <div style={styles.container} className="component-card" >
            <img style={styles.image} src={image} alt={name} />
            <div style={styles.desc}>
                <div style={styles.name}>{name.toUpperCase()}</div>
                <div style={styles.descContainer}>
                    <div style={styles.descText}>HP</div>
                    <div style={styles.descBar}><ProgressBar value={hp} /></div>
                </div>
                <div style={styles.descContainer}>
                    <div style={styles.descText}>STR</div>
                    <div style={styles.descBar}><ProgressBar value={str} /></div>
                </div>
                <div style={styles.descContainer}>
                    <div style={styles.descText}>WEAK</div>
                    <div style={styles.descBar}><ProgressBar value={weak} /></div>
                </div>
                <div style={styles.cuteContainer}>
                    {happyList}
                </div>

            </div >
        </div >
    )
}
export { Card }