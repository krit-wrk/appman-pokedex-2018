
import React from 'react'
import { Row, Col, Box } from './Layout'

export function Card(props) {
    const c = props.card
    return <div>
        <Row>

            <img width="100px" src={c.imageUrl} />
            <Box>
                <Col>
                    <label>  {c.name}</label>
                    <label>HP:{calHP(c)}</label>
                    <label>Strength:{calStrength(c)}</label>
                    <label>Weakness:{calWeakness(c)}</label>
                    {/* <label>calDamage:{calDamage(c)}</label> */}
                    <label>Happiness: {calHappiness(c)}</label>
                    <button onClick={_ => props.action(c)}>{props.btnDisplay}</button>
                </Col>
            </Box>
        </Row>


    </div>
}

function calHP(card) {
    const { hp } = card
    if (hp >= 100) return 100;
    if (hp <= 0) return 100;
    if (hp <= 100 && hp >= 0)
        return hp
    return 0
}

function calStrength(card) {
    const { attacks } = card
    var length = 0
    try {
        length = attacks.length
    } catch{ }

    if (length == 2) return 100;
    if (length == 1) return 50;
    return 0
}
function calWeakness(card) {
    const { weaknesses } = card

    var length = 0
    try {
        length = weaknesses.length
    } catch{ }


    if (length == 1) return 100;
    return 0
}
function calDamage(card) {
    const { attacks } = card
    var sum = 0
    if (Array.isArray(attacks))
        attacks.forEach(a => {
            var d = a.damage ? a.damage : 0
            sum += Math.abs(Number.parseInt(d))
        })
    return sum
}

function calHappiness(card) {
    return ((calHP(card) / 10) + (calDamage(card) / 10) + 10 - (calWeakness(card))) / 5
}
