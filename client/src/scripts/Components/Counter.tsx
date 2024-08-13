import { FontAwesome } from "./FontAwesome";

interface IProps {
	small?: boolean;
}

export function Counter(props: IProps) {
	let count = 0;
	const max = 100;
	let counterText: HTMLElement;

	return (
		<div class={["counter", props.small && "counterSmall"]}>
			<button class="minus"
				onClick={(event) => {
					count--;
					if (count < 0) count = 0;
					counterText.textContent = "" + count;
					navigator.vibrate(50);
				}}>
				<FontAwesome icon="minus" />
			</button>

			<div
				className="counterMain"
				onClick={(event) => {
					count++;
					// if (count > max) count = max;
					counterText.textContent = "" + count;
					navigator.vibrate(50);
				}}
			>
				<div className="counterText" assign={(el) => (counterText = el)}>
					{"" + count}
				</div>
			</div>
		</div>
	);
}
