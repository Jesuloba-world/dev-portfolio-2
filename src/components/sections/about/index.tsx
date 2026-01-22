import { useEffect, useRef } from "react";
import Image from "next/image";
import { srConfig } from "@/config";
import { usePrefersReducedMotion } from "@/hooks";
import { StyledAboutSection, StyledPic, StyledText } from "./about.style";
import ME from "@/images/me.jpg";

const About = () => {
	const revealContainer = useRef<HTMLElement>(null);
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion || !revealContainer.current) {
			return;
		}

		async function animate() {
			if (revealContainer.current) {
				const sr = (await import("scrollreveal")).default;
				sr().reveal(revealContainer.current, srConfig());
			}
		}
		animate();
	}, [prefersReducedMotion]);

	const skills = [
		"Go (Golang)",
		"TypeScript",
		"Node.js",
		"Nest.js",
		"React",
		"Next.js",
		"PostgreSQL",
		"Docker",
		"Kubernetes",
		"AWS",
		"gRPC",
		"Redis",
	];

	return (
		<StyledAboutSection id="about" ref={revealContainer}>
			<h2 className="numbered-heading">About Me</h2>

			<div className="inner">
				<StyledText>
					<div>
						<p>
							Hello! I&apos;m Jesuloba Abere, a Senior Software
							Engineer with 6+ years of experience building
							high-volume fintech platforms and complex SaaS
							products. I specialize in designing scalable backend
							architectures using Go and Nest.js while retaining
							the full-stack capability to deliver polished user
							experiences.
						</p>
						<p>
							I have a proven track record of engineering robust
							financial transaction engines and architecting email
							marketing solutions from scratch. My expertise spans
							across the entire software development lifecycle,
							from system architecture to deployment and
							optimization.
						</p>
						<p>
							Currently, I&apos;m focused on building scalable
							solutions and exploring new technologies to solve
							complex problems.
						</p>
						<p>
							Here are a few technologies I&apos;ve been working
							with recently:
						</p>
					</div>

					<ul className="skills-list">
						{skills.map((skill) => (
							<li key={skill}>{skill}</li>
						))}
					</ul>
				</StyledText>

				<StyledPic>
					<div className="wrapper">
						<Image
							className="img"
							src={ME}
							alt="Headshot"
							width={300}
							height={300}
						/>
					</div>
				</StyledPic>
			</div>
		</StyledAboutSection>
	);
};

export default About;
