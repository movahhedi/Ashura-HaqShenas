import { FontAwesome } from "./FontAwesome";

export function Counter() {
	let count = 0;
	const max = 100;
	let counterText: HTMLElement;

	return (
		<div class="counter">
			<button class="minus"
				onClick={(event) => {
					count--;
					if (count < 0) count = 0;
					counterText.textContent = "" + count;
				}}>
				<FontAwesome icon="minus" />
			</button>

			<div
				className="counterMain"
				onClick={(event) => {
					count++;
					// if (count > max) count = max;
					counterText.textContent = "" + count;
				}}
			>
				<div className="counterText" assign={(el) => (counterText = el)}>
					{"" + count}
				</div>
			</div>
		</div>
	);
}
