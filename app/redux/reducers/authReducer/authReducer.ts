import type AuthState from "./authStateProperties";
import type { AuthActions } from "~/redux/actions/authActions/Auth-actionCreators";
import { AuthActionTypes } from "~/redux/actions/authActions/Auth-actionTypes";

const initialState: AuthState = {
    pendingSignup: undefined,
    pendingLogin: undefined,

    currentUsers: null,
    jwtToken: null,

    loading: false,
    error: null
}

export default function authReducer(
    state = initialState,
    action: AuthActions
): AuthState {
    switch(action.type) {
        //Signup
        case AuthActionTypes.SIGNUP_REQUEST:
            return {
                ...state,

                pendingSignup: action.payload.formData,

                loading: true,
                error: null
            };
        case AuthActionTypes.SIGNUP_SUCCESS:
            return {
                ...state,

                currentUsers: action.payload.user,
                jwtToken: action.payload.token,

                pendingSignup: undefined,

                loading: false,
                error: null
            };
        case AuthActionTypes.SIGNUP_FAILURE:
            return {
                ...state,
                pendingSignup: undefined,
                loading: false,
                error: action.payload.error
            }

        //login
        case AuthActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                pendingLogin: action.payload.formData,
                loading: true,
                error: null
            };
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                currentUsers: action.payload.user,
                jwtToken: action.payload.token,

                pendingLogin: undefined,
                loading: false,
                error: null
            };
        case AuthActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                pendingLogin: undefined,
                loading: false,
                error: action.payload.error
            };

        // Logout – restore slice to initial state
        case AuthActionTypes.LOGOUT:
            return initialState;
            
        default:
            return state;
    }
}