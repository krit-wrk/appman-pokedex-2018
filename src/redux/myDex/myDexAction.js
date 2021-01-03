import actionType from "./myDexType";

const add = (card) => {
	return {
		type: actionType.Add,
		payload: card,
	};
};

const remove = (id) => {
	return {
		type: actionType.Remove,
		payload: id,
	};
};

const reset = () => {
	return {
		type: actionType.Reset,
	};
};

const actions =  { add, remove, reset }

export default actions;
