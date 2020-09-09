import React from 'react'
import { Row, Col, Box } from './Layout'
import {Card} from './Card'
export function CardSearch(props) {
	const { myDex, cards } = props;

	const cardfiltered = cards.filter(c => {
		var f = myDex.find(m => m.id == c.id)
		if (f) return false
		else return true
	})
	return (
		<div style={{
			backgroundColor: "#FFFFFF",
			width: "700px",
			height: "100%",
			overflowY: "scroll"
		}}>
			<Row>
				<label>Name</label> <input onChange={({target:{value}})=>props.inputChange("searchName",value)} value={props.searchName}/>
				<label>Type</label> <input onChange={({target:{value}})=>props.inputChange("searchType",value)} value={props.searchType}/>
				<button onClick={props.searchCard}>Search</button>
			</Row>
			{
				cardfiltered.map(c => <Card key={c.id} card={c} action={props.addCard} btnDisplay="Add" />)
			}
		</div>
	)
}


