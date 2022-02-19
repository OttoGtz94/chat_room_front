import {
	INICIO_ERROR,
	INICIO_EXITOSO,
} from '../types/login.types';

const initialState = {
	status: '',
	token: '',
	msg: '',
};

export default function (state = initialState, action) {
	switch (action.type) {
		case INICIO_EXITOSO:
			return {
				...state,
				token: action.payload.token,
				status: action.payload.status,
				msg: action.payload.msg,
			};
		case INICIO_ERROR:
			return {
				...state,
				token: '',
				status: action.payload.status,
				msg: action.payload.msg,
			};
		default:
			return state;
	}
}
