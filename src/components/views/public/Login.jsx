import React, { useState, useEffect } from 'react';
import { FormGroup } from '@material-ui/core';
import InputPassword from '../../layout/Form/InputPassword';
import InputTxt from '../../layout/Form/InputTxt';
import ButtonSubmit from '../../layout/Form/ButtonSubmit';
import { useDispatch, useSelector } from 'react-redux';
import { fnLogin } from '../../../actions/login.actions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [credentials, setCredentials] = useState({
		nickname: '',
		password: '',
	});

	const onChangueCredentials = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
	};

	const dispatch = useDispatch();
	const iniciarSesion = credenciales =>
		dispatch(fnLogin(credenciales));

	const loginState = {
		status: useSelector(state => state.loginReducer.status),
		msg: useSelector(state => state.loginReducer.msg),
	};

	const navigate = useNavigate();

	const onSubmit = e => {
		e.preventDefault();
		iniciarSesion(credentials);
	};

	useEffect(() => {
		if (loginState.status === 200) {
			setTimeout(() => {
				navigate('/main');
			}, 2000);
		}
	}, [loginState.status]);
	return (
		<form onSubmit={onSubmit}>
			<FormGroup>
				<InputTxt
					label='Nickname'
					name='nickname'
					onChangue={onChangueCredentials}
				/>
				<InputPassword
					label='Password'
					showPassword={showPassword}
					setShowPassword={setShowPassword}
					name='password'
					onChangue={onChangueCredentials}
				/>
			</FormGroup>
			<FormGroup>
				<ButtonSubmit txt='Iniciar Sesión' />
			</FormGroup>
		</form>
	);
};

export default Login;
