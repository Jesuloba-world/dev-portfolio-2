import fs from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

export type getJobReturnType = {
	slug: string;
	frontmatter: JobFrontmatter;
	content: string;
};

type getJobBySlugType = (slug: string) => getJobReturnType;

export type JobFrontmatter = {
	date: string;
	title: string;
	company: string;
	range: string;
	location?: string;
	url?: string;
};

const jobsDirectory = join(process.cwd(), "content/jobs");

export const jobs = () => {
	const slugs = fs.readdirSync(jobsDirectory);
	const allPosts = slugs
		.map((slug) => getJobsBySlug(slug))
		.sort((post1, post2) =>
			new Date(post1.frontmatter.date) > new Date(post2.frontmatter.date)
				? -1
				: 1
		);

	return allPosts;
};

export const getJobsBySlug: getJobBySlugType = (slug) => {
	const realSlug: string = slug.replace(/\.md$/, "");
	const fullPath = join(jobsDirectory, `${realSlug}/index.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);
	const frontmatter = data as JobFrontmatter;

	return { slug: realSlug, frontmatter, content };
};
