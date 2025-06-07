import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ProductModal } from "./productModal";
import type { AddProductProps } from "~/types/product";

export const AddProduct = (
    { onAdd }: AddProductProps
) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    banner: "",
    description: "",
    price: "",
  });

  const handleSubmit = () => {
    const newProduct = {
      name: formData.name.trim(),
      banner: formData.banner.trim(),
      description: formData.description.trim(),
      price: parseFloat(formData.price),
    };

    if (
      !newProduct.name ||
      !newProduct.banner ||
      !newProduct.description ||
      isNaN(newProduct.price)
    ) {
      alert("Please fill in all fields with valid values.");
      return;
    }

    onAdd(newProduct);
    setShowModal(false);
    setFormData({ name: "", banner: "", description: "", price: "" });
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        <i className="bi bi-plus-circle me-2" />
        Add Product
      </Button>

      <ProductModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        title="Add New Product"
        submitLabel="Add Product"
      >
        <Form>
          <Form.Group className="mb-3" controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="productBanner">
            <Form.Label>Banner URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL (banner)"
              value={formData.banner}
              onChange={(e) =>
                setFormData({ ...formData, banner: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="productDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="productPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </ProductModal>
    </>
  );
};