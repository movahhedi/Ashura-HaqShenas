import Page1 from "./1";
import Page2 from "./2";
import Page3 from "./3";
import Page4 from "./4";
import Page5 from "./5";
import Page6 from "./6";
import Page7 from "./7";
import Page8 from "./8";
import Page9 from "./9";
import Page10 from "./10";
import Page11 from "./11";
import Page12 from "./12";

export const pages = [
	{
		name: "بسم الله",
		render: Page1,
	},
	{
		name: "100 الله اکبر",
		render: Page2,
	},
	{
		name: "یک سلام",
		render: Page3,
	},
	{
		name: "یک لعن",
		render: Page4,
	},
	{
		name: "ابتدای زیارت",
		render: Page5,
	},
	{
		name: "نماز هدیه",
		render: Page6,
	},
	{
		name: "100 الله اکبر",
		render: Page2,
	},
	{
		name: "زیارت کامل",
		render: Page5,
	},
	{
		name: "100 لعن",
		render: Page7,
	},
	{
		name: "100 سلام",
		render: Page8,
	},
	{
		name: "ادامه زیارت",
		render: Page9,
	},
	{
		name: "سجده",
		render: Page10,
	},
	{
		name: "نماز زیارت",
		render: Page11,
	},
	{
		name: "صدقه",
		render: Page12,
	},
] as const;
