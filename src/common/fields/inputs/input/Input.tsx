import React from 'react';

import style from '../input.module.css';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
	label: string;
	isError?: boolean;
	helperText?: string;
}

export const Input: React.FC<InputProps> = ({ isError = false, helperText, label, ...props }) => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [isFocus, setIsFocus] = React.useState(!!props.value ?? false);

	return (
		<>
			<div
				className={`${style.input_container} ${isError ? style.input_container : ''} ${
					isFocus ? style.focused : ''
				}`}
				onClick={() => {
					inputRef.current?.focus();
					setIsFocus(true);
				}}
			>
				<label htmlFor='' className={style.input_label}>
					{label}
				</label>
				<input
					onBlur={() => !props.value && setIsFocus(false)}
					ref={inputRef}
					className={style.input}
					{...props}
				/>
			</div>
			{isError && helperText && <span className={style.helper_text}>{helperText}</span>}
		</>
	);
};
