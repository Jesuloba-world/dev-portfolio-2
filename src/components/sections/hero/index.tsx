import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { navDelay, loaderDelay } from "@/utils";
import { usePrefersReducedMotion } from "@/hooks";
import { StyledHeroSection } from "./hero.style";
import Link from "next/link";

const Hero = () => {
	const [isMounted, setIsMounted] = useState(false);
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		const timeout = setTimeout(() => setIsMounted(true), navDelay);
		return () => clearTimeout(timeout);
	}, [prefersReducedMotion]);

	const one = <h1>Hi, my name is</h1>;
	const two = <h2 className="big-heading">Jesuloba John.</h2>;
	const three = <h3 className="big-heading">I build things for the web.</h3>;
	const four = (
		<>
			<p>
				I’m a Software engineer with a good understanding of techniques
				geared towards optimum user experience. Currently, I’m focused
				on building accessible, human-centered products at{" "}
				<a
					href="http://sidebrief.com/"
					target="_blank"
					rel="noreferrer"
				>
					Sidebrief
				</a>
				.
			</p>
		</>
	);
	const five = (
		<Link
			className="email-link"
			href="/resume.pdf"
			target="_blank"
			rel="noreferrer"
		>
			Check out my resume!
		</Link>
	);

	const items = [one, two, three, four, five];

	return (
		<StyledHeroSection>
			{prefersReducedMotion ? (
				<>
					{items.map((item, i) => (
						<div key={i}>{item}</div>
					))}
				</>
			) : (
				<TransitionGroup component={null}>
					{isMounted &&
						items.map((item, i) => (
							<CSSTransition
								key={i}
								classNames="fadeup"
								timeout={loaderDelay}
							>
								<div
									style={{ transitionDelay: `${i + 1}00ms` }}
								>
									{item}
								</div>
							</CSSTransition>
						))}
				</TransitionGroup>
			)}
		</StyledHeroSection>
	);
};

export default Hero;
