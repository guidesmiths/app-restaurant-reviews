import styled from 'styled-components';

interface Props {
	isOpen: boolean;
}

export const ReviewsContainer = styled.div`
	position: fixed;
	top: 80px;
	left: 0;
	bottom: 0;
	background-color: rgb(250, 250, 250);
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	z-index: 50;
	@media (max-width: 880px) {
		width: ${(props: Props) => (props.isOpen ? '100vw' : 0)};
	}
	@media (min-width: 880px) and (max-width: 1200px) {
		width: ${(props: Props) => (props.isOpen ? '50vw' : 0)};
	}
	@media (min-width: 1200px) {
		width: ${(props: Props) => (props.isOpen ? '35vw' : 0)};
	}
	overflow: scroll;
	transition: all 0.5s ease-in-out;
`;

export const ImgContainer = styled.img`
	object-fit: cover;
	height: 250px;
	width: 100%;
	margin: 0;
`;
