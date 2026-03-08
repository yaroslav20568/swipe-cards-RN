import { ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

interface IProps {
	children: ReactNode;
}

export const AppLayout = ({ children }: IProps) => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<View>
					<LinearGradient
						colors={['#bd7078', '#3a2124', '#000000']}
						style={StyleSheet.absoluteFill}
					/>
					<ScrollView contentContainerStyle={styles.scrollContent}>{children}</ScrollView>
				</View>
				<StatusBar style="auto" />
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	scrollContent: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 15,
		paddingHorizontal: 20,
	},
});
