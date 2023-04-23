import { useState, useEffect, useRef, useCallback, KeyboardEvent } from "react";
import { CSSTransition } from "react-transition-group";
import {
	StyledHighlight,
	StyledJobsSection,
	StyledTabButton,
	StyledTabList,
	StyledTabPanel,
	StyledTabPanels,
} from "./jobs.style";
import { srConfig } from "@/config";
import { usePrefersReducedMotion } from "@/hooks";
import { getJobReturnType } from "@/lib/jobs";
import ReactMarkdown from "react-markdown";

type TabRef = { focus: () => void } | null;
type TabsRef = TabRef[];

interface jobProps {
	jobsData: getJobReturnType[];
}

const Jobs: React.FC<jobProps> = ({ jobsData }) => {
	const [activeTabId, setActiveTabId] = useState(0);
	const tabs = useRef<TabsRef>([]);
	const revealContainer = useRef(null);
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) {
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

	return (
		<StyledJobsSection id="jobs" ref={revealContainer}>
			<h2 className="numbered-heading">Where I’ve Worked</h2>

			<div className="inner">
				<StyledTabList role="tablist" aria-label="Job tabs">
					{jobsData &&
						jobsData.map((node, i) => {
							const { company } = node.frontmatter;
							return (
								<StyledTabButton
									key={i}
									isActive={activeTabId === i}
									onClick={() => setActiveTabId(i)}
									ref={(el) => (tabs.current[i] = el)}
									id={`tab-${i}`}
									role="tab"
									tabIndex={activeTabId === i ? 0 : -1}
									aria-selected={
										activeTabId === i ? true : false
									}
									aria-controls={`panel-${i}`}
								>
									<span>{company}</span>
								</StyledTabButton>
							);
						})}
					<StyledHighlight activeTabId={activeTabId} />
				</StyledTabList>

				<StyledTabPanels>
					{jobsData &&
						jobsData.map((node, i) => {
							const { frontmatter, content } = node;
							const { title, url, company, range } = frontmatter;

							return (
								<CSSTransition
									key={i}
									in={activeTabId === i}
									timeout={250}
									classNames="fade"
								>
									<StyledTabPanel
										id={`panel-${i}`}
										role="tabpanel"
										tabIndex={activeTabId === i ? 0 : -1}
										aria-labelledby={`tab-${i}`}
										aria-hidden={activeTabId !== i}
										hidden={activeTabId !== i}
									>
										<h3>
											<span>{title}</span>
											<span className="company">
												&nbsp;@&nbsp;
												<a
													href={url}
													className="inline-link"
												>
													{company}
												</a>
											</span>
										</h3>

										<p className="range">{range}</p>

										<div>
											<ReactMarkdown>
												{content}
											</ReactMarkdown>
										</div>
									</StyledTabPanel>
								</CSSTransition>
							);
						})}
				</StyledTabPanels>
			</div>
		</StyledJobsSection>
	);
};

export default Jobs;
