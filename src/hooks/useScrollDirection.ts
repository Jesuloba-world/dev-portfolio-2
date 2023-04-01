const SCROLL_UP: "up" = "up";
const SCROLL_DOWN: "down" = "down";

import { useState, useEffect } from "react";

interface ScrollDirectionParams {
	initialDirection?: "up" | "down";
	thresholdPixels?: number;
	off?: boolean;
}

type useScrollDirectionType = ({}: ScrollDirectionParams) => "up" | "down";

const useScrollDirection: useScrollDirectionType = ({
	initialDirection = SCROLL_DOWN,
	thresholdPixels = 0,
	off = false,
} = {}) => {
	const [scrollDir, setScrollDir] = useState<"up" | "down">(initialDirection);

	useEffect(() => {
		let lastScrollY =
			typeof window !== "undefined" ? window.pageYOffset : 0;
		let ticking = false;
		const updateScrollDir = () => {
			const scrollY =
				typeof window !== "undefined" ? window.pageYOffset : 0;

			if (Math.abs(scrollY - lastScrollY) < thresholdPixels) {
				// We haven't exceeded the threshold
				ticking = false;
				return;
			}

			setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
			lastScrollY = scrollY > 0 ? scrollY : 0;
			ticking = false;
		};

		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDir);
				ticking = true;
			}
		};

		/**
		 * Bind the scroll handler if `off` is set to false.
		 * If `off` is set to true reset the scroll direction.
		 */
		if (!off && typeof window !== "undefined") {
			window.addEventListener("scroll", onScroll);
		} else {
			setScrollDir(initialDirection);
		}

		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("scroll", onScroll);
			}
		};
	}, [initialDirection, thresholdPixels, off]);

	return scrollDir;
};

export default useScrollDirection;
