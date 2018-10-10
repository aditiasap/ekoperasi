import { AsyncStorage } from 'react-native';
import NavigatorService from '../services/navigator';

import {
	USERNAME_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGOUT_USER,
	LOGOUT_USER_SUCCESS
} from './types';

export const usernameChanged = (text) => {
	return {
		type: USERNAME_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const existingLoginUser = () => {
	return (dispatch) => {
		AsyncStorage.getItem('@ekoperasi:userId').then((value) => {
			if (value) {
				dispatch({
					type: LOGIN_USER_SUCCESS,
					payload: { userId: value }
				});
				setTimeout(() => {
					NavigatorService.navigate('App');
				}, 10);
			}
			else {
				AsyncStorage.getItem('@ekoperasi:username').then((value) => {
					if (value) {
						dispatch({
							type: USERNAME_CHANGED,
							payload: value
						});
					}
				});
			}
		});
	};
};

export const loginUser = ({ username, password }) => {
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });

		if (username.trim() === 'tesuser' && password.trim() === 'password') {
			dispatch({
				type: LOGIN_USER_SUCCESS,
				payload: { userId: 'tesuser' }
			});
			AsyncStorage.setItem('@ekoperasi:userId', username.trim());
			AsyncStorage.setItem('@ekoperasi:username', username.trim());
			setTimeout(() => {
				NavigatorService.navigate('App');
			}, 10);
		}
		else {
			dispatch({ type: LOGIN_USER_FAIL });
		}
	};
};

export const logoutUser = () => {
	return (dispatch) => {
		dispatch({ type: LOGOUT_USER });

		AsyncStorage.removeItem('@ekoperasi:userId');
		dispatch({ type: LOGOUT_USER_SUCCESS });
		setTimeout(() => {
			NavigatorService.navigate('Auth');
		}, 10);
	};
};
