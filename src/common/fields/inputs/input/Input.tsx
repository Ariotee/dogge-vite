import React from 'react';

import style from './input.module.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
	isError?: boolean;
	helperText?: string;
}

export const Input: React.FC<InputProps> = ({ isError = false, helperText, ...props }) => {
	return (
		<>
			<input
				className={`${style.input} ${isError ? style.error : ''} `}
				type='text'
				{...props}
			/>
			{isError && helperText && <span className={style.helper_text}>{helperText}</span>}
		</>
	);
};
