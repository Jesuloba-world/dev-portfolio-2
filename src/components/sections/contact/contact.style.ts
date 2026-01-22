import styled from "styled-components";

export const StyledContactSection = styled.section`
	max-width: 600px;
	margin: 0 auto 100px;
	text-align: center;

	@media (max-width: 768px) {
		margin: 0 auto 50px;
	}

	.overline {
		display: block;
		margin-bottom: 20px;
		color: var(--green);
		font-family: var(--font-mono);
		font-size: var(--fz-md);
		font-weight: 400;

		&:after {
			display: none;
		}
	}

	.title {
		font-size: clamp(40px, 5vw, 60px);
        background: linear-gradient(135deg, var(--green) 0%, var(--blue) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
	}

	.email-link {
		${({ theme }) => theme.mixins.bigButton};
		margin-top: 50px;
	}
`;
