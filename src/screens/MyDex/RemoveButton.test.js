import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { RemoveButton } from "./RemoveButton";
import { StyleSheetTestUtils } from "aphrodite";
describe("RemoveButton", () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});
	it("renders without crashing", () => {
		const fn = jest.fn();
		const { container, getByText } = render(<RemoveButton onClick={fn} />);
		expect(container).toMatchSnapshot();
		fireEvent.click(getByText("X"));
		expect(fn).toHaveBeenCalled();
	});
});
