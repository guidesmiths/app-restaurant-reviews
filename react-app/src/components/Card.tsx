import React from 'react';
import styled from 'styled-components';

const CoolDiv = styled.div`
	border-radius: 5px;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	padding: 0.7rem;
	margin: 20px;
	box-sizing: border-box;
`;
const ImgContainer = styled.img`
	object-fit: cover;
	height: 150px;
	width: 100%;
`;

interface Props {
	name: string;
}

const Card = ({ name }: Props) => (
	<CoolDiv>
		<ImgContainer src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></ImgContainer>
		<p>{name}</p>
	</CoolDiv>
);

export default Card;
