import Text from "../Texts/Full.md?raw";

import { RenderMarkdownInline } from "./RenderMarkdown";

export default function () {
	return (
		<div class="page">
			<p class="arabicText" innerHTML={RenderMarkdownInline(Text)}></p>
		</div>
	);
}
