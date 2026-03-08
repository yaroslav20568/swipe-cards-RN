import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		gap: 10,
		marginTop: 15,
	},
	actionButton: {
		width: 50,
		height: 50,
		backgroundColor: '#fff',
		borderRadius: '50%',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
