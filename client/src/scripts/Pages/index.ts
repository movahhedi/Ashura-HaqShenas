/* eslint-disable perfectionist/sort-imports */
import Bismillah from "./Bismillah";
import AllahAkbar1 from "./AllahAkbar1";
import Salam1 from "./Salam1";
import Laan1 from "./Laan1";
import Full1 from "./Full1";
import NamazHedyeh from "./NamazHedyeh";
import AllahAkbar2 from "./AllahAkbar2";
import Full2 from "./Full2";
import Laan100 from "./Laan100";
import Salam100 from "./Salam100";
import Khos from "./Khos";
import Sajdeh from "./Sajdeh";
import NamazZiarat from "./NamazZiarat";
import Sadaqeh from "./Sadaqeh";

export const pages = [
	{
		name: "بسم الله",
		render: Bismillah,
	},
	{
		name: "100 الله اکبر",
		render: AllahAkbar1,
	},
	{
		name: "یک سلام",
		render: Salam1,
	},
	{
		name: "یک لعن",
		render: Laan1,
	},
	{
		name: "ابتدای زیارت",
		render: Full1,
	},
	{
		name: "نماز هدیه",
		render: NamazHedyeh,
	},
	{
		name: "100 الله اکبر",
		render: AllahAkbar2,
	},
	{
		name: "زیارت کامل",
		render: Full2,
	},
	{
		name: "100 لعن",
		render: Laan100,
	},
	{
		name: "100 سلام",
		render: Salam100,
	},
	{
		name: "ادامه زیارت",
		render: Khos,
	},
	{
		name: "سجده",
		render: Sajdeh,
	},
	{
		name: "نماز زیارت",
		render: NamazZiarat,
	},
	{
		name: "صدقه",
		render: Sadaqeh,
	},
] as const;
