import React from 'react';
import { FlatList } from 'react-native';
import { persons } from '@/const';
import { Card } from '@/components/Card';
import { s } from './styles';

export const CardsList = () => {
	return (
		<FlatList
			data={persons}
			renderItem={({ item }) => <Card {...item} />}
			keyExtractor={(item) => item.id.toString()}
			contentContainerStyle={s.containerRow}
		/>
	);
};
