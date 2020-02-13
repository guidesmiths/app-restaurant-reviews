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
	@media (min-width: 880px) {
		padding: 20px 0 0 20px;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;
		width: 80px;
		transition: all 0.7s;
		&:hover {
			width: 300px;
			background: rgb(250, 250, 250);
		}
	}

	@media (max-width: 880px) {
		align-items: center;
		padding: 10px 0 0 20px;
		height: 80px;
		width: 100%;
		transition: all 0.7s;
		&:hover {
			height: 320px;
			background: rgb(250, 250, 250);
		}
	}
`;
