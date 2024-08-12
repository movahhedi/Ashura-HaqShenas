import Page1 from "./1";
import Page2 from "./2";
import Page3 from "./3";
import Page4 from "./4";
import Page5 from "./5";
import Page6 from "./6";

export const pages = [
	{
		name: "100 الله اکبر",
		render: Page1,
	},
	{
		name: "100 الله اکبر",
		render: Page2,
	},
	{
		name: "سلام",
		render: Page3,
	},
	{
		name: "سلام",
		render: Page4,
	},
	{
		name: "سلام",
		render: Page5,
	},
	{
		name: "سلام",
		render: Page6,
	},
] as const;
