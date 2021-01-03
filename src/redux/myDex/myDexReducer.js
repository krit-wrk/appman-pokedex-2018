import actionType from "./myDexType";
import { calculateLevel } from "./../../functions";
const initState = {
	myDex: [],
	myDexDisplay: [],
};

const reducer = (state = initState, { type, payload }) => {
	switch (type) {
		case actionType.Add:
			if (state.myDex.find((d) => d.id === payload.id)) return state;
			else {
				const displayData = {
					id: payload.id,
					image: payload.imageUrl,
					name: payload.name,
					hp: calculateLevel.calHpLevel(payload),
					str: calculateLevel.calSrtLevel(payload),
					weak: calculateLevel.calWeakLevel(payload),
					happy: calculateLevel.calHpyLevel(payload),
				};
				return {
					myDex: [...state.myDex, payload],
					myDexDisplay: [...state.myDex, displayData],
				};
			}

		case actionType.Remove:
			return {
				myDex: state.myDex.filter((d) => d.id !== payload),
				myDexDisplay: state.myDexDisplay.filter((d) => d.id !== payload),
			};
		default:
			return state;
	}
};

export default reducer;
