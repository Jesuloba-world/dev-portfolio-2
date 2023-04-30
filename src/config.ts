export const email = "jesulobajohn@gmail.com";

export const socialMedia = [
	{
		name: "GitHub",
		url: "https://github.com/Jesuloba-world",
	},
	// {
	// 	name: "Instagram",
	// 	url: "https://www.instagram.com/bchiang7",
	// },
	{
		name: "Linkedin",
		url: "https://www.linkedin.com/in/jesuloba-abere/",
	},
	{
		name: "Twitter",
		url: "https://twitter.com/Jesuloba0_",
	},
	// {
	// 	name: "Codepen",
	// 	url: "https://codepen.io/bchiang7",
	// },
];

export const navLinks = [
	{
		name: "About",
		url: "#about",
	},
	{
		name: "Experience",
		url: "#jobs",
	},
	{
		name: "Work",
		url: "#projects",
	},
	{
		name: "Contact",
		url: "#contact",
	},
];

export const colors = {
	green: "#64ffda",
	navy: "#0a192f",
	darkNavy: "#020c1b",
};

export const srConfig = (delay = 200, viewFactor = 0.25) => ({
	origin: "bottom",
	distance: "20px",
	duration: 500,
	delay,
	rotate: {
		x: 0,
		y: 0,
		z: 0,
	},
	opacity: 0,
	scale: 1,
	easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
	mobile: true,
	reset: false,
	useDelay: "always",
	viewFactor,
	viewOffset: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
	},
});

export const siteMetaData = {
	defaultTitle: "Jesuloba Abere | Software Engineer",
	defaultDescription:
		"Software engineer specializing in techniques that optimize user experience",
	siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
	defaultImage: "images/seo_image.png",
	twitterUsername: "@jesuloba0_",
};
