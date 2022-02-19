import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fnObtenerUsuario } from '../../../actions/user.actions';

const Main = () => {
	const loginState = {
		status: useSelector(state => state.loginReducer.status),
	};

	const navigate = useNavigate();

	const dispatch = useDispatch();
	const obtenerUsuario = token =>
		dispatch(fnObtenerUsuario(token));

	useEffect(() => {
		/* if (sessionStorage.getItem('token')) {
			const token = sessionStorage.getItem('token');
			jwt.verify(token, 'chat_room', async (error, data) => {
				if (error) {
					alert('Permiso denegado');
				} else {
					alert('Aceptado');
				}
			});
		} else {
			navigate('/login');
		} */
		obtenerUsuario(sessionStorage.getItem('token'));
	}, [loginState.status]);
	return (
		<div>
			<h1>Principal ya logueado</h1>
		</div>
	);
};

export default Main;
