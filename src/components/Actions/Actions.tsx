import React, { ComponentProps } from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ActionButton } from './ActionButton';
import { s } from './styles';

type TAntDesignProps = ComponentProps<typeof AntDesign>;

export interface IAction {
	icon: TAntDesignProps;
	onPress: () => void;
}

interface IProps {
	actions: Array<IAction>;
}

export const Actions = ({ actions }: IProps) => {
	return (
		<View style={s.container}>
			{actions.map((action, index) => (
				<ActionButton key={index} action={action} />
			))}
		</View>
	);
};
