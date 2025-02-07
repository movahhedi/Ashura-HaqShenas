import MarkdownIt from "markdown-it";

import Ayah from "../../images/ayah.png";

export function RenderMarkdown(text: string) {
	const changedText = text.replaceAll(/\r?\n\r?\n/g, "\n\n---\n\n");

	console.log(changedText);

	const md = MarkdownIt({
		html: true,
	});
	const renderedText = md.render(changedText);
	console.log(renderedText);

	return renderedText;
}

export function RenderMarkdownInline(text: string) {
	const changedText = text.replaceAll(
		/\r?\n\r?\n/g,
		`<span class="ayah">
		۝
		</span>`,
	);
	// <img src="${Ayah}" />

	console.log(changedText);

	const md = MarkdownIt({
		html: true,
	});
	const renderedText = md.render(changedText);
	console.log(renderedText);

	return renderedText;
}
