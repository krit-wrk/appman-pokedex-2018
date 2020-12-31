import myDexAction from "./myDexAction";
import myDexReducer from "./myDexReducer";
describe("myDexStore", () => {
	it("init ok", () => {
		expect(myDexReducer(undefined, {})).toEqual({ myDex: [] });
	});

	it("add ok", () => {
		expect(myDexReducer(undefined, myDexAction.add({ id: "01" }))).toEqual({
			myDex: [{ id: "01" }],
		});
	});

	it("add dup ok", () => {
		expect(
			myDexReducer(
				{
					myDex: [{ id: "01" }],
				},
				myDexAction.add({ id: "01" }),
			),
		).toEqual({
			myDex: [{ id: "01" }],
		});
	});

	it("remove ok", () => {
		expect(
			myDexReducer(
				{
					myDex: [{ id: "01" }],
				},
				myDexAction.remove("01"),
			),
		).toEqual({ myDex: [] });
	});
});
