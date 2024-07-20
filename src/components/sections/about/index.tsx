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
		"Golang",
		"Django",
		"Graphql",
	];

	return (
		<StyledAboutSection id="about" ref={revealContainer}>
			<h2 className="numbered-heading">About Me</h2>

			<div className="inner">
				<StyledText>
					<div>
						<p>
							Hello, I&apos;m Jesuloba, though friends know me as{" "}
							<a href="https://twitter.com/Jesuloba0_">
								John Needle
							</a>
							. I&apos;m passionate about bringing ideas to life
							through technology. My journey into software
							development kicked off in 2017 when I dived into the
							world of software modification — it turns out that
							tweaking existing programs taught me a lot about the
							intricacies of coding and sparked my love for
							creating innovative solutions!
						</p>
						<p>
							Today, I&apos;m a Software Engineer at{" "}
							<a href="https://nvisionhr.com/">NvisionHr</a>,
							architecting scalable backend systems and
							microservices using Go, React, and Python. I&apos;ve
							had the privilege of working at a{" "}
							<a href="https://mazesoftwares.com/">
								software agency
							</a>{" "}
							and a <a href={"https://sidebrief.com/"}>startup</a>
							, constantly pushing the boundaries of what&apos;s
							possible in tech.
						</p>
						<p>
							When I&apos;m not coding, you&apos;ll find me
							strategizing in{" "}
							<a href="https://store.steampowered.com/app/268500/XCOM_2/">
								XCOM 2
							</a>{" "}
							or exploring obscure topics. These diverse interests
							fuel my creativity in unexpected ways. Recently,
							I&apos;ve been diving into blockchain and
							cloud-native architectures, always eager to tackle
							new challenges in our ever-evolving tech landscape.
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
