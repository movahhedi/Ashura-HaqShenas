import Text from "../Texts/Sajdeh.md?raw";

import { RenderMarkdown } from "./RenderMarkdown";

export default function () {
	return (
		<div class="page">
			<p class="arabicText" innerHTML={RenderMarkdown(Text)}></p>
		</div>
	);
}
