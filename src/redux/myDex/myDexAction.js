import * as actionType from "./myDexType";

export const add = (card) => {
	return {
		type: actionType.Add,
		payload: card,
	};
};

export const remove = (id) => {
	return {
		type: actionType.Remove,
		payload: id,
	};
};
