import { ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface IProps {
	children: ReactNode;
}

export const AppLayout = ({ children }: IProps) => {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<ScrollView contentContainerStyle={styles.scrollContent}>{children}</ScrollView>
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
