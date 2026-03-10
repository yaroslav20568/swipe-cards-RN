import { useMemo, useRef } from 'react';
import { AppLayout, IGestureLayoutRef, EmptyData } from '@/ui';
import { Actions, CardsList, IAction } from '@/components';
import { useCards, CardsProvider } from '@/lib';

const Main = () => {
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
				<EmptyData />
			)}
		</AppLayout>
	);
};

export default function App() {
	return (
		<CardsProvider>
			<Main />
		</CardsProvider>
	);
}
