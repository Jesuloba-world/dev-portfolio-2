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
import { KEY_CODES } from "@/utils";
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
	const [tabFocus, setTabFocus] = useState<number>(0);
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

	const focusTab = useCallback(() => {
		if (tabs.current[tabFocus]) {
			tabs.current[tabFocus]?.focus();
			return;
		}
		// If we're at the end, go to the start
		if (tabFocus >= tabs.current.length) {
			setTabFocus(0);
		}
		// If we're at the start, move to the end
		if (tabFocus < 0) {
			setTabFocus(tabs.current.length - 1);
		}
	}, [tabFocus]);

	// Only re-run the effect if tabFocus changes
	useEffect(() => focusTab(), [focusTab]);

	// Focus on tabs when using up & down arrow keys
	const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
		switch (e.key) {
			case KEY_CODES.ARROW_UP: {
				e.preventDefault();
				setTabFocus(tabFocus - 1);
				break;
			}

			case KEY_CODES.ARROW_DOWN: {
				e.preventDefault();
				setTabFocus(tabFocus + 1);
				break;
			}

			default: {
				break;
			}
		}
	};

	return (
		<StyledJobsSection id="jobs" ref={revealContainer}>
			<h2 className="numbered-heading">Where I’ve Worked</h2>

			<div className="inner">
				<StyledTabList
					role="tablist"
					aria-label="Job tabs"
					onKeyDown={(e) => onKeyDown(e)}
				>
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
