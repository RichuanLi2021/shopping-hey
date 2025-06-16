import React from "react";
import { MyTextInput } from "~/utils/fieldsType";

export const ProductFormFields = () => (
  <>
    <MyTextInput
      label="Product Name"
      name="productName"
      placeholder="Enter product name"
    />
    <MyTextInput
      label="Banner URL"
      name="bannerUrl"
      placeholder="Enter image URL (banner)"
    />
    <MyTextInput
      label="Description"
      name="description"
      as="textarea"
      rows={3}
      placeholder="Enter description"
    />
    <MyTextInput
      label="Price"
      name="price"
      type="number"
      placeholder="Enter price"
    />
  </>
);
