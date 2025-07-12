import type { ProductProperties } from "../../../types/product";
import type { ProductState } from "./productStateProperties";
import * as types from "../../actions/products/productTypes";
import type { ProductActions } from "../../actions/products/productTypes";

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
  selectedProductId: null
};

export default function productReducer(
  state = initialState,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return { 
        ...state, 
        loading: true, 
        error: null 
    };
    case types.FETCH_PRODUCTS_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        items: action.payload 
    };
    case types.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
    };
    case types.CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
    };
    case types.CREATE_PRODUCT_SUCCESS:
      return {
         ...state, 
         loading: false, 
         items: [action.payload, ...state.items] 
    };
    case types.CREATE_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
    };
    case types.UPDATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
    };
    case types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
    };
    case types.UPDATE_PRODUCT_FAILURE:
      return { 
        ...state, 
        loading: false, 
        error: action.payload 
    };
    case types.DELETE_PRODUCT_REQUEST:
      return { 
        ...state, 
        loading: true, 
        error: null 
    };
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.filter((item) => item.id !== action.payload),
    };
    case types.DELETE_PRODUCT_FAILURE:
      return { 
        ...state, 
        loading: false, 
        error: action.payload 
    };
    case types.SET_SELECTED_PRODUCT:
      return { 
        ...state, 
        selectedProductId: action.payload
    };
    case types.CLEAR_SELECTED_PRODUCT:
      return { 
        ...state, 
        selectedProductId: null 
    };
    default:
      return state;
  }
}
