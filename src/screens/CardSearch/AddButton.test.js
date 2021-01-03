import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AddButton } from "./AddButton";
import { StyleSheetTestUtils } from "aphrodite";
describe("AddButton", () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});
	it("renders without crashing", () => {
		const fn = jest.fn();
		const { container, getByText } = render(<AddButton onClick={fn} />);
		expect(container).toMatchSnapshot();
		fireEvent.click(getByText("Add"));
		expect(fn).toHaveBeenCalled();
	});
});
