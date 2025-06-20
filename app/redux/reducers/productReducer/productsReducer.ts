import * as actTypes from "../../actions/products/actionTypes";
import type ProductState from "./productStateProperties";
import * as prodActions from "../../actions/products/actionCreators";

const initialState: ProductState = {
    items: [],
    loading: false,
    error: null
}

export type ProductActions =
    //GET
    | ReturnType<typeof prodActions.fetchProductsRequest>
    | ReturnType<typeof prodActions.fetchProductsSuccess>
    | ReturnType<typeof prodActions.fetchProductsFailure>
    //POST
    | ReturnType<typeof prodActions.createProductRequest>
    | ReturnType<typeof prodActions.createProductSuccess>
    | ReturnType<typeof prodActions.createProductFailure>
    //UPDATE
    | ReturnType<typeof prodActions.updateProductsRequest>
    | ReturnType<typeof prodActions.updateProductsSuccess>
    | ReturnType<typeof prodActions.updateProductsFailure>
    //DELETE
    | ReturnType<typeof prodActions.deleteProductsRequest>
    | ReturnType<typeof prodActions.deleteProductsSuccess>
    | ReturnType<typeof prodActions.deleteProductsFailure>

export default function productsReducer(
    state = initialState,
    action: ProductActions
): ProductState {
    switch(action.type) {
        //FETCH action
        case actTypes.FETCH_PRODUCT_REQUEST:
            return {
                ...state, 
                loading: true, 
                error: null
            };
        case actTypes.FETCH_PRODUCT_SUCCESS:
            return {
                ...state, 
                loading: false, 
                items: action.payload
            };
        case actTypes.FETCH_PRODUCT_FAILURE:
            return {
                ...state, 
                loading: false, 
                error: action.payload
            };
        //POST ...
        case actTypes.CREATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true, 
                error: null
            };
        case actTypes.CREATE_PRODUCT_SUCCESS:
            //next state
            return {
                ...state, 
                loading: false, 
                items: [...state.items, action.payload]
            };
        case actTypes.CREATE_PRODUCT_FAILURE:
            return {
                ...state, 
                loading: false, 
                error: action.payload
            };
        //UPDATE ...
        case actTypes.UPDATE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true, 
                error: null
            };
        case actTypes.UPDATE_PRODUCT_SUCCESS:
            //next state
            return {
                ...state, 
                loading: false, 
                items: state.items.map(item => 
                    item.id == action.payload.id
                    ? action.payload
                    : item
                )
            };
        case actTypes.UPDATE_PRODUCT_FAILURE:
            return {
                ...state, 
                loading: false, 
                error: action.payload
            };
        //DELETE ...
        case actTypes.DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true, 
                error: null
            };
        case actTypes.DELETE_PRODUCT_SUCCESS:
            return {
                ...state, 
                loading: false, 
                items: state.items.filter(item => item.id != action.payload)
            };
        case actTypes.DELETE_PRODUCT_FAILURE:
            return {
                ...state, 
                loading: false, 
                error: action.payload
            };
        default:
            return state;
    }
    
}