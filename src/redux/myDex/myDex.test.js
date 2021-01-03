import myDexAction from "./myDexAction";
import myDexReducer from "./myDexReducer";

const getMockData = () => ({
	id: "1",
	imageUrl: "url",
	name: "Pikachu",
	hp: 110,
	attacks: [
		{ name: "attack A", damage: "20+" },
		{ name: "attack B", damage: "40x" },
	],
	weaknesses: [{ name: "weakness A" }],
});

describe("myDexStore", () => {
	it("init ok", () => {
		expect(myDexReducer(undefined, {})).toEqual({
			myDex: [],
			myDexDisplay: [],
		});
	});

	it("add ok", () => {
		const data = getMockData();
		const expectData = {
			myDex: [data],
			myDexDisplay: [
				{
					id: data.id,
					image: data.imageUrl,
					name: data.name,
					hp: 100,
					str: 100,
					weak: 100,
					happy: 5,
				},
			],
		};
		expect(myDexReducer(undefined, myDexAction.add(getMockData()))).toEqual(
			expectData,
		);
	});

	it("add dup ok", () => {
		const state = myDexReducer(undefined, myDexAction.add(getMockData()));
		expect(state.myDex.length).toEqual(1);
		expect(state.myDexDisplay.length).toEqual(1);
		const newState = myDexReducer(state, myDexAction.add(getMockData()));
		expect(newState.myDex.length).toEqual(1);
		expect(newState.myDexDisplay.length).toEqual(1);
	});

	it("remove ok", () => {
		const state = myDexReducer(undefined, myDexAction.add(getMockData()));
		expect(state.myDex.length).toEqual(1);
		expect(state.myDexDisplay.length).toEqual(1);
		const newState = myDexReducer(state, myDexAction.remove("1"));
		expect(newState.myDex.length).toEqual(0);
		expect(newState.myDexDisplay.length).toEqual(0);
	});
});
