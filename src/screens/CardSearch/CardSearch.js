import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import _ from "lodash";
import axios from "axios";
import { APIS } from "./../../constants";
import { Card } from "../../components";
import style from "./style";
import { css } from "aphrodite";
import search from "./../../assets/search.png";
import { mapCardDisplayData } from "../../functions";
import { AddButton } from "./AddButton";
import { useDispatch, useSelector } from "react-redux";
import { myDexAction } from "../../redux";

const CardSearch = () => {
	const dispatch = useDispatch();
	const { myDex } = useSelector((s) => s.myDex);
	const [searchValue, setSearchValue] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [isEmpty, setIsEmpty] = useState(false);
	const [cardList, setCardList] = useState([]);
	const [cardListDisplay, setCardListDisplay] = useState([]);

	const addToMyDex = useCallback(
		(card) => {
			const data = cardList.find((d) => d.id === card.id);
			dispatch(myDexAction.add(data));
		},
		[dispatch, cardList],
	);

	const searchCard = useCallback(async (query) => {
		setIsLoading(true);
		setCardList([]);
		setCardListDisplay([]);
		try {
			const res = await axios.get(`${APIS.cards}?query=${query}`);
			setCardList(res.data.cards);
		} catch (ex) {
			console.error("searchCard Error", ex);
		} finally {
			setIsLoading(false);
		}
	}, []);

	const debounceSearchCard = useCallback(_.debounce(searchCard, 250), [
		searchCard,
	]);

	useEffect(() => {
		debounceSearchCard(searchValue);
	}, [searchValue, debounceSearchCard]);

	useEffect(() => {
		if (cardList.length > 0) {
			const removedup = cardList.filter(
				(c) => !myDex.find((m) => m.id === c.id),
			);
			setCardListDisplay(removedup.map(mapCardDisplayData));
			setIsEmpty(false);
		} else {
			setCardListDisplay([]);
			setIsEmpty(true);
		}
	}, [cardList, myDex]);

	const list = useMemo(() => {
		return cardListDisplay.map((c) => (
			<div key={c.id} className={css(style.card)}>
				<Card {...c} btn={<AddButton onClick={() => addToMyDex(c)} />} />
			</div>
		));
	}, [cardListDisplay, addToMyDex]);

	return (
		<div className={css(style.container)}>
			<div className={css(style.titleContainer)}>
				<input
					placeholder="Find pokemon"
					className={css(style.seacrhInput)}
					value={searchValue}
					onChange={({ target: { value } }) => setSearchValue(value)}
				/>
				<img
					src={search}
					alt="search"
					className={css(style.seacrhImg)}
					onClick={() => searchCard(searchValue)}
				/>
			</div>
			{isLoading && (
				<div className={css(style.EmptyContainer)}>
					<div className={css(style.EmptyText)}>Searching...</div>
				</div>
			)}
			{!isLoading && isEmpty && (
				<div className={css(style.EmptyContainer)}>
					<div className={css(style.EmptyText)}>No search results found</div>
				</div>
			)}
			{!isLoading && !isEmpty && (
				<div className={css(style.cardListContainer)}>{list}</div>
			)}
		</div>
	);
};

export { CardSearch };
