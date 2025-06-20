import { combineReducers } from 'redux';
import productsReducer from './productReducer/productsReducer';
import authReducer from './authReducer/authReducer';

export const rootReducer = combineReducers({
    products: productsReducer,
    users: authReducer
    //other reducers mount here
})