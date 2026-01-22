import { css } from "styled-components";
import { Calibre, SFMono } from "./fonts";

const variables = css`
	:root {
		--dark-navy: #020617;
		--navy: #0f172a;
		--light-navy: #1e293b;
		--lightest-navy: #334155;
		--navy-shadow: rgba(2, 6, 23, 0.7);
		--dark-slate: #64748b;
		--slate: #94a3b8;
		--light-slate: #cbd5e1;
		--lightest-slate: #f1f5f9;
		--white: #ffffff;
		--green: #38bdf8;
		--green-tint: rgba(56, 189, 248, 0.1);
		--pink: #ec4899;
		--blue: #3b82f6;

		--font-sans: ${Calibre.style.fontFamily}
			/* 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif; */;
		--font-mono: ${SFMono.style.fontFamily}
			/* "Fira Code", "Fira Mono", "Roboto Mono",
			monospace; */;

		--fz-xxs: 12px;
		--fz-xs: 13px;
		--fz-sm: 14px;
		--fz-md: 16px;
		--fz-lg: 18px;
		--fz-xl: 20px;
		--fz-xxl: 22px;
		--fz-heading: 32px;

		--border-radius: 4px;
		--nav-height: 100px;
		--nav-scroll-height: 70px;

		--tab-height: 42px;
		--tab-width: 120px;

		--easing: cubic-bezier(0.645, 0.045, 0.355, 1);
		--transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

		--hamburger-width: 30px;

		--ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
		--ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
		--ham-after:
			bottom 0.1s ease-in 0.25s,
			transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
		--ham-after-active:
			bottom 0.1s ease-out,
			transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
	}
`;

export default variables;
