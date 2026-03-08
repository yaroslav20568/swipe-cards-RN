import React from 'react';
import { FlatList, View } from 'react-native';
import { persons } from '@/const';
import { Card } from '@/components/Card';
import { s } from './styles';
import { shuffleArray } from '@/lib';

const shuffledPersons = shuffleArray(persons);

export const CardsList = () => {
	return (
		<FlatList
			data={shuffledPersons}
			renderItem={({ item, index }) => (
				<View
					style={{
						position: 'absolute',
						top: index * -1,
						zIndex: 100 - index,
						transform: [{ scale: 1 - index * 0.02 }],
					}}>
					<Card {...item} />
				</View>
			)}
			keyExtractor={(item) => item.id.toString()}
			contentContainerStyle={s.containerRow}
			style={{ width: '100%', maxHeight: 397 }}
		/>
	);
};
