import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import type { NewProduct } from "~/types/product";
import type { AppState, AppDispatch } from "~/redux/store";
import { fetchProducts, createProduct } from "~/redux/actions/products/productCreators";
import { ProductList } from "./productList";
import { AddProduct } from "~/features/products/components/addProducts";
import Spinner from 'react-bootstrap/Spinner';

const Toast = ({ message, onClose }: { 
  message: string; 
  onClose: () => void 
}) => (
  <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999 }} className="alert alert-danger alert-dismissible fade show">
    {message}
    <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
  </div>
);

const ProductContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items: products, loading, error } = useSelector(
    (state: AppState) => state.products
  );
  const { isAuthenticated, currentUser } = useSelector(
    (state: AppState) => state.auth
  );
  const [showToast, setShowToast] = useState(false);

  console.log("user is: ", currentUser?.accessLevel, `and name is: ${currentUser?.name}`)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (error) setShowToast(true);
  }, [error]);

  const handleAddProduct = (newProduct: NewProduct) => {
    dispatch(createProduct(newProduct));
  };

  return (
    <section>
      <Container className="mt-4">
        <div className="d-flex justify-content-end mb-4">
          {isAuthenticated && (currentUser?.accessLevel === 'ADMIN' || currentUser?.accessLevel === 'SELLER') && (
            <AddProduct onAdd={handleAddProduct} />
          )}
        </div>
        {showToast && error && (
          <Toast message={error} onClose={() => setShowToast(false)} />
        )}
        {loading && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(255,255,255,0.6)', zIndex: 9998 }} className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status" style={{ width: 60, height: 60 }}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {!loading && (products.length === 0 ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "200px" }}
          >
            <p className="text-muted">We&#39;re currently out of stock</p>
          </div>
        ) : (
          <ProductList products={products} user={currentUser} isAuthenticated={isAuthenticated} />
        ))}
      </Container>
    </section>
  );
};

export default ProductContainer; 