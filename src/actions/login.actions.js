import clienteAxios from '../config/axios';
import {
	INICIO_ERROR,
	INICIO_EXITOSO,
} from '../types/login.types';

export function fnLogin(credentials) {
	return async dispatch => {
		try {
			const res = await clienteAxios.post(
				'/login',
				credentials,
			);
			if (res.data.status !== 200) {
				console.log(res.data.msg);
				dispatch(inicioError(res.data));
				sessionStorage.setItem('status', res.data.status);
			} else {
				console.log(res.data.msg);
				dispatch(inicioExito(res.data));
				sessionStorage.setItem('token', res.data.token);
				sessionStorage.setItem('status', res.data.status);
			}
		} catch (error) {
			console.log(error);
		}
	};
}

const inicioExito = data => ({
	type: INICIO_EXITOSO,
	payload: data,
});

const inicioError = data => ({
	type: INICIO_ERROR,
	payload: data,
});
