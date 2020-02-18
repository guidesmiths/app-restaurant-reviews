import styled from 'styled-components';

export const StyledNavBar = styled.div`
	overflow: hidden;
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	box-sizing: border-box;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	z-index: 100;
	background: white;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0 0 20px;
	height: 80px;
	width: 100%;
`;
