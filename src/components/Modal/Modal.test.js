import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from "./Modal";
import { StyleSheetTestUtils } from "aphrodite";
describe("Modal", () => {
	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});
	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});
	it("renders without crashing", () => {
		const fn = jest.fn();
		const { getByText, getByTestId } = render(
			<Modal isOpen onClose={fn}>
				ASD
			</Modal>,
		);
		expect(getByText("ASD")).toBeInTheDocument();
		fireEvent.click(getByTestId("outsideModal"));
		expect(fn).toHaveBeenCalled();
	});
});
