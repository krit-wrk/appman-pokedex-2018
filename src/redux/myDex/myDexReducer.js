import actionType from "./myDexType";
import { mapCardDisplayData } from "./../../functions";
const initState = {
	myDex: [],
	myDexDisplay: [],
};

const reducer = (state = initState, { type, payload }) => {
	switch (type) {
		case actionType.Add:
			if (state.myDex.find((d) => d.id === payload.id)) return state;
			else {
				const displayData = mapCardDisplayData(payload);
				return {
					myDex: [...state.myDex, payload],
					myDexDisplay: [...state.myDexDisplay, displayData],
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
