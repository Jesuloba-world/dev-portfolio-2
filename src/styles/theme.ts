import mixins from "./mixins";
import type { RuleSet } from "styled-components";

export type ThemeInterface = {
	bp: {
		mobileS: string;
		mobileM: string;
		mobileL: string;
		tabletS: string;
		tabletL: string;
		desktopXS: string;
		desktopS: string;
		desktopM: string;
		desktopL: string;
	};

	mixins: {
		flexCenter: RuleSet<object>;
		flexBetween: RuleSet<object>;
		link: RuleSet<object>;
		inlineLink: RuleSet<object>;
		button: RuleSet<object>;
		smallButton: RuleSet<object>;
		bigButton: RuleSet<object>;
		boxShadow: RuleSet<object>;
		fancyList: RuleSet<object>;
		resetList: RuleSet<object>;
	};
};

const theme = {
	bp: {
		mobileS: `max-width: 330px`,
		mobileM: `max-width: 400px`,
		mobileL: `max-width: 480px`,
		tabletS: `max-width: 600px`,
		tabletL: `max-width: 768px`,
		desktopXS: `max-width: 900px`,
		desktopS: `max-width: 1080px`,
		desktopM: `max-width: 1200px`,
		desktopL: `max-width: 1400px`,
	},

	mixins,
};

export default theme;
