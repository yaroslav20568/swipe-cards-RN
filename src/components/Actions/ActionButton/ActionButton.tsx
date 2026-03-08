import React, { useRef } from 'react';
import { Pressable, Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { IAction } from '@/components';
import { s } from './styles';

interface IProps {
	action: IAction;
}

export const ActionButton = ({ action }: IProps) => {
	const scale = useRef(new Animated.Value(1)).current;

	const handlePressIn = () => {
		Animated.spring(scale, {
			toValue: 0.9,
			useNativeDriver: true,
		}).start();
	};

	const handlePressOut = () => {
		Animated.spring(scale, {
			toValue: 1,
			friction: 3,
			tension: 40,
			useNativeDriver: true,
		}).start();
	};

	return (
		<Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={action.onPress}>
			<Animated.View
				style={[s.actionButton, { transform: [{ scale }], borderColor: action.icon.color }]}>
				<AntDesign {...action.icon} />
			</Animated.View>
		</Pressable>
	);
};
