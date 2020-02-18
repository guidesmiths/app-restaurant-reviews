import React, { FunctionComponent } from 'react';
import { DropDownRowStyled } from './styled/DropDownStyled';

interface Props {
	key: number;
	text: string;
	onClick: any;
}

const DropDownRow: FunctionComponent<Props> = ({ text, onClick, children }) => {
	return (
		<DropDownRowStyled onClick={onClick}>
			<p style={{ fontSize: '1.2em', fontWeight: 300, color: 'grey' }}>{text}</p>
			<div style={{ height: '30px', width: '30px', marginRight: '30px', marginLeft: '30px' }}>{children}</div>
		</DropDownRowStyled>
	);
};

export default DropDownRow;
