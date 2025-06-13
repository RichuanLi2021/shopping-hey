import type { Dispatch } from "redux";
import * as actTypes from "./actionTypes";
import { toast } from 'react-toastify';
import type { ProductProperties, NewProduct, UpdateProduct } from "~/types/product";

//GET PRODUCTS
export const fetchProductsRequest = () => ({
    type: actTypes.FETCH_PRODUCT_REQUEST
})

export const fetchProductsSuccess = (products: ProductProperties[]) => ({
    type: actTypes.FETCH_PRODUCT_SUCCESS,
    payload: products
})

export const fetchProductsFailure = (error: string) => ({
    type: actTypes.FETCH_PRODUCT_FAILURE,
    payload: error
})

export const fetchProducts = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchProductsRequest());
        try{
            const res = await fetch('http://localhost:5173/api/products');
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

export const createProducts = (newProduct: NewProduct) => {
    return async (dispatch: Dispatch) => {
        dispatch(createProductRequest(newProduct));
        try{
            const res = await fetch('http://localhost:5173/api/products', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newProduct)
            });
            if(!res.ok) throw new Error(`HTTP ${res.status}`);
            const createdProduct: ProductProperties = await res.json();
            dispatch(createProductSuccess(createdProduct));
            toast.success('Product created!');

            //refresh
            const fetchCurrentProducts = await fetch('http://localhost:5173/api/products');
            const updatedProductsData = await fetchCurrentProducts.json();
            dispatch(fetchProductsSuccess(updatedProductsData));
        } catch (err: any) {
            dispatch(createProductFailure(err.message));
            toast.error('Failed to create the product');
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

export const updateProducts = (update: UpdateProduct) => {
    async (dispatch: Dispatch) => {
        dispatch(updateProductsRequest(update));
        try{
            const res = await fetch('http://localhost:5173/api/products/${update.id}', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(update)
            })
            if(!res.ok) throw new Error(`HTTP ${res.status}`);
            const updatedProd: ProductProperties = await res.json();
            dispatch(updateProductsSuccess(updatedProd));
            toast.success('Product updated!');
        } catch (err: any) {
            dispatch(updateProductsFailure(err));
            toast.error("Failed to update the product!");
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
    async (dispatch: Dispatch) => {
        dispatch(deleteProductsRequest(productId));
        try{
            const res = await fetch('http://localhost:5173/api/products/${update.id}', {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(productId)
            })
            if(!res.ok) throw new Error(`HTTP ${res.status}`);
            dispatch(deleteProductsSuccess(productId));
            toast.success("Product deleted!")
        } catch (err: any) {
            dispatch(deleteProductsFailure(err.message));
            toast.error('Failed to delete the product.')
        }
    }
}





