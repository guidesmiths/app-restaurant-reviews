import styled from 'styled-components';

interface Props {
	position: number;
}
interface PropsB {
	active: boolean;
}
export const Wrapper = styled.div`
	display: flex;
	position: relative;
	@media (max-width: 540px) {
		width: 100%;
	}
`;

export const Button = styled.button`
	background-color: transparent;
	text-decoration: none;
	outline: none;
	cursor: pointer;
	font-size: 1em;
	z-index: 5;
	border: none;
	width: 100px;
	margin-right: 5px;
	height: 30px;
	transition: all 0.4s;
	font-weight: ${(props: PropsB) => (props.active ? 'bolder' : '')};
	color: ${(props: PropsB) => (props.active ? 'white' : 'black')};
	@media (max-width: 540px) {
		width: 33%;
	}
	&:hover {
		color: ${(props: PropsB) => (props.active ? 'white' : '#00cc99')};
		transform: scale(1.05);
	}
`;

export const Back = styled.div`
	position: absolute;
	background-color: #00cc99;
	height: 100%;
	width: 100px;
	border-radius: 15px;
	box-sizing: border-box;
	transition: all 0.4s;
	left: ${(props: Props) => `${props.position * 33.33}%`};
	@media (max-width: 540px) {
		width: 33%;
	}
`;
