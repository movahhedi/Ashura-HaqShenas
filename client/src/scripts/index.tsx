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
const pager = (
	<div id="pager">
		<div id="nav">
			<button
				className="pageControl prev"
				onClick={() => {
					currentPage--;
					if (currentPage < 0) {
						currentPage = 0;
					} else {
						RenderPage(currentPage);
					}
				}}
				onContextMenu={() => {
					currentPage = 0;
					RenderPage(currentPage);
				}}
			>
				<FontAwesome icon="arrow-right" />
			</button>

			<div id="navBox">
				<h5 id="siteName">چله زیارت عاشورای آیت‌الله حق‌شناس</h5>
				<h2 id="pageName"></h2>

				<div id="progressBox">
					<div id="progressBar">
						<div id="progressBarFill"></div>
					</div>
					<h6 id="progressText"></h6>
				</div>
			</div>

			<button
				className="pageControl"
				onClick={() => {
					currentPage++;
					if (currentPage > pages.length - 1) {
						currentPage = pages.length - 1;
					} else {
						RenderPage(currentPage);
					}
				}}
				onContextMenu={() => {
					currentPage = pages.length - 1;
					RenderPage(currentPage);
				}}
			>
				<FontAwesome icon="arrow-left" />
			</button>
		</div>
	</div>
);

const main = <main id="main"></main>;

async function RenderPage(pageNumber: number) {
	const page /* (() => JSX.Element) | undefined */ = pages[pageNumber];

	if (page) {
		localStorage.setItem("page", "" + pageNumber);

		await fadeOut(main);

		document.getElementById("progressBarFill")!.style.width =
			`${((pageNumber + 1) * 100) / pages.length}%`;
		document.getElementById("progressText")!.textContent =
			`صفحه ${pageNumber + 1} از ${pages.length}`;
		document.getElementById("pageName")!.textContent = page.name;

		main.replaceChildren(page.render());
		await fadeIn(main);
	}
}

// app.append(...((<></>) as unknown as any[]));
app.append(pager);
app.append(<div id="mainWrapper">{main}</div>);

RenderPage(currentPage);
