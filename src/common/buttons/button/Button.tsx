import React from 'react';

import style from './button.module.css';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children }) => {
	return <button className={style.button}>{children}</button>;
};
