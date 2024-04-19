import React from 'react';

import { Input } from '@common/fields';
import { Button } from '@common/buttons';

import style from './loginpage.module.css';

const validateIsEmpty = (value: string) => {
	if (!value) return 'field required';
	return null;
};

const validateUsername = (value: string) => {
	return validateIsEmpty(value);
};

const validatePassword = (value: string) => {
	return validateIsEmpty(value);
};

const loginFormValidateSchema = {
	username: validateUsername,
	password: validatePassword,
};

const validateLoginForm = (name: keyof typeof loginFormValidateSchema, value: string) => {
	return loginFormValidateSchema[name](value);
};

interface FormErrors {
	username: string | null;
	password: string | null;
}

export const LoginPage: React.FC = () => {
	const [formValues, setFormValues] = React.useState({ username: '', password: '' });
	const [formErrors, setFormErrors] = React.useState<FormErrors>({
		username: null,
		password: null,
	});

	return (
		<div className={style.login_page}>
			<div className={style.container}>
				<div className={style.header_container}>
					<h1 className={style.header_title}>DOGGEE</h1>
				</div>
				<div className={style.form_container}>
					<div className={style.input_container}>
						<Input
							type='text'
							value={formValues.username}
							placeholder='Username'
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								const username = event.target.value;
								setFormValues({ ...formValues, username });

								const error = validateLoginForm('username', username);
								setFormErrors({ ...formErrors, username: error });
							}}
							{...(!!formErrors.username && {
								isError: !!formErrors.username,
								helperText: formErrors.username,
							})}
						/>
					</div>

					<div className={style.input_container}>
						<Input
							value={formValues.password}
							placeholder='Password'
							type='password'
							onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
								const password = event.target.value;
								setFormValues({ ...formValues, password });

								const error = validateLoginForm('password', password);
								setFormErrors({ ...formErrors, password: error });
							}}
							{...(!!formErrors.password && {
								isError: !!formErrors.password,
								helperText: formErrors.password,
							})}
						/>
					</div>

					<div>
						<Button>Sign in</Button>
					</div>
				</div>

				<div className={style.sign_up_container}>
					<span className={style.sign_up_span}>Create new account</span>
				</div>
			</div>
		</div>
	);
};
