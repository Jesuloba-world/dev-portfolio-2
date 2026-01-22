import { useState, useEffect, useRef, createRef } from "react";
import type { RefObject } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { navDelay, loaderDelay } from "@/utils";
import { usePrefersReducedMotion } from "@/hooks";
import { StyledHeroSection } from "./hero.style";
import Link from "next/link";

const Hero = () => {
	const [isMounted, setIsMounted] = useState(false);
	const prefersReducedMotion = usePrefersReducedMotion();
	const itemRefs = useRef<Record<string, RefObject<HTMLDivElement | null>>>(
		{}
	);

	const getItemRef = (key: string) => {
		if (!itemRefs.current[key]) {
			itemRefs.current[key] = createRef<HTMLDivElement>();
		}
		return itemRefs.current[key];
	};

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		const timeout = setTimeout(() => setIsMounted(true), navDelay);
		return () => clearTimeout(timeout);
	}, [prefersReducedMotion]);

	// const one = <h1>Hi, my name is</h1>;
	const two = <h2 className="big-heading">Jesuloba Abere.</h2>;
	const three = <h3 className="big-heading">Software Engineer.</h3>;
	const four = (
		<>
			<p className="description">
				I build innovative and scalable software solutions that bring
				ideas to life.
			</p>
		</>
	);
	const five = (
		<Link
			className="email-link"
			href="/#contact"
			// target="_blank"
			// rel="noreferrer"
		>
			Get in touch!
		</Link>
	);

	const items = [
		{ key: "title", node: two },
		{ key: "subtitle", node: three },
		{ key: "description", node: four },
		{ key: "cta", node: five },
	];

	return (
		<StyledHeroSection>
			{prefersReducedMotion ? (
				items.map(({ key, node }) => <div key={key}>{node}</div>)
			) : (
				<TransitionGroup component={null}>
					{isMounted &&
						items.map(({ key, node }, i) => {
							const nodeRef = getItemRef(key);

							return (
								<CSSTransition
									key={key}
									nodeRef={nodeRef}
									classNames="fadeup"
									timeout={loaderDelay}
								>
									<div
										ref={nodeRef}
										style={{
											transitionDelay: `${i + 1}00ms`,
										}}
									>
										{node}
									</div>
								</CSSTransition>
							);
						})}
				</TransitionGroup>
			)}
		</StyledHeroSection>
	);
};

export default Hero;
