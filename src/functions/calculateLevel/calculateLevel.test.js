import * as cal from "./calculateLevel";

describe("calculateLevel", () => {
	it("calHpLevel 120 ok", () => {
		expect(cal.calHpLevel({ hp: "120" })).toBe(100);
	});

	it("calHpLevel 60 ok", () => {
		expect(cal.calHpLevel({ hp: "60" })).toBe(0);
	});

	it("calHpLevel other ok", () => {
		expect(cal.calHpLevel({ hp: "other" })).toBe(0);
	});

	it("calSrtLevel 3 ok", () => {
		expect(
			cal.calSrtLevel({
				attacks: [
					{ name: "attack A", damage: "20+" },
					{ name: "attack B", damage: "40x" },
					{ name: "attack C", damage: "80a" },
				],
			}),
		).toBe(100);
	});

	it("calSrtLevel 2 ok", () => {
		expect(
			cal.calSrtLevel({
				attacks: [
					{ name: "attack A", damage: "20+" },
					{ name: "attack B", damage: "40x" },
				],
			}),
		).toBe(100);
	});

	it("calSrtLevel 1 ok", () => {
		expect(
			cal.calSrtLevel({
				attacks: [{ name: "attack A", damage: "20+" }],
			}),
		).toBe(50);
	});

	it("calSrtLevel empty ok", () => {
		expect(cal.calSrtLevel({})).toBe(0);
	});

	it("calWeakLevel empty ok", () => {
		expect(cal.calWeakLevel({})).toBe(0);
	});

	it("calWeakLevel 1 ok", () => {
		expect(
			cal.calWeakLevel({
				weaknesses: [{ name: "weakness A" }],
			}),
		).toBe(100);
	});

	it("calWeakLevel 2 ok", () => {
		expect(
			cal.calWeakLevel({
				weaknesses: [{ name: "weakness A" }, { name: "weakness B" }],
			}),
		).toBe(100);
	});

	it("calDmgLevel empty ok", () => {
		expect(cal.calDmgLevel({})).toBe(0);
	});

	it("calDmgLevel 3 ok", () => {
		expect(
			cal.calDmgLevel({
				attacks: [
					{ name: "attack A", damage: "20+" },
					{ name: "attack B", damage: "40x" },
					{ name: "attack C", damage: "80a" },
				],
			}),
		).toBe(140);
	});

	it("calHpyLevel ok", () => {
		expect(
			cal.calHpyLevel({
				name: "Pikachu",
				hp: 110,
				attacks: [
					{ name: "attack A", damage: "20+" },
					{ name: "attack B", damage: "40x" },
				],
				weaknesses: [{ name: "weakness A" }],
			}),
		).toEqual(5);
	});
});
