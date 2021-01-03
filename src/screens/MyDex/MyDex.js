import React, { useMemo, useCallback } from "react";
import { Card, Modal } from "../../components";
import { CardSearch } from "../";
import style from "./style";
import { css } from "aphrodite";
import { useDispatch, useSelector } from "react-redux";
import { myDexAction } from "../../redux";
import { RemoveButton } from "./RemoveButton";

const MyDex = () => {
	const dispatch = useDispatch();
	const { myDexDisplay } = useSelector((s) => s.myDex);
	const [isOpen, setOpen] = React.useState(false);

	const removeFromMyDex = useCallback(
		(id) => {
			dispatch(myDexAction.remove(id));
		},
		[dispatch],
	);


	const list = useMemo(() => {
		return myDexDisplay.map((c) => (
			<div key={c.id} className={css(style.card)}>
				<Card
					{...c}
					btn={<RemoveButton onClick={() => removeFromMyDex(c.id)} />}
				/>
			</div>
		));
	}, [myDexDisplay, removeFromMyDex]);

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
