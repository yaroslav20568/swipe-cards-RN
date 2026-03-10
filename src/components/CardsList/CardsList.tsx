import React, { Ref } from 'react';
import { View } from 'react-native';
import { Card } from '@/components/Card';
import { s } from './styles';
import { useCards } from '@/lib';
import { GestureLayout, IGestureLayoutRef } from '@/ui';

interface IProps {
	ref: Ref<IGestureLayoutRef>;
}

export const CardsList = ({ ref }: IProps) => {
	const { shuffledPersons, activeIndex, handleNextCard } = useCards();

	return (
		<View style={[s.containerRow, { width: '100%', height: 340 }]}>
			{shuffledPersons.map((item, index) => {
				if (index < activeIndex || index > activeIndex + 3) {
					return null;
				}

				const isTopCard = index === activeIndex;
				const displayIndex = index - activeIndex;

				return (
					<View
						key={item.id}
						style={{
							position: 'absolute',
							top: displayIndex * 15,
							zIndex: 100 - index,
							transform: [{ scale: Math.max(1 - displayIndex * 0.02, 0) }],
						}}>
						<GestureLayout
							ref={isTopCard ? ref : null}
							onSwipeLeft={handleNextCard}
							onSwipeRight={handleNextCard}>
							<Card {...item} />
						</GestureLayout>
					</View>
				);
			})}
		</View>
	);
};
