import styled from "styled-components";
import {
	Layout,
	Hero,
	// About,
	// Jobs,
	// Featured,
	// Projects,
	// Contact,
} from "@/components";

const StyledMainContainer = styled.main`
	counter-reset: section;
`;

export default function Home() {
	return (
		<Layout>
			<StyledMainContainer className="fillHeight">
				<Hero />
				{/* <About /> */}
				{/* <Jobs /> */}
				{/* <Featured /> */}
				{/* <Projects /> */}
				{/* <Contact /> */}
			</StyledMainContainer>
		</Layout>
	);
}
