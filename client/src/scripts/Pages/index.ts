/* eslint-disable perfectionist/sort-imports */
import Bismillah from "./Bismillah";
import Full1 from "./Full1";

export const pages = [
	{
		name: "بسم الله",
		render: Bismillah,
	},
	{
		name: "ابتدای زیارت",
		render: Full1,
	},
] as const;
