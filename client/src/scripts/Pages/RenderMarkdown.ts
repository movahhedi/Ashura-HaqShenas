import MarkdownIt from "markdown-it";

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
