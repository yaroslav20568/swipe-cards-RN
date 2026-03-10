import React from 'react';
import { View, Text } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { s } from './styles';

export const EmptyData = () => {
	return (
		<View style={s.container}>
			<Text style={s.title}>No Persons</Text>
			<Fontisto name="persons" size={30} color="#fff" />
		</View>
	);
};
