import Text from "../Texts/Full.md?raw";

import { RenderMarkdown } from "./RenderMarkdown";

export default function () {
	return (
		<div class="page">
			<p class="arabicText" innerHTML={RenderMarkdown(Text)}></p>
		</div>
	);
}
