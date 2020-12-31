import { createStore, combineReducers } from "redux";

import myDexReducer from "./myDex/myDexReducer";

const rootReducer = combineReducers({
	myDex: myDexReducer,
});

const store = createStore(rootReducer);

export default store;
