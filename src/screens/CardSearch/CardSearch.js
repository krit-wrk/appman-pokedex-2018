import React, { useMemo } from "react";
import { Card } from "../../components";
import style from "./style";
import { css } from "aphrodite";
import { COLORS } from "../../constants";
import search from "./../../assets/search.png";
const CardSearch = () => {
	const list = useMemo(() => {
		let l = [];
		for (let i = 0; i < 100; i++) {
			l.push(
				<div className={css(style.card)}>
					<Card
						name="Deoxys ex"
						happy={3}
						hp={30}
						image={"https://images.pokemontcg.io/ex8/98.png"}
						str={40}
						weak={90}
					/>
				</div>,
			);
		}
		return l;
	}, []);

	return (
		<div className={css(style.container)}>
			<div className={css(style.titleContainer)}>
				<input placeholder="Find pokemon" className={css(style.seacrhInput)} />
				<img src={search} alt="search" className={css(style.seacrhImg)} />
			</div>
			<div className={css(style.cardListContainer)}>{list}</div>
		</div>
	);
};

export { CardSearch };
