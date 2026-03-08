import { AppLayout } from '@/ui';
import { Actions, CardsList, IAction } from '@/components';

const actions: Array<IAction> = [
	{
		icon: { name: 'close', size: 24, color: '#EE204D' },
		onPress: () => {},
	},
	{
		icon: { name: 'heart', size: 24, color: '#00CF00' },
		onPress: () => {},
	},
];

export default function App() {
	return (
		<AppLayout>
			<CardsList />
			<Actions actions={actions} />
		</AppLayout>
	);
}
