/// <reference types="vite/client" />

import { fadeIn, fadeOut } from "fading";

import { FontAwesome } from "./Components/FontAwesome";
import { pages } from "./Pages";

import "../styles/ImportAfter.scss";
import "vazirmatn/misc/Farsi-Digits/Vazirmatn-FD-font-face.css";
// import "vazirmatn/Vazirmatn-font-face.css";
import "../fonts/Neirizi/stylesheet.css";
import "../fonts/Nabi/stylesheet.css";
import("@fortawesome/fontawesome-free/css/all.min.css");

let currentPage = +(localStorage.getItem("page") || 0);

const app = document.getElementById("app")!;
const main = <main id="main"></main>;

async function RenderPage(pageNumber: number) {
	const page /* (() => JSX.Element) | undefined */ = pages[pageNumber];

	if (page) {
		// await fadeOut(main);
		main.replaceChildren(page.render());
		// await fadeIn(main);
	}
}

app.append(<div id="mainWrapper">{main}</div>);

RenderPage(currentPage);
