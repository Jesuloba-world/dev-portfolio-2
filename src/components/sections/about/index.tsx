import React, { useEffect, useRef } from "react";
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
		"Next.js",
		"TypeScript",
		"React (Native)",
		"Django",
		"Node.js",
		"Graphql",
	];

	return (
		<StyledAboutSection id="about" ref={revealContainer}>
			<h2 className="numbered-heading">About Me</h2>

			<div className="inner">
				<StyledText>
					<div>
						<p>
							Hello, I&apos;m Jesuloba, also known as{" "}
							<a href="https://twitter.com/Jesuloba0_">
								John Needle
							</a>
							. I am a dedicated software developer with a passion
							for bringing ideas to life through technology. My
							journey in coding began in 2017 when I delved into
							the world of software modification, which sparked my
							fascination with creating functional and innovative
							solutions.
						</p>
						<p>
							I have had the privilege of contributing to projects
							at a{" "}
							<a href="https://mazesoftwares.com/">
								a software development agency
							</a>{" "}
							and currently engaged at{" "}
							<a href={"http://sidebrief.com/"}>Sidebrief</a>. I
							am also actively working towards achieving my Azure
							certification to further solidify my expertise in
							cloud technologies.
						</p>
						<p>
							When I&apos;m not immersed in code, I enjoy
							immersing myself in games like{" "}
							<a href="https://store.steampowered.com/app/268500/XCOM_2/">
								XCOM 2
							</a>{" "}
							or delving into obscure yet fascinating topics
							through reading. I thrive on exploring new ideas and
							pushing the boundaries of what&apos;s possible.
						</p>
						<p>
							Here are a few technologies I&apos;ve been working
							with recently:
						</p>
					</div>

					<ul className="skills-list">
						{skills &&
							skills.map((skill, i) => <li key={i}>{skill}</li>)}
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
