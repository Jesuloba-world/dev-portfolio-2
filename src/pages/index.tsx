import styled from "styled-components";
import {
	Layout,
	// Hero,
	// About,
	// Jobs,
	// Featured,
	// Projects,
	// Contact,
} from "@/components";
import { useRouter } from "next/router";

const StyledMainContainer = styled.main`
	counter-reset: section;
`;

export default function Home() {
	const router = useRouter();

	return (
		<Layout>
			<StyledMainContainer className="fillHeight">
				<h1>This is supposed to show</h1>
				{/* <Hero />
				<About />
				<Jobs />
				<Featured />
				<Projects />
				<Contact /> */}
			</StyledMainContainer>
		</Layout>
	);
}
