import React, { FunctionComponent } from 'react';
import { DropDownRowStyled } from './styled/DropDownStyled';

interface Props {
	key: number;
	text: string;
}

export const DropDownRow: FunctionComponent<Props> = ({ text, children }) => {
	return (
		<DropDownRowStyled>
			<p style={{ fontSize: '1.2em', fontWeight: 300, color: 'grey' }}>{text}</p>
			<div style={{ height: '30px', width: '30px', marginRight: '30px', marginLeft: '30px' }}>{children}</div>
		</DropDownRowStyled>
	);
};
