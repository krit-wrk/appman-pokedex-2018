import React, { useMemo } from "react";
import { Card, Modal } from "../../components";
import { CardSearch } from "../";
import style from "./style";
import { css } from "aphrodite";
const MyDex = () => {
	const [isOpen, setOpen] = React.useState(false);

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
			<div className={css(style.titleContainer)}>My Pokedex</div>
			<div className={css(style.dexContainer)}>{list}</div>
			<div className={css(style.footer)}>
				<div className={css(style.add)} onClick={() => setOpen(true)}>
					+
				</div>
			</div>

			<Modal isOpen={isOpen} onClose={() => setOpen(false)}>
				<CardSearch />
			</Modal>
		</div>
	);
};

export { MyDex };
