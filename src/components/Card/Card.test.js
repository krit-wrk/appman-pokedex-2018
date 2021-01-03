import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";
import { StyleSheetTestUtils } from "aphrodite";
describe("Card", () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});
	it("renders without crashing", () => {
		const { getByText, container } = render(
			<Card image="1" name="2" hp="3" str="4" weak="5" happy="6" btn="X" />,
		);
		expect(container).toMatchSnapshot();
		fireEvent.mouseEnter(getByText("2"));
		const x = getByText("X");
		expect(x).toBeInTheDocument();
		expect(container).toMatchSnapshot();
		fireEvent.mouseLeave(getByText("2"));
		expect(x).not.toBeInTheDocument();
		expect(container).toMatchSnapshot();
	});
});
