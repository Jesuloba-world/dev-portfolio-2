import { css } from "styled-components";
import localFont from "next/font/local";
import { NextFont } from "next/dist/compiled/@next/font";

const CalibreNormal = localFont({
	src: [
		{
			path: "../fonts/Calibre/Calibre-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/Calibre/Calibre-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../fonts/Calibre/Calibre-Semibold.woff2",
			weight: "600",
			style: "normal",
		},
	],
});

const CalibreItalic = localFont({
	src: [
		{
			path: "../fonts/Calibre/Calibre-RegularItalic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "../fonts/Calibre/Calibre-MediumItalic.woff2",
			weight: "500",
			style: "italic",
		},
		{
			path: "../fonts/Calibre/Calibre-SemiboldItalic.woff2",
			weight: "600",
			style: "italic",
		},
	],
});

const SFMonoNormal = localFont({
	src: [
		{
			path: "../fonts/SFMono/SFMono-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../fonts/SFMono/SFMono-Semibold.woff2",
			weight: "600",
			style: "normal",
		},
	],
});

const SFMonoItalic = localFont({
	src: [
		{
			path: "../fonts/SFMono/SFMono-RegularItalic.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "../fonts/SFMono/SFMono-SemiboldItalic.woff2",
			weight: "600",
			style: "italic",
		},
	],
});

type createFontFacesType = (family: NextFont) => string;

const createFontFaces: createFontFacesType = (family) => {
	let styles = "";

	styles += `
	@font-face {
		font-family: '${family.style.fontFamily}';
	}
	`;

	return styles;
};

const calibreNormal = createFontFaces(CalibreNormal);
const calibreItalic = createFontFaces(CalibreItalic);

const sfMonoNormal = createFontFaces(SFMonoNormal);
const sfMonoItalic = createFontFaces(SFMonoItalic);

const Fonts = css`
	${calibreNormal + calibreItalic + sfMonoNormal + sfMonoItalic}
`;

export default Fonts;
