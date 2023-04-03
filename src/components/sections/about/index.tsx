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
							Hello! My name is John (Jesuloba John Abere,
							&ldquo;Needle&rdquo; is &ldquo;Abere&rdquo;
							translated to english) and I enjoy creating
							solutions that matter. My interest in coding started
							back in 2017 when I decided to play as Goku in
							GTA-SA — turns out hacking together multiple mods
							taught me a lot about making things work!
						</p>

						<p>
							Fast-forward to today, and I&apos;ve had the
							privilege of working at{" "}
							<a href="https://mazesoftwares.com/">
								a student-led design studio
							</a>{" "}
							and currently working at{" "}
							<a href={"http://sidebrief.com/"}>Sidebrief</a>. My
							main focus these days is picking up{" "}
							<a href="https://go.dev/">Golang</a> and getting
							into the devops and cloud space.
						</p>

						<p>
							When I&apos;m not coding you&apos;ll find me playing{" "}
							<a href="https://store.steampowered.com/app/268500/XCOM_2/">
								XCOM 2
							</a>
							, well modded of course, or reading about some weird
							topic nobody cares about.
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
