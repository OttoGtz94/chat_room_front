import React, { useState } from 'react';
import { FormGroup } from '@material-ui/core';
import ButtonSubmit from '../../layout/Form/ButtonSubmit';
import InputPassword from '../../layout/Form/InputPassword';
import InputTxt from '../../layout/Form/InputTxt';
import { useDispatch } from 'react-redux';
import { fnRegisterUser } from '../../../actions/register.actions';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordRepeat, setShowPasswordRepeat] =
		useState(false);
	const [user, setUser] = useState({
		names: '',
		first_name: '',
		last_name: '',
		email: '',
		movil: '',
		password: '',
		password_repeat: '',
		nickname: '',
	});

	const dispatch = useDispatch();
	const registrarUsuario = usuario =>
		dispatch(fnRegisterUser(usuario));

	const onChangueUser = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const navigate = useNavigate();

	const onSubmit = e => {
		e.preventDefault();
		registrarUsuario(user);
		setUser({
			names: '',
			first_name: '',
			last_name: '',
			email: '',
			movil: '',
			password: '',
			password_repeat: '',
			nickname: '',
		});

		setTimeout(() => {
			navigate('/login');
		}, 2000);
	};
	return (
		<form onSubmit={onSubmit}>
			<FormGroup>
				<InputTxt
					label='Nombres'
					name='names'
					onChangue={onChangueUser}
				/>
				<InputTxt
					label='Apellido Paterno'
					name='first_name'
					onChangue={onChangueUser}
				/>
				<InputTxt
					label='Apellido Materno'
					name='last_name'
					onChangue={onChangueUser}
				/>
			</FormGroup>
			<FormGroup>
				<InputTxt
					label='Movil'
					name='movil'
					onChangue={onChangueUser}
				/>
				<InputTxt
					label='Correo'
					name='email'
					onChangue={onChangueUser}
				/>
			</FormGroup>
			<FormGroup>
				<InputTxt
					label='Elige un nickname'
					name='nickname'
					onChangue={onChangueUser}
				/>
			</FormGroup>
			<FormGroup>
				<InputPassword
					label='Contraseña'
					showPassword={showPassword}
					setShowPassword={setShowPassword}
					name='password'
					onChangue={onChangueUser}
				/>
			</FormGroup>
			<FormGroup>
				<InputPassword
					label='Repite password'
					showPassword={showPasswordRepeat}
					setShowPassword={setShowPasswordRepeat}
					name='password_repeat'
					onChangue={onChangueUser}
				/>
			</FormGroup>
			<FormGroup>
				<ButtonSubmit txt={'Registarse'} />
			</FormGroup>
		</form>
	);
};

export default Register;
