import styled from 'styled-components';

interface Props {
	isOpen: boolean;
}

export const DropDownStyled = styled.div`
	position: fixed;
	top: 80px;
	background-color: rgb(250, 250, 250);
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	z-index: 50;
	@media (max-width: 880px) {
		max-height: ${(props: Props) => (props.isOpen ? '100%' : 0)};
		width: 100%;
	}
	@media (min-width: 880px) {
		max-width: ${(props: Props) => (props.isOpen ? '300px' : 0)};
		width: 25vw;
		bottom: 0;
		right: 0;
	}

	transition: all 0.5s ease-in-out;
	overflow: hidden;
`;

export const DropDownRowStyled = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	fill: rgb(0, 153, 153);
	cursor: pointer;
	@media (max-width: 880px) {
		border-top: 1px solid rgba(0, 0, 0, 0.08);
	}
	@media (min-width: 880px) {
		border-bottom: 1px solid rgba(0, 0, 0, 0.08);
	}
	&:hover {
		background-color: rgb(230, 230, 230);
	}
`;
