import React from "react";
import { Provider } from "react-redux";
import { MyDex } from "./screens";
import { store } from "./redux";
import "./app.css";
const App = () => {
	return (
		<Provider store={store}>
			<div className="app">
				<MyDex />
			</div>
		</Provider>
	);
};

export default App;
