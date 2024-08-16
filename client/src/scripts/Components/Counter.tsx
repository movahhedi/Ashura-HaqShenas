import { FontAwesome } from "./FontAwesome";

interface IProps {
	counterName: string;
	small?: boolean;
}

export function Counter(props: IProps) {
	let count = +(localStorage.getItem(props.counterName) || 0);
	// const max = 100;
	let counterText: HTMLElement;

	return (
		<div class={["counter", props.small && "counterSmall"]}>
			<button
				class="minus"
				onClick={(event) => {
					count--;
					if (count < 0) count = 0;
					counterText.textContent = "" + count;
					navigator.vibrate(50);
				}}
				onContextMenu={() => {
					const shouldZero = confirm("آیا شمارشگر صفر شود؟");
					if (shouldZero) {
						count = 0;
						counterText.textContent = "" + count;
					}
				}}
			>
				<FontAwesome icon="minus" />
			</button>

			<div
				className="counterMain"
				onClick={(event) => {
					count++;
					// if (count > max) count = max;
					counterText.textContent = "" + count;
					navigator.vibrate(50);
					localStorage.setItem(props.counterName, "" + count);
				}}
			>
				<div className="counterText" assign={(el) => (counterText = el)}>
					{"" + count}
				</div>
			</div>
		</div>
	);
}
