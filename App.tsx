import { AppLayout, IGestureLayoutRef } from '@/ui';
import { Actions, CardsList, IAction } from '@/components';
import { useMemo, useRef } from 'react';

export default function App() {
	const cardsRef = useRef<IGestureLayoutRef>(null);

	const actions: Array<IAction> = useMemo(() => {
		return [
			{
				icon: { name: 'close', size: 24, color: '#EE204D' },
				onPress: () => cardsRef.current?.swipeLeft(),
			},
			{
				icon: { name: 'heart', size: 24, color: '#00CF00' },
				onPress: () => cardsRef.current?.swipeRight(),
			},
		];
	}, []);

	return (
		<AppLayout>
			<CardsList ref={cardsRef} />
			<Actions actions={actions} />
		</AppLayout>
	);
}
