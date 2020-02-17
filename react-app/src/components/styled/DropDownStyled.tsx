import styled from 'styled-components';

interface Props {
	isOpen: boolean;
}

export const DropDownStyled = styled.div`
	position: fixed;
	top: 80px;
	width: 100%;
	background-color: rgb(250, 250, 250);
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	z-index: 50;
	max-height: ${(props: Props) => (props.isOpen ? '100%' : 0)};
	transition: all 0.5s ease-in-out;
	overflow: hidden;
`;

export const DropDownRowStyled = styled.div`
	width: 100%;
	border-top: 1px solid rgba(0, 0, 0, 0.08);
	height: 80px;
	padding-right: 20px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	fill: rgb(0, 153, 153);
`;
