import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import type { ProductListProps, UpdatedValues } from '~/types/product';
import { ProductCard } from './productCard';
import { ProductModal } from "./productModal";
import { updateProduct, deleteProduct } from "~/redux/actions/products/actionCreators";
import type { ProductProperties } from "~/types/product";
import type { AppDispatch } from "~/redux/store";
import { Formik, Form as FormikForm } from "formik";
import { ProductFormFields } from "./productFormFields";
import { AddProductValidationSchema } from "~/validations/formValidationSchema";

export const ProductList = (
    {products}: ProductListProps
) => {
  // Dispatch thunks
  const dispatch = useDispatch<AppDispatch>();

  const [editingProduct, setEditingProduct] = useState<ProductProperties | null>(null);
  const [deletingProduct, setDeletingProduct] = useState<ProductProperties | null>(null);

  const handleEdit = (product: ProductProperties) => setEditingProduct(product);
  const handleDelete = (product: ProductProperties) => setDeletingProduct(product);

  const handleSaveEdit = (values: UpdatedValues) => {
    if (editingProduct) {
      dispatch(updateProduct({
        ...editingProduct,
        name: values.name,
        banner: values.banner,
        description: values.description,
        price: values.price,
      }));
      setEditingProduct(null);
    }
  };

  // Confirm delete
  const confirmDelete = () => {
    if (deletingProduct) {
      dispatch(deleteProduct(deletingProduct.id));
      setDeletingProduct(null);
    }
  };

  return (
    <>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((item) => (
          <Col key={item.id}>
            <ProductCard 
              product={item} 
              onDelete={() => handleDelete(item)}
              onEdit={() => handleEdit(item)}
            />  
          </Col>
        ))}
      </Row>

      {/* Edit Modal */}
      {editingProduct && (
        <Formik
          initialValues={{
            productName: editingProduct?.name ?? "",
            bannerUrl: editingProduct?.banner ?? "",
            description: editingProduct?.description ?? "",
            price: editingProduct?.price ?? 0,
          }}
          onSubmit={handleSaveEdit}
          validationSchema={AddProductValidationSchema}
        >
          {({ handleSubmit, isSubmitting, resetForm }) => (
            <ProductModal
              show={!!editingProduct}
              onClose={() => { 
                resetForm(); 
                setEditingProduct(null); 
              }}
              onSubmit={() => handleSubmit()}
              title="Edit Product"
              submitLabel="Save Changes"
              isSubmitting={isSubmitting}
              initialValues={editingProduct}
            >
              <FormikForm id="product-form" noValidate>
                <ProductFormFields />
              </FormikForm>
            </ProductModal>
          )}
        </Formik>
      )}

      {/* Delete Confirmation Modal */}
      <Modal show={!!deletingProduct} onHide={() => setDeletingProduct(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete <b>{deletingProduct?.name}</b>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeletingProduct(null)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}