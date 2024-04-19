import React from 'react';

import style from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, isLoading = false }) => {
	return (
		<button className={style.button}>
			{!isLoading && children}
			{isLoading && <div className={style['dot-flashing']} />}
		</button>
	);
};
