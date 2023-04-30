import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

const DOMAIN = process.env.NEXT_PUBLIC_SITE_URL;

async function generate() {
	const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
	const pages = await globby([
		"src/pages/*.js",
		"content/**/*.md",
		"!content/*.md",
		"!src/pages/_*.js",
		"!src/pages/[*.js",
		"!src/pages/api",
		"!src/pages/404.js",
	]);

	const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
			.map((page) => {
				const path = page
					.replace("src/pages", "")
					.replace("content/featured", "")
					.replace("content/jobs", "")
					.replace(".js", "")
					.replace(".md", "");
				const route = path === "/index" ? "" : path;

				return `
                <url>
                    <loc>${`${DOMAIN}/${route}`}</loc>
                    <changefreq>daily</changefreq>
                    <priority>1.0</priority>
                </url>
            `;
			})
			.join("")}
    </urlset>
    `;

	const formatted = prettier.format(sitemap, {
		...prettierConfig,
		parser: "html",
	});

	writeFileSync("public/sitemap.xml", formatted);
}

generate();
