/**
 * https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/
 */

import { useState, useEffect } from "react";

const QUERY = "(prefers-reduced-motion: no-preference)";
const isRenderingOnServer: boolean = typeof window === "undefined";

const getInitialState = (): boolean =>
	// For our initial server render, we won't know if the user
	// prefers reduced motion, but it doesn't matter. This value
	// will be overwritten on the client, before any animations
	// occur.
	isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;

const usePrefersReducedMotion = (): boolean => {
	const [prefersReducedMotion, setPrefersReducedMotion] =
		useState<boolean>(getInitialState);
	useEffect(() => {
		const mediaQueryList = window.matchMedia(QUERY);
		const listener = (event: MediaQueryListEvent) => {
			setPrefersReducedMotion(!event.matches);
		};
		mediaQueryList.addEventListener("change", listener);
		return () => {
			mediaQueryList.removeEventListener("change", listener);
		};
	}, []);
	return prefersReducedMotion;
};

export default usePrefersReducedMotion;
