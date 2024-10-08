import { Counter } from "../Components/Counter";
import Text from "../Texts/Laan100.md?raw";

import { RenderMarkdown } from "./RenderMarkdown";

export default function () {
	return (
		<div class="page">
			<p class="arabicText" innerHTML={RenderMarkdown(Text)}></p>

			<Counter counterName="Laan100" small />
		</div>
	);
}
