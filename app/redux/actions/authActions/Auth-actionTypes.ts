export enum AuthActionTypes {
  // Signup
  SIGNUP_REQUEST = 'auth/SIGNUP_REQUEST',
  SIGNUP_SUCCESS = 'auth/SIGNUP_SUCCESS',
  SIGNUP_FAILURE = 'auth/SIGNUP_FAILURE',

  // Login
  LOGIN_REQUEST = 'auth/LOGIN_REQUEST',
  LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS',
  LOGIN_FAILURE = 'auth/LOGIN_FAILURE',

  //Logout - tmp
  LOGOUT = 'auth/LOGOUT'

  
  // Implement LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE when backend db is setup to use async for logout
}