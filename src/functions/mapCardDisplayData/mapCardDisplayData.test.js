import { mapCardDisplayData } from "./mapCardDisplayData";

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

describe("mapCardDisplayData", () => {
	it("return all field", () => {
		const data = getMockData();
		const expectData = {
			id: data.id,
			image: data.imageUrl,
			name: data.name,
			hp: 100,
			str: 100,
			weak: 100,
			happy: 5,
		};
		expect(mapCardDisplayData(data)).toEqual(expectData);
	});
});
