import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Modal, Button } from 'react-bootstrap';
import type { ProductListProps } from '~/types/product';
import { ProductCard } from './productCard';
import type { ProductProperties } from "~/types/product";
import type { AppState, AppDispatch } from "~/redux/store";
import type { User } from '~/features/auth/types/auth_types';
import { Formik, Form as FormikForm } from 'formik';
import { ProductFormFields } from './productFormFields';
import { ProductModal } from './productModal';
import { clearSelectedProduct, setSelectedProduct, deleteProduct } from '~/redux/actions/products/productCreators';

interface ProductListExtendedProps extends ProductListProps {
  user: User | null;
  isAuthenticated: boolean;
}

export const ProductList = ({ products, user, isAuthenticated }: ProductListExtendedProps) => {
  const { currentUser } = useSelector((state: AppState) => state.auth);
  const selectedProductId = useSelector((state: AppState) => state.products.selectedProductId);
  const selectedProduct = products.find(p => p.id === selectedProductId);
  const dispatch = useDispatch<AppDispatch>();
  const [deleteMode, setDeleteMode] = useState(false);

  // Helper to check permissions
  const canAddToCart = () => isAuthenticated && currentUser && currentUser.accessLevel === 'USER';

  // Show delete modal if in delete mode and a product is selected
  const showDeleteModal = deleteMode && selectedProduct;

  return (
    <>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((item) => (
          <Col key={item.id}>
            <ProductCard
              product={item}
              onAddToCart={canAddToCart() ? (id) => {/* add to cart logic */} : undefined}
            />
          </Col>
        ))}
      </Row>
      {/* Edit Modal (already present) */}
      {selectedProduct && !deleteMode && (
        <Formik
          initialValues={{
            productName: selectedProduct.name,
            bannerUrl: selectedProduct.banner,
            description: selectedProduct.description,
            price: selectedProduct.price,
          }}
          onSubmit={(values) => {
            // TODO: wire up update logic
            dispatch(clearSelectedProduct());
          }}
        >
          {({ handleSubmit, isSubmitting, resetForm }) => (
            <ProductModal
              show={!!selectedProduct}
              onClose={() => {
                resetForm();
                dispatch(clearSelectedProduct());
              }}
              onSubmit={() => handleSubmit()}
              title={`Edit Product: ${selectedProduct.name}`}
              submitLabel="Save"
              isSubmitting={isSubmitting}
              initialValues={{
                name: selectedProduct.name,
                banner: selectedProduct.banner,
                description: selectedProduct.description,
                price: selectedProduct.price,
              }}
            >
              <FormikForm id="product-form" noValidate>
                <ProductFormFields />
              </FormikForm>
            </ProductModal>
          )}
        </Formik>
      )}
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <Modal show onHide={() => { setDeleteMode(false); dispatch(clearSelectedProduct()); }}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete <b>{selectedProduct.name}</b>?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => { setDeleteMode(false); dispatch(clearSelectedProduct()); }}>
              No
            </Button>
            <Button variant="danger" onClick={() => {
              dispatch(deleteProduct(selectedProduct.id));
              setDeleteMode(false);
              dispatch(clearSelectedProduct());
            }}>
              Yes, Delete
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}