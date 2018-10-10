import {
	USERNAME_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGOUT_USER,
	LOGOUT_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
	username: '',
	password: '',
	userId: null,
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USERNAME_CHANGED:
			return { ...state, username: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };

		case LOGIN_USER:
			return { ...state, loading: true, error: '' };
		case LOGIN_USER_SUCCESS:
			return {
				...state,
				...INITIAL_STATE,
				userId: action.payload.userId
			};
		case LOGIN_USER_FAIL:
			return {
				...state,
				error: 'Authentikasi Gagal.',
				password: '',
				loading: false
			};
		case LOGOUT_USER:
			return { ...state, loading: true, error: '' };
		case LOGOUT_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE };

		default:
			return state;
	}
};
