import { useState, useEffect, FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { Loader, Nav, Social, Email, Footer, Head } from "@/components";
import { GlobalStyle, theme } from "@/styles";
import { StyledContent } from "./layout.style";
import { useRouter } from "next/router";

interface layoutProps {
	children: ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
	const router = useRouter();
	const isHome = router.pathname === "/";
	const [isLoading, setIsLoading] = useState(isHome);

	// Sets target="_blank" rel="noopener noreferrer" on external links
	const handleExternalLinks = () => {
		const allLinks = Array.from(document.querySelectorAll("a"));
		if (allLinks.length > 0) {
			allLinks.forEach((link) => {
				if (link.host !== window.location.host) {
					link.setAttribute("rel", "noopener noreferrer");
					link.setAttribute("target", "_blank");
				}
			});
		}
	};

	const UseHash: (str: string) => void = (str) => {
		if (str) {
			const hash = str.split("#")[1];
			setTimeout(() => {
				const el = document.getElementById(hash);
				if (el) {
					el.scrollIntoView();
					el.focus();
				}
			}, 0);
		}
		return;
	};

	useEffect(() => {
		if (isLoading) {
			return;
		}

		const onWindowHashChange = () => UseHash(window.location.hash);
		const onNextJSHashChange: (url: string) => void = (url) => UseHash(url);

		router.events.on("hashChangeStart", onNextJSHashChange);
		window.addEventListener("hashchange", onWindowHashChange);
		window.addEventListener("load", onWindowHashChange);

		handleExternalLinks();

		return () => {
			router.events.off("hashChangeStart", onNextJSHashChange);
			window.removeEventListener("load", onWindowHashChange);
			window.removeEventListener("hashchange", onWindowHashChange);
		};
	}, [isLoading, router.events]);

	return (
		<>
			<Head />

			<div id="root">
				<ThemeProvider theme={theme}>
					<GlobalStyle />

					<a className="skip-to-content" href="#content">
						Skip to Content
					</a>

					{isLoading && isHome ? (
						<>
							<Loader finishLoading={() => setIsLoading(false)} />
						</>
					) : (
						<StyledContent>
							<Nav isHome={isHome} />
							<Social isHome={isHome} />
							<Email isHome={isHome} />

							<div id="content">
								{children}
								<Footer />
								<h1>Under the footer</h1>
							</div>
						</StyledContent>
					)}
				</ThemeProvider>
			</div>
		</>
	);
};

export default Layout;
