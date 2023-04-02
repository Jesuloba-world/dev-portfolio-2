import { FC } from "react";
import SEO from "next/head";
import { useRouter } from "next/router";
import { siteMetaData } from "@/config";

interface headProps {
	title?: string;
	description?: string;
	image?: string;
}

const Head: FC<headProps> = ({ title, description, image }) => {
	const router = useRouter();
	const { pathname } = router;

	const {
		defaultTitle,
		defaultDescription,
		siteUrl,
		defaultImage,
		twitterUsername,
	} = siteMetaData;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		// TODO: add an image when david prepares the lHead
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname}`,
	};

	return (
		<SEO>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />

			<meta property="og:title" content={seo.title} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:image" content={seo.image} />
			<meta property="og:url" content={seo.url} />
			<meta property="og:type" content="website" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={twitterUsername} />
			<meta name="twitter:title" content={seo.title} />
			<meta name="twitter:description" content={seo.description} />
			<meta name="twitter:image" content={seo.image} />

			{/* <meta
				name="google-site-verification"
				content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk"
			/> */}
		</SEO>
	);
};

export default Head;
