import { useState, useEffect, useCallback, type FC } from "react";
import { createTimeline, svg } from "animejs";
import { StyledLoader } from "./loader.style";
import { IconLoader } from "@/components/icons";

interface loaderProps {
	finishLoading: () => void;
}

const Loader: FC<loaderProps> = ({ finishLoading }) => {
	const [isMounted, setIsMounted] = useState(false);

	const animate = useCallback(() => {
		const drawableLogoPath = svg.createDrawable("#logo path");
		const loader = createTimeline({
			onComplete: () => finishLoading(),
		});

		loader
			.add(drawableLogoPath, {
				delay: 300,
				duration: 1500,
				ease: "inOutQuart",
				draw: "0 1",
			})
			.add("#logo #J", {
				duration: 700,
				ease: "inOutQuart",
				opacity: 1,
			})
			.add("#logo", {
				delay: 500,
				duration: 300,
				ease: "inOutQuart",
				opacity: 0,
				scale: 0.1,
			})
			.add(".loader", {
				duration: 200,
				ease: "inOutQuart",
				opacity: 0,
				zIndex: -1,
			});
	}, [finishLoading]);

	useEffect(() => {
		const timeout = setTimeout(() => setIsMounted(true), 10);
		animate();
		return () => clearTimeout(timeout);
	}, [animate]);

	useEffect(() => {
		const body = document.body;
		body.classList.add("hidden");
		return body.classList.remove("hidden");
	}, []);

	return (
		<StyledLoader className="loader" $isMounted={isMounted}>
			<div className="logo-wrapper">
				<IconLoader />
			</div>
		</StyledLoader>
	);
};

export default Loader;
