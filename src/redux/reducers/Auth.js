import {
	AUTH_TOKEN,
	AUTH,
	AUTHENTICATED,
	SHOW_AUTH_MESSAGE,
	HIDE_AUTH_MESSAGE,
	SIGNOUT_SUCCESS,
	SIGNUP_SUCCESS,
	SHOW_LOADING,
	ONLOADING,
	SETTINGS,
	SIGNIN_WITH_GOOGLE_AUTHENTICATED,
  SIGNIN_WITH_FACEBOOK_AUTHENTICATED
} from '../constants/Auth';

const initState = {
  loading: false,
  message: '',
  showMessage: false,
  redirect: '',
  token: localStorage.getItem(AUTH_TOKEN),
  login:null,
  settings:null,
}
const auth = (state = initState, action) => {
	console.log(action.payload)
	switch (action.type) {
		case AUTH:
			return {
				...state,
				login:action.payload,
				loading: false,
			}
			case ONLOADING:
				return{
					...state,loading:action.payload
				}
		case AUTHENTICATED:
			return {
				...state,
				loading: false,
				redirect: '/',
				token: action.token
			}
			case SETTINGS:
			return {
				...state,
				loading: false,
				settings: action.payload
			}
		case SHOW_AUTH_MESSAGE: 
			return {
				...state,
				message: action,
				showMessage: true,
				loading: false
			}
		case HIDE_AUTH_MESSAGE: 
			return {
				...state,
				message: '',
				showMessage: false,
			}
		case SIGNOUT_SUCCESS: {
			return {
				...state,
				token: null,
				redirect: '/',
				loading: false
			}
		}
		case SIGNUP_SUCCESS: {
			return {
			  ...state,
			  loading: false,
			  token: action.token
			}
		}
		case SHOW_LOADING: {
			return {
				...state,
				loading: true
			}
		}
		case SIGNIN_WITH_GOOGLE_AUTHENTICATED: {
			return {
				...state,
				loading: false,
				token: action.token
			}
		}
		case SIGNIN_WITH_FACEBOOK_AUTHENTICATED: {
			return {
				...state,
				loading: false,
				token: action.token
			}
		}
		default:
			return state;
	}
}

export default auth