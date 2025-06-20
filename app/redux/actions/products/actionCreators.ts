import type { Dispatch } from "redux";
import * as actTypes from "./actionTypes";
import { toast } from 'react-toastify';
import type { ProductProperties, NewProduct, UpdateProduct } from "~/types/product";
import { env } from "~/config/env";

//GET PRODUCTS
export const fetchProductsRequest = () => (
    {
        type: actTypes.FETCH_PRODUCT_REQUEST
    }
)

export const fetchProductsSuccess = (products: ProductProperties[]) => (
    {
        type: actTypes.FETCH_PRODUCT_SUCCESS,
        payload: products
    }
)

export const fetchProductsFailure = (error: string) => (
    {
        type: actTypes.FETCH_PRODUCT_FAILURE,
        payload: error
    }
)



export const fetchProducts = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchProductsRequest());
        try {
            const res = await fetch(`${env.apiBaseUrl}${env.apiPrefix}/products`, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
            const prodData = await res.json();
            dispatch(fetchProductsSuccess(prodData));
        } catch (err: any) {
            dispatch(fetchProductsFailure(err.message));
            toast.error('Failed to load products');
        }
    }
}

//POST PRODUCTS
export const createProductRequest = (newProduct: NewProduct) => ({
    type: actTypes.CREATE_PRODUCT_REQUEST,
    payload: newProduct
})

export const createProductSuccess = (createdNewProduct: ProductProperties) => ({
    type: actTypes.CREATE_PRODUCT_SUCCESS,
    payload: createdNewProduct
})

export const createProductFailure = (error: string) => ({
    type: actTypes.CREATE_PRODUCT_FAILURE,
    payload: error
})

export const createProduct = (newProduct: NewProduct) => {
    return async (dispatch: Dispatch) => {
        dispatch(createProductRequest(newProduct));
        try {
            const res = await fetch(`${env.apiBaseUrl}${env.apiPrefix}/products`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newProduct)
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const createdProduct = await res.json();
            dispatch(createProductSuccess(createdProduct));
            toast.success('Product created successfully');
        } catch (err: any) {
            dispatch(createProductFailure(err.message));
            toast.error('Failed to create product');
        }
    }
}

//UPDATE PRODUCTS
export const updateProductsRequest = (update: UpdateProduct) => ({
    type: actTypes.UPDATE_PRODUCT_REQUEST,
    payload: update
})

export const updateProductsSuccess = (updatedProduct: ProductProperties) => ({
    type: actTypes.UPDATE_PRODUCT_SUCCESS,
    payload: updatedProduct
})

export const updateProductsFailure = (error: string) => ({
    type: actTypes.UPDATE_PRODUCT_FAILURE,
    payload: error
})

export const updateProduct = (product: UpdateProduct) => {
    return async (dispatch: Dispatch) => {
        dispatch(updateProductsRequest(product));
        try {
            const res = await fetch(`${env.apiBaseUrl}${env.apiPrefix}/products/${product.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product)
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const updatedProduct = await res.json();
            dispatch(updateProductsSuccess(updatedProduct));
            toast.success('Product updated successfully');
        } catch (err: any) {
            dispatch(updateProductsFailure(err.message));
            toast.error('Failed to update product');
        }
    }
}

//DELETE PRODUCT
export const deleteProductsRequest = (productId: number) => ({
    type: actTypes.DELETE_PRODUCT_REQUEST,
    payload: productId
})

export const deleteProductsSuccess = (productId: number) => ({
    type: actTypes.DELETE_PRODUCT_SUCCESS,
    payload: productId
})

export const deleteProductsFailure = (error: string) => ({
    type: actTypes.DELETE_PRODUCT_FAILURE,
    payload: error
})

export const deleteProduct = (productId: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(deleteProductsRequest(productId));
        try {
            const res = await fetch(`${env.apiBaseUrl}${env.apiPrefix}/products/${productId}`, {
                method: 'DELETE',
                headers: { 'Accept': 'application/json' }
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            dispatch(deleteProductsSuccess(productId));
            toast.success('Product deleted successfully');
        } catch (err: any) {
            dispatch(deleteProductsFailure(err.message));
            toast.error('Failed to delete product');
        }
    }
}





