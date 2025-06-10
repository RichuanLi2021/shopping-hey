import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ProductModal } from "./productModal";
import { Formik, Form as FormikForm, useField } from 'formik';
import { MyTextInput } from "~/utils/fieldsType";
import type { AddProductProps } from "~/types/product";
import { AddProductValidationSchema } from "~/validations/formValidationSchema";

export const AddProduct = ({ onAdd }: AddProductProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        <i className="bi bi-plus-circle me-2" />
        Add Product
      </Button>

      <Formik
        initialValues={{
          productName: "",
          bannerUrl: "",
          description: "",
          price: "",
        }}
        validationSchema={AddProductValidationSchema}
        onSubmit={(values, {setSubmitting, resetForm}) => {
          onAdd({
            name: values.productName.trim(),
            banner: values.bannerUrl.trim(),
            description: values.description.trim(),
            price: parseFloat(values.price),
          });
          resetForm();
          setSubmitting(false);
          setShowModal(false);
        }}
      >
        {({handleSubmit, isSubmitting}) => (
          <ProductModal
            show={showModal}
            onClose={() => setShowModal(false)}
            onSubmit={() => handleSubmit()}
            title="Add New Product"
            submitLabel="Add Product"
            isSubmitting = {isSubmitting}
          >
            <FormikForm noValidate>
              {/* simple text inputs */}
              <MyTextInput
                label="Product Name"
                name="productName"
                placeholder="Enter product name"
              />

              <MyTextInput
                label="Banner URL"
                name="bannerURL"
                placeholder="Enter image URL (banner)"
              />

              {/* a textarea for description */}
              <MyTextInput
                label="Description"
                name="description"
                as="textarea"
                rows={3}
                placeholder="Enter description"
              />

              {/* treated as a string here; Yup will catch non-numeric */}
              <MyTextInput
                label="Price"
                name="price"
                type="number"
                placeholder="Enter price"
              />
            </FormikForm>
          </ProductModal>
        )}
      </Formik>
    </>
  );
};