import fs from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

export type getFeaturedReturnType = {
	slug: string;
	frontmatter: FeaturedFrontmatter;
	content: string;
};

type getFeaturedBySlugType = (slug: string) => getFeaturedReturnType;

export type FeaturedFrontmatter = {
	date: string;
	title: string;
	cover: string;
	tech: string[];
	github?: string;
	external?: string;
	cta?: string;
};

const featuredDirectory = join(process.cwd(), "content/featured");

export const featured = () => {
	const slugs = fs.readdirSync(featuredDirectory);
	const allFeatured = slugs
		.map((slug) => getFeaturedBySlug(slug))
		.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? -1 : 1));
	return allFeatured;
};

export const getFeaturedBySlug: getFeaturedBySlugType = (slug) => {
	const realSlug: string = slug.replace(/\.md$/, "");
	const fullPath = join(featuredDirectory, `${realSlug}/index.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);
	const frontmatter = data as FeaturedFrontmatter;
	return { slug: realSlug, frontmatter, content };
};
