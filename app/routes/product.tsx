import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import type { NewProduct } from "~/types/product";

import { sampleProducts as initialProducts } from "../data/sampleProducts";
import { ProductList } from "../components/products/productList";
import { AddProduct } from "../components/products/addProducts";

export default function ProductPage() {
  const [products, setProducts] = useState(initialProducts);

  const handleAddProduct = (newProduct: NewProduct) => {
    const nextId =
      products.length > 0
        ? Math.max(...products.map((p) => p.id)) + 1
        : 1;

    setProducts([
      ...products,
      {
        id: nextId,
        ...newProduct,
      },
    ]);
  };

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