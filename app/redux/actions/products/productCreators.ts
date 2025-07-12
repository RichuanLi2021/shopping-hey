import * as types from "./productTypes";
import * as productApi from "~/features/products/service/productApi";
import type { NewProduct, ProductProperties, UpdateProduct } from "~/types/product";
import type { Dispatch } from "redux";
import type { ProductActions } from "./productTypes";

export const fetchProductsRequest = (): types.FetchProductsRequestAction => ({ 
    type: types.FETCH_PRODUCTS_REQUEST 
});
export const fetchProductsSuccess = (products: ProductProperties[]): types.FetchProductsSuccessAction => ({ 
    type: types.FETCH_PRODUCTS_SUCCESS, payload: products 
});
export const fetchProductsFailure = (error: string): types.FetchProductsFailureAction => ({
     type: types.FETCH_PRODUCTS_FAILURE, payload: error 
    });

export const createProductRequest = (newProduct: NewProduct): types.CreateProductRequestAction => ({
     type: types.CREATE_PRODUCT_REQUEST, payload: newProduct 
    });
export const createProductSuccess = (product: ProductProperties): types.CreateProductSuccessAction => ({
     type: types.CREATE_PRODUCT_SUCCESS, payload: product 
    });
export const createProductFailure = (error: string): types.CreateProductFailureAction => ({
     type: types.CREATE_PRODUCT_FAILURE, payload: error 
    });

export const updateProductRequest = (update: UpdateProduct): types.UpdateProductRequestAction => ({
     type: types.UPDATE_PRODUCT_REQUEST, payload: update 
    });
export const updateProductSuccess = (product: ProductProperties): types.UpdateProductSuccessAction => ({
     type: types.UPDATE_PRODUCT_SUCCESS, payload: product 
    });
export const updateProductFailure = (error: string): types.UpdateProductFailureAction => ({
     type: types.UPDATE_PRODUCT_FAILURE, payload: error 
    });

export const deleteProductRequest = (id: string): types.DeleteProductRequestAction => ({
     type: types.DELETE_PRODUCT_REQUEST, payload: id 
    });
export const deleteProductSuccess = (id: string): types.DeleteProductSuccessAction => ({
     type: types.DELETE_PRODUCT_SUCCESS, payload: id 
    });
export const deleteProductFailure = (error: string): types.DeleteProductFailureAction => ({
     type: types.DELETE_PRODUCT_FAILURE, payload: error 
    });

export const setSelectedProduct = (id: string): types.SetSelectedProductAction => ({
  type: types.SET_SELECTED_PRODUCT,
  payload: id,
});
export const clearSelectedProduct = (): types.ClearSelectedProductAction => ({
  type: types.CLEAR_SELECTED_PRODUCT,
});

export const fetchProducts = () => async (dispatch: Dispatch<ProductActions>) => {
  dispatch(fetchProductsRequest());
  try {
    const products: ProductProperties[] = await productApi.getProducts();
    dispatch(fetchProductsSuccess(products));
  } catch (error: any) {
    dispatch(fetchProductsFailure(error.message));
  }
};

export const createProduct = (newProduct: NewProduct) => async (dispatch: Dispatch<ProductActions>) => {
  dispatch(createProductRequest(newProduct));
  try {
    const product: ProductProperties = await productApi.createProduct(newProduct);
    dispatch(createProductSuccess(product));
  } catch (error: any) {
    dispatch(createProductFailure(error.message));
  }
};

export const updateProduct = (update: UpdateProduct) => async (dispatch: Dispatch<ProductActions>) => {
  dispatch(updateProductRequest(update));
  try {
    const product: ProductProperties = await productApi.updateProduct(update);
    dispatch(updateProductSuccess(product));
  } catch (error: any) {
    dispatch(updateProductFailure(error.message));
  }
};

export const deleteProduct = (id: string) => async (dispatch: Dispatch<ProductActions>) => {
  dispatch(deleteProductRequest(id));
  try {
    await productApi.deleteProduct(id);
    dispatch(deleteProductSuccess(id));
  } catch (error: any) {
    dispatch(deleteProductFailure(error.message));
  }
};
