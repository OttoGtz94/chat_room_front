import {
	USUARIO_ERROR,
	USUARIO_EXITO,
} from '../types/user.types';

const initialState = {
	usuario: {},
	obtenido: false,
	error: false,
	autenticado: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case USUARIO_EXITO:
			return {
				...state,
				obtenido: true,
			};
		case USUARIO_ERROR:
			return {
				...state,
				obtenido: false,
				error: true,
			};
		default:
			return state;
	}
}
