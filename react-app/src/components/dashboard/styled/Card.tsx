import styled from 'styled-components';

interface ContainerProps {
	isMoved: boolean;
	children: any;
}
export const CardContainer = styled.div`
	transform: ${(props: ContainerProps) =>
		props.isMoved ? 'translateX(-15vw) translateY(-5%) scale(0.9)' : 'translateX(0)'};
	transition: transform 0.5s;
	width: 74%;
	margin: 30px auto 50px auto;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
	@media (max-width: 880px) {
		width: 85%;
		grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
	}
	@media (max-width: 540px) {
		width: 87%;
		grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
	}
	@media (max-width: 340px) {
		width: 92%;
		grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
	}
`;

interface CoolProps {
	inactive?: boolean;
	flip?: boolean;
	draggable?: boolean;
}
export const SuperDiv = styled.div`
	background-color: transparent;
	perspective: 2000px;
	height: 250px;
	transition: all 0.4s linear;
	transform: ${(props: CoolProps) => (props.inactive ? 'scale(0.95)' : 'scale(1)')};
	filter: ${(props: CoolProps) => (props.inactive ? 'grayscale(90%)' : 'none')};
	&:hover {
		transform: scale(1.03);
		cursor: pointer;
	}
`;
export const CoolDiv = styled.div`
	position: absolute;
	border-radius: 5px;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	overflow: hidden;
	margin: 20px 10px;
	box-sizing: border-box;
	transition: all 0.4s linear;
	background-color: white;
	backface-visibility: hidden;
	z-index: 20;
	transform: ${(props: CoolProps) => (props.flip ? 'rotateY(360deg)' : 'rotateY(180deg)')};
	cursor: pointer;
`;
export const CoolDivBack = styled.div`
	height: 100%;
	width: 100%;
	border-radius: 5px;
	overflow: hidden;
	transition: all 0.4s linear;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	box-sizing: border-box;
	background-color: rgb(250, 250, 250);
	border: 1px solid rgb(151, 247, 215);
	backface-visibility: hidden;
	transform: ${(props: CoolProps) => (!props.flip ? 'rotateY(0deg)' : 'rotateY(180deg)')};
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const ImgContainer = styled.img`
	object-fit: cover;
	height: 150px;
	width: 100%;
`;
export const CardTitle = styled.h4`
	font-weight: 700;
	font-size: 1.4em;
	margin: 0;
`;
export const CardRate = styled.h3`
	font-weight: 700;
	font-size: 2.2em;
	color: #00cc99;
	margin: 0;
`;
