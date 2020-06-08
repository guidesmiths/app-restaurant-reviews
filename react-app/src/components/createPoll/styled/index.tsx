import styled from 'styled-components';

interface Props {
	isOpen: boolean;
}

export const CreatePollContainer = styled.div`
	position: fixed;
	top: 80px;
	left: 100vw;
	bottom: 0;
	border-left: 3px solid #00cc99;
	background-color: rgb(247, 247, 247);
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	z-index: 50;
	@media (max-width: 880px) {
		transform: ${(props: Props) => (props.isOpen ? 'translateX(-100vw)' : 'translateX(0)')};
	}
	@media (min-width: 880px) and (max-width: 1200px) {
		width: 50vw;
		transform: ${(props: Props) => (props.isOpen ? 'translateX(-50vw)' : 'translateX(0)')};
	}
	@media (min-width: 1200px) {
		width: 30vw;
		transform: ${(props: Props) => (props.isOpen ? 'translateX(-30vw)' : 'translateX(0)')};
	}
	transition: all 0.5s ease-in-out;
`;
interface DisplayProps {
	active: boolean;
}
export const EditContainer = styled.div`
	position: relative;
	height: 100%;
	transform: ${(props: DisplayProps) => (props.active ? 'translateY(0)' : 'translateY(-100%)')};
	transition: all 0.5s ease-in-out;
`;
export const PollSuccessContainer = styled.div`
	position: relative;
	height: 100%;
	transform: ${(props: DisplayProps) => (props.active ? 'translateY(-100%)' : 'translateY(0)')};
	transition: all 0.5s ease-in-out;
`;
export const ChoicesContainer = styled.div`
	border-radius: 5px;
	border: 1px solid grey;
	overflow-y: scroll;
	height: 33%;
	margin: 0 20px 0 30px;
`;
export const CreatePollButton = styled.button`
	display: block;
	background-color: #00cc99;
	color: white;
	cursor: pointer;
	margin: 30px auto;
	width: 230px;
	height: 60px;
	border: none;
	border-radius: 30px;
	font-size: 1.4em;
	font-weight: bolder;
	&:hover {
		background-color: white;
		color: #00cc99;
		border: 2px solid #00cc99;
	}
	&:focus {
		outline: 0;
	}
	transition: all 0.3s ease-in-out;
`;

export const OptionCard = styled.div`
	margin: 5px;
	display: flex;
	align-items: center;
	padding-left: 15px;
	height: 40px;
	background-color: white;
	border-radius: 4px;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;
