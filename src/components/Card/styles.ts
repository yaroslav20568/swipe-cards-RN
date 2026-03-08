import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		borderWidth: 4,
		borderColor: '#fff',
		borderRadius: 16,
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		aspectRatio: 1.3,
	},
	content: {
		width: '100%',
		position: 'absolute',
		bottom: 0,
		paddingVertical: 10,
		paddingHorizontal: 15,
		overflow: 'hidden',
	},
	infoWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
		marginBottom: 2,
	},
	fullName: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 500,
	},
	age: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 700,
	},
	statusWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 6,
	},
	statusIndicator: {
		width: 10,
		height: 10,
		backgroundColor: '#00CF00',
		borderRadius: '50%',
	},
	statusName: {
		color: '#fff',
		fontSize: 16,
	},
});
