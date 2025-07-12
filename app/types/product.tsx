import type { S } from "node_modules/react-router/dist/development/route-data-ByAYLHuM.mjs";

//Properties of the product
export interface ProductProperties {
    id: string
    name: string;
    description: string;
    banner: string,
    price: number
}

//Add Product Payload
export type NewProduct = Omit<ProductProperties, "id">;

//Update Product Payload
export type UpdateProduct = {
  id: string;
} & Partial<Omit<ProductProperties, 'id'>>;

export type UpdatedValues = Partial<Omit<ProductProperties, 'id'>>;
export interface AddProductProps {
  onAdd: (newProduct: NewProduct) => void;
}

//Product list
export interface ProductListProps {
    products: ProductProperties[]
}

//Product card
export interface ProductCardProps {
  product: ProductProperties,
  onAddToCart?: (id: string) => void
}

//Product modal
export interface ProductModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (values: UpdatedValues) => void;
  title?: string;
  children: React.ReactNode;
  submitLabel: string;
  isSubmitting?: boolean;
  initialValues: UpdatedValues;
}