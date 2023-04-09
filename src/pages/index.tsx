import styled from "styled-components";
import {
	Layout,
	Hero,
	About,
	Jobs,
	// Featured,
	// Projects,
	// Contact,
} from "@/components";
import { NextPage } from "next";
import { jobs, getJobReturnType } from "@/lib/jobs";

const StyledMainContainer = styled.main`
	counter-reset: section;
`;

interface homeProps {
	allJobs: getJobReturnType[];
}

const Home: NextPage<homeProps> = ({ allJobs }) => {
	return (
		<Layout>
			<StyledMainContainer className="fillHeight">
				<Hero />
				<About />
				<Jobs jobsData={allJobs} />
				{/* <Featured /> */}
				{/* <Projects /> */}
				{/* <Contact /> */}
			</StyledMainContainer>
		</Layout>
	);
};

export const getStaticProps = async () => {
	const allJobs = jobs();

	return {
		props: { allJobs },
	};
};

export default Home;
