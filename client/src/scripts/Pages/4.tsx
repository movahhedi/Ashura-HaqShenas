import Text from "../Texts/Laan1.md?raw";

import { RenderMarkdown } from "./RenderMarkdown";

export default function () {
	return (
		<div class="page">
			<p class="arabicText" innerHTML={RenderMarkdown(Text)}></p>
		</div>
	);
}
