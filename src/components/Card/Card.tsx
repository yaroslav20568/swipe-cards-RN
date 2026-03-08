import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { IPerson } from '@/types';
import { s } from './styles';

interface IProps extends Omit<IPerson, 'id'> {}

export const Card = ({ firstName, lastName, age, imageUrl, lastActivity }: IProps) => {
	return (
		<View style={s.container}>
			<Image source={{ uri: imageUrl }} style={s.image} />
			<View style={s.content}>
				<LinearGradient
					colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.9)']}
					style={StyleSheet.absoluteFill}
				/>
				<View style={s.infoWrapper}>
					<Text style={s.fullName}>
						{firstName} {lastName}
					</Text>
					<Text style={s.age}>{age}</Text>
				</View>
				<View style={s.statusWrapper}>
					<View style={s.statusIndicator}></View>
					<Text style={s.statusName}>{lastActivity}</Text>
				</View>
			</View>
		</View>
	);
};
