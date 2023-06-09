import styled from "styled-components";

export const StyledLoader = styled.div<{ isMounted: boolean }>`
	${({ theme }) => theme.mixins.flexCenter};
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	background-color: var(--dark-navy);
	z-index: 99;

	.logo-wrapper {
		width: max-content;
		max-width: 100px;
		transition: var(--transition);
		opacity: ${(props) => (props.isMounted ? 1 : 0)};
		svg {
			display: block;
			width: 100%;
			height: 100%;
			margin: 0 auto;
			fill: none;
			user-select: none;
			#B {
				opacity: 0;
			}
		}
	}
`;
