import { useState, useEffect, useRef, createRef } from "react";
import type { FC, RefObject } from "react";
import Link from "next/link";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { navLinks } from "@/config";
import { loaderDelay } from "@/utils";
import { usePrefersReducedMotion } from "@/hooks";
import { Menu } from "@/components";
import { IconLogo } from "@/components/icons";
import { StyledHeader, StyledLinks, StyledNav } from "./nav.style";

interface navProps {
	isHome: boolean;
}

const Nav: FC<navProps> = ({ isHome }) => {
	const [isMounted, setIsMounted] = useState(!isHome);
	const prefersReducedMotion = usePrefersReducedMotion();
	const navItemRefs = useRef<Record<string, RefObject<HTMLLIElement | null>>>(
		{},
	);
	const logoRef = useRef<HTMLDivElement>(null);
	const resumeRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	const getNavItemRef = (name: string) => {
		if (!navItemRefs.current[name]) {
			navItemRefs.current[name] = createRef<HTMLLIElement>();
		}
		return navItemRefs.current[name];
	};

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		const timeout = setTimeout(() => {
			setIsMounted(true);
		}, 100);

		return () => {
			clearTimeout(timeout);
		};
	}, [prefersReducedMotion]);

	const timeout = isHome ? loaderDelay : 0;
	const fadeClass = isHome ? "fade" : "";
	const fadeDownClass = isHome ? "fadedown" : "";

	const Logo = (
		<div className="logo" tabIndex={-1} ref={logoRef}>
			{isHome ? (
				<Link href="/" aria-label="home">
					<IconLogo />
				</Link>
			) : (
				<Link href="/" aria-label="home">
					<IconLogo />
				</Link>
			)}
		</div>
	);

	const ResumeLink = (
		<a
			className="resume-button"
			href="https://v4.rxresu.me/jesulobajohn/senior-software-engineer"
			target="_blank"
			rel="noopener noreferrer"
		>
			Resume
		</a>
	);

	return (
		<StyledHeader>
			<StyledNav>
				{prefersReducedMotion ? (
					<>
						{Logo}

						<StyledLinks>
							<ol>
								{navLinks?.map(({ url, name }) => (
									<li key={name}>
										<Link href={url}>{name}</Link>
									</li>
								))}
							</ol>
							<div>{ResumeLink}</div>
						</StyledLinks>

						<Menu />
					</>
				) : (
					<>
						<TransitionGroup component={null}>
							{isMounted && (
								<CSSTransition
									nodeRef={logoRef}
									classNames={fadeClass}
									timeout={timeout}
								>
									{Logo}
								</CSSTransition>
							)}
						</TransitionGroup>

						<StyledLinks>
							<ol>
								<TransitionGroup component={null}>
									{isMounted &&
										navLinks &&
										navLinks.map(({ url, name }, i) => {
											const navItemRef =
												getNavItemRef(name);

											return (
												<CSSTransition
													key={name}
													nodeRef={navItemRef}
													classNames={fadeDownClass}
													timeout={timeout}
												>
													<li
														ref={navItemRef}
														style={{
															transitionDelay: `${
																isHome
																	? i * 100
																	: 0
															}ms`,
														}}
													>
														<Link href={url}>
															{name}
														</Link>
													</li>
												</CSSTransition>
											);
										})}
								</TransitionGroup>
							</ol>

							<TransitionGroup component={null}>
								{isMounted && (
									<CSSTransition
										nodeRef={resumeRef}
										classNames={fadeDownClass}
										timeout={timeout}
									>
										<div
											ref={resumeRef}
											style={{
												transitionDelay: `${
													isHome
														? navLinks.length * 100
														: 0
												}ms`,
											}}
										>
											{ResumeLink}
										</div>
									</CSSTransition>
								)}
							</TransitionGroup>
						</StyledLinks>

						<TransitionGroup component={null}>
							{isMounted && (
								<CSSTransition
									nodeRef={menuRef}
									classNames={fadeClass}
									timeout={timeout}
								>
									<div ref={menuRef}>
										<Menu />
									</div>
								</CSSTransition>
							)}
						</TransitionGroup>
					</>
				)}
			</StyledNav>
		</StyledHeader>
	);
};

export default Nav;
