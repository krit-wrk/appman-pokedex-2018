import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";

describe("App", () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
		// const { container } = render(<App />);
		// expect(container).toMatchSnapshot();
	});
});
