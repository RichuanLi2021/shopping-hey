import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import type { NewProduct } from "~/types/product";
import type { AppState, AppDispatch } from "~/redux/store";
import { fetchProducts, createProduct } from "~/redux/actions/products/actionCreators";
import { ProductList } from "../components/products/productList";
import { AddProduct } from "../components/products/addProducts";
import type { Route } from "./+types/product";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Product" },
    { name: "description", content: "Product" },
  ];
}

export default function ProductPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { items: products, loading, error } = useSelector((state: AppState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddProduct = (newProduct: NewProduct) => {
    dispatch(createProduct(newProduct));
  };

  if (loading) {
    return (
      <Container className="mt-4">
        <div className="d-flex justify-content-center">
          <p>Loading products...</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <div className="d-flex justify-content-center">
          <p className="text-danger">{error}</p>
        </div>
      </Container>
    );
  }

  return (
    <section>
      <Container className="mt-4">
        <div className="d-flex justify-content-end mb-4">
          <AddProduct onAdd={handleAddProduct} />
        </div>

        {products.length === 0 ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "200px" }}
          >
            <p className="text-muted">We&#39;re currently out of stock</p>
          </div>
        ) : (
          <ProductList products={products} />
        )}
      </Container>
    </section>
  );
}