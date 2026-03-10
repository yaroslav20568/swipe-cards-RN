import { useMemo, useRef } from 'react';
import { Text, View } from 'react-native';
import { AppLayout, IGestureLayoutRef } from '@/ui';
import { Actions, CardsList, IAction } from '@/components';
import { useCards, CardsProvider } from '@/lib';

function Main() {
	const cardsRef = useRef<IGestureLayoutRef>(null);
	const { hasMoreCards } = useCards();

	const actions: Array<IAction> = useMemo(
		() => [
			{
				icon: { name: 'close', size: 24, color: '#EE204D' },
				onPress: () => cardsRef.current?.swipeLeft(),
			},
			{
				icon: { name: 'heart', size: 24, color: '#00CF00' },
				onPress: () => cardsRef.current?.swipeRight(),
			},
		],
		[],
	);

	return (
		<AppLayout>
			{hasMoreCards ? (
				<>
					<CardsList ref={cardsRef} />
					<Actions actions={actions} />
				</>
			) : (
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ color: 'white', fontSize: 20 }}>No more cards</Text>
				</View>
			)}
		</AppLayout>
	);
}

export default function App() {
	return (
		<CardsProvider>
			<Main />
		</CardsProvider>
	);
}
