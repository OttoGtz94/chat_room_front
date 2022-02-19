import clienteAxios from '../config/axios';

export function fnObtenerUsuario(token) {
	return async dispatch => {
		try {
			const user = await clienteAxios.get(
				`/get-user/${token}`,
			);
			console.log(user);
		} catch (error) {
			console.log(error);
		}
	};
}
