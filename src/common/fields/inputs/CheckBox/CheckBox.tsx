import React from 'react';

import { InputProps } from '../input';

import style from './CheckBox.module.css';

export const CheckBox: React.FC<InputProps> = ({ label, ...props }) => {
	return (
		<label className={style.checkbox_container}>
			<input className={style.checkbox} type='checkbox' checked={props.checked} {...props} />
			<span className={style.custom_checkbox} />
			<span className={style.label}>{label}</span>
		</label>
	);
};
