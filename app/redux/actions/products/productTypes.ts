import type { ProductProperties, NewProduct, UpdateProduct } from "~/types/product";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const CREATE_PRODUCT_REQUEST = "CREATE_PRODUCT_REQUEST";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_FAILURE = "CREATE_PRODUCT_FAILURE";

export const UPDATE_PRODUCT_REQUEST = "UPDATE_PRODUCT_REQUEST";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_FAILURE = "UPDATE_PRODUCT_FAILURE";

export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAILURE = "DELETE_PRODUCT_FAILURE";

export const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";
export const CLEAR_SELECTED_PRODUCT = "CLEAR_SELECTED_PRODUCT";

// Action interfaces
export interface FetchProductsRequestAction {
  type: typeof FETCH_PRODUCTS_REQUEST;
}
export interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: ProductProperties[];
}
export interface FetchProductsFailureAction {
  type: typeof FETCH_PRODUCTS_FAILURE;
  payload: string;
}

export interface CreateProductRequestAction {
  type: typeof CREATE_PRODUCT_REQUEST;
  payload: NewProduct;
}
export interface CreateProductSuccessAction {
  type: typeof CREATE_PRODUCT_SUCCESS;
  payload: ProductProperties;
}
export interface CreateProductFailureAction {
  type: typeof CREATE_PRODUCT_FAILURE;
  payload: string;
}

export interface UpdateProductRequestAction {
  type: typeof UPDATE_PRODUCT_REQUEST;
  payload: UpdateProduct;
}
export interface UpdateProductSuccessAction {
  type: typeof UPDATE_PRODUCT_SUCCESS;
  payload: ProductProperties;
}
export interface UpdateProductFailureAction {
  type: typeof UPDATE_PRODUCT_FAILURE;
  payload: string;
}

export interface DeleteProductRequestAction {
  type: typeof DELETE_PRODUCT_REQUEST;
  payload: string;
}
export interface DeleteProductSuccessAction {
  type: typeof DELETE_PRODUCT_SUCCESS;
  payload: string;
}
export interface DeleteProductFailureAction {
  type: typeof DELETE_PRODUCT_FAILURE;
  payload: string;
}
export interface SetSelectedProductAction {
  type: typeof SET_SELECTED_PRODUCT;
  payload: string
}
export interface ClearSelectedProductAction {
  type: typeof CLEAR_SELECTED_PRODUCT;
}

export type ProductActions =
  | FetchProductsRequestAction
  | FetchProductsSuccessAction
  | FetchProductsFailureAction
  | CreateProductRequestAction
  | CreateProductSuccessAction
  | CreateProductFailureAction
  | UpdateProductRequestAction
  | UpdateProductSuccessAction
  | UpdateProductFailureAction
  | DeleteProductRequestAction
  | DeleteProductSuccessAction
  | DeleteProductFailureAction
  | SetSelectedProductAction
  | ClearSelectedProductAction;
