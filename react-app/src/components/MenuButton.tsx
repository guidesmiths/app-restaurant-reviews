import React from 'react';
import { ReactComponent as Burger } from '../assets/burger.svg';
import { ReactComponent as Close } from '../assets/close.svg';

interface Props {
	isOpen: boolean;
	toggleOpen: (val: boolean) => void;
}

const MenuButton = ({ isOpen, toggleOpen }: Props) => {
	return (
		<div
			style={{ height: '40px', width: '40px', fill: 'grey', marginRight: '20px' }}
			onClick={() => toggleOpen(!isOpen)}
		>
			{!isOpen ? (
				<Burger></Burger>
			) : (
				<div style={{ boxSizing: 'border-box', padding: '5px' }}>
					<Close></Close>
				</div>
			)}
		</div>
	);
};

export default MenuButton;
