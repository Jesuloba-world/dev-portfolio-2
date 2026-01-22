import styled from "styled-components";

export const StyledAboutSection = styled.section`
	max-width: 900px;

	.inner {
		display: grid;
		grid-template-columns: 3fr 2fr;
		grid-gap: 50px;

		@media (max-width: 768px) {
			display: block;
		}
	}
`;
export const StyledText = styled.div`
	ul.skills-list {
		display: flex;
        flex-wrap: wrap;
        gap: 12px;
		padding: 0;
		margin: 20px 0 0 0;
		overflow: hidden;
		list-style: none;

		li {
			position: relative;
			padding: 8px 16px;
			font-family: var(--font-mono);
			font-size: var(--fz-xs);
            background: var(--green-tint);
            color: var(--green);
            border: 1px solid var(--green);
            border-radius: 20px;
            transition: var(--transition);

            &:hover {
                background: rgba(56, 189, 248, 0.2);
                transform: translateY(-2px);
            }
		}
	}
`;
export const StyledPic = styled.div`
	position: relative;
	max-width: 300px;

	@media (max-width: 768px) {
		margin: 50px auto 0;
		width: 70%;
	}

	.wrapper {
		${({ theme }) => theme.mixins.boxShadow};
		display: block;
		position: relative;
		width: 100%;
		border-radius: var(--border-radius);
		background-color: transparent;

		&:hover,
		&:focus {
			outline: 0;

			&:after {
				top: 10px;
				left: 10px;
			}
		}

		.img {
			position: relative;
			border-radius: var(--border-radius);
			mix-blend-mode: normal;
			filter: none;
			transition: var(--transition);
		}

		&:before {
			display: none;
		}

		&:after {
			content: "";
			display: block;
			position: absolute;
			width: 100%;
			height: 100%;
			border-radius: var(--border-radius);
			transition: var(--transition);
            border: 2px solid var(--green);
			top: 15px;
			left: 15px;
			z-index: -1;
		}
	}
`;
