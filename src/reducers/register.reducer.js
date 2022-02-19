import {
	REGISTRO_RESET,
	REGISTRO_ERROR,
	REGISTRO_EXITO,
} from '../types/register.types';

const initialState = {
	registrado: false,
	error: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case REGISTRO_EXITO:
			return {
				...state,
				registrado: true,
				error: false,
			};
		case REGISTRO_ERROR:
			return {
				...state,
				registrado: false,
				error: true,
			};
		case REGISTRO_RESET:
			return {
				...state,
				registrado: false,
				error: false,
			};
		default:
			return state;
	}
}
