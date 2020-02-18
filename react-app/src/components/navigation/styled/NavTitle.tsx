import styled from 'styled-components';

interface NavTitleProps {
	isVisible: boolean;
}
export const NavTitle = styled.h5`
	opacity: ${(props: NavTitleProps) => (props.isVisible ? 1 : 0)};
	font-weight: 700;
	font-size: 1em;
	margin: 0 0 0 10px;
	transition: opacity 1s;
`;
