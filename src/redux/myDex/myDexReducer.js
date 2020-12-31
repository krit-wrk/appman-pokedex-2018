import * as actionType from "./myDexType";

const initState = {
	myDex: [],
};

const reducer = (state = initState, { type, payload }) => {
	switch (type) {
		case actionType.Add:
			if (state.myDex.find((d) => d.id === payload.id)) return state;
			else
				return {
					myDex: [...state.myDex, payload],
				};
		case actionType.Remove:
			return {
				myDex: state.myDex.filter((d) => d.id !== payload),
			};
		default:
			return state;
	}
};

export default reducer;
