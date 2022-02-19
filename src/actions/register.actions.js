import clienteAxios from '../config/axios';
import {
	REGISTRO_ERROR,
	REGISTRO_EXITO,
	REGISTRO_RESET,
} from '../types/register.types';
export function fnRegisterUser(newUser) {
	return async dispatch => {
		try {
			const user = {
				name: {
					names: newUser.names,
					firstName: newUser.first_name,
					lastName: newUser.last_name,
				},
				email: newUser.email,
				movil: newUser.movil,
				password: newUser.password,
				nickname: newUser.nickname,
			};
			const res = await clienteAxios.post(
				'/user-register',
				user,
			);
			if (res.data.status === 400) {
				console.log(res.data.msg);
				dispatch(registroError);
			} else {
				console.log(res.data.msg);
				dispatch(registroExito);
			}
			setTimeout(() => {
				dispatch(registroReset);
			}, 2000);
		} catch (error) {}
	};
}

const registroExito = () => ({
	type: REGISTRO_EXITO,
});

const registroError = () => ({
	type: REGISTRO_ERROR,
});

const registroReset = () => ({
	type: REGISTRO_RESET,
});
