import React, { createContext, useContext, useState, useMemo } from 'react';
import { persons } from '@/const';
import { shuffleArray } from '@/lib';

interface ICardsContext {
	shuffledPersons: typeof persons;
	activeIndex: number;
	hasMoreCards: boolean;
	handleNextCard: () => void;
}

const CardsContext = createContext<ICardsContext | undefined>(undefined);

export const useCards = () => {
	const context = useContext(CardsContext);

	if (!context) {
		throw new Error('useCards must be used within a CardsProvider');
	}

	return context;
};

export const CardsProvider = ({ children }: { children: React.ReactNode }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const shuffledPersons = useMemo(() => shuffleArray([...persons]), []);

	const hasMoreCards = activeIndex < shuffledPersons.length;
	const handleNextCard = () => setActiveIndex((prev) => prev + 1);

	const value = useMemo(
		() => ({
			shuffledPersons,
			activeIndex,
			hasMoreCards,
			handleNextCard,
		}),
		[activeIndex, shuffledPersons, hasMoreCards],
	);

	return <CardsContext.Provider value={value}>{children}</CardsContext.Provider>;
};
