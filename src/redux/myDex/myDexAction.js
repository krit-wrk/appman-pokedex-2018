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

export default { add, remove };
