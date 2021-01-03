import { calculateLevel } from "../";

export const mapCardDisplayData = (card) => ({
	id: card.id,
	image: card.imageUrl,
	name: card.name,
	hp: calculateLevel.calHpLevel(card),
	str: calculateLevel.calSrtLevel(card),
	weak: calculateLevel.calWeakLevel(card),
	happy: calculateLevel.calHpyLevel(card),
});
