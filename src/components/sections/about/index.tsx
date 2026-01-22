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
		"React",
		"TypeScript",
		"Node.js (with NestJS)",
		"Python (with Django)",
		"PostgreSQL",
	];

	return (
		<StyledAboutSection id="about" ref={revealContainer}>
			<h2 className="numbered-heading">About Me</h2>

			<div className="inner">
				<StyledText>
					<div>
						<p>
							Hello! I&apos;m Jesuloba Abere (friends call me{" "}
							<a href="https://twitter.com/Jesuloba0_">
								John Needle
							</a>
							), a software engineer passionate about transforming
							ideas into innovative and effective software. My
							tech journey, sparked in 2017 by software
							modification, ignited my love for coding and
							building impactful solutions.
						</p>
						<p>
							Currently, as a Backend Engineer at{" "}
							<a href="https://dnipay.ng/">DNIpay</a>, I build
							high-throughput Go transaction pipelines and robust
							deployment automation. Previously, as Lead Frontend
							Engineer at{" "}
							<a href="https://www.heyfood.africa/">Heyfood</a>, I
							spearheaded a TypeScript migration and rebuilt core
							logic, significantly enhancing performance. My
							full-stack experience includes architecting scalable
							backend services (Go, Node.js, Django) capable of
							handling millions of requests, leading migrations,
							and improving system performance with CI/CD (Docker,
							Kubernetes) and technologies like GraphQL,
							PostgreSQL, and various data stores.
						</p>
						<p>
							Beyond coding, I enjoy strategizing in{" "}
							<a href="https://store.steampowered.com/app/268500/XCOM_2/">
								XCOM 2
							</a>{" "}
							and exploring diverse topics that fuel my
							creativity. I&apos;m constantly learning, currently
							diving into blockchain and cloud-native
							architectures, always eager to tackle new tech
							challenges.
						</p>
						<p>
							<strong>
								I&apos;m passionate about building things that
								matter. Let&apos;s connect and discuss how we
								can create something impactful together!
							</strong>
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
