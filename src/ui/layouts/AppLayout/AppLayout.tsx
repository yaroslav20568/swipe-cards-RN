import { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { s } from './styles';

interface IProps {
	children: ReactNode;
}

export const AppLayout = ({ children }: IProps) => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={s.container}>
				<View style={s.viewWrapper}>
					<LinearGradient
						colors={['#bd7078', '#6d5053', '#5c3236']}
						style={StyleSheet.absoluteFill}
					/>
					<ScrollView contentContainerStyle={s.scrollContent}>{children}</ScrollView>
				</View>
				<StatusBar style="auto" />
			</SafeAreaView>
		</SafeAreaProvider>
	);
};
