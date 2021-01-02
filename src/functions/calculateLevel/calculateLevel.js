export const calHpLevel = (card) => {
	if (card.hp >= 100) return 100;
	else return 0;
};

export const calSrtLevel = (card) => {
	const attacks = card.attacks || [];
	const atkLength = attacks.length;
	const atkValue = atkLength * 50;
	if (atkValue >= 100) return 100;
	else return atkValue;
};
export const calWeakLevel = (card) => {
	const weaknesses = card.weaknesses || [];
	const weakLength = weaknesses.length;
	const weakValue = weakLength * 100;
	if (weakValue >= 100) return 100;
	else return weakValue;
};
export const calDmgLevel = (card) => {
	const attacks = card.attacks || [];
	return attacks.reduce(
		(s, v) => s + Math.abs(Number.parseInt(v.damage, 10)),
		0,
	);
};

export const calHpyLevel = (card) => {
	return Math.round(
		(calHpLevel(card) / 10 +
			calDmgLevel(card) / 10 +
			10 -
			calWeakLevel(card) / 100) /
			5,
	);
};
