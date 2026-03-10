import React, { ReactNode, Ref, useImperativeHandle } from 'react';
import { Dimensions } from 'react-native';
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withSpring,
	runOnJS,
	interpolate,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

const { width } = Dimensions.get('screen');
const SWIPE_THRESHOLD = width * 0.3;

export interface IGestureLayoutRef {
	swipeLeft: () => void;
	swipeRight: () => void;
}

interface IProps {
	children: ReactNode;
	ref: Ref<IGestureLayoutRef>;
	isTopCard: boolean;
	onSwipeLeft?: () => void;
	onSwipeRight?: () => void;
}

export const GestureLayout = ({ children, ref, onSwipeLeft, isTopCard, onSwipeRight }: IProps) => {
	const isSwiping = useSharedValue(false);
	const translateX = useSharedValue(0);
	const translateY = useSharedValue(0);

	const swipe = (direction: 'left' | 'right') => {
		if (isSwiping.value) return;
		isSwiping.value = true;

		const targetX = direction === 'right' ? width * 1.5 : -width * 1.5;
		const callback = direction === 'right' ? onSwipeRight : onSwipeLeft;

		translateX.value = withSpring(targetX, { velocity: 10 }, (finished) => {
			if (finished && callback) {
				runOnJS(callback)();
			}
		});
	};

	useImperativeHandle(ref, () => ({
		swipeLeft: () => swipe('left'),
		swipeRight: () => swipe('right'),
	}));

	const animatedStyles = useAnimatedStyle(() => {
		const rotate = interpolate(translateX.value, [-width / 2, 0, width / 2], [-10, 0, 10]);

		return {
			transform: [
				{ translateX: translateX.value },
				{ translateY: translateY.value },
				{ rotate: `${rotate}deg` },
			],
		};
	});

	const pan = Gesture.Pan()
		.enabled(isTopCard)
		.onUpdate((event) => {
			translateX.value = event.translationX;
			translateY.value = event.translationY;
		})
		.onEnd((event) => {
			if (event.translationX > SWIPE_THRESHOLD) {
				translateX.value = withSpring(width * 1.5, { velocity: event.velocityX }, () => {
					if (onSwipeRight) {
						runOnJS(onSwipeRight)();
					}
				});
			} else if (event.translationX < -SWIPE_THRESHOLD) {
				translateX.value = withSpring(-width * 1.5, { velocity: event.velocityX }, () => {
					if (onSwipeLeft) {
						runOnJS(onSwipeLeft)();
					}
				});
			} else {
				translateX.value = withSpring(0);
				translateY.value = withSpring(0);
			}
		});

	return (
		<GestureDetector gesture={pan}>
			<Animated.View style={animatedStyles}>{children}</Animated.View>
		</GestureDetector>
	);
};
