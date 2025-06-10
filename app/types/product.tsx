import { boolean } from "yup";

//Properties of the product
export interface ProductProperties {
    id: number
    name: string;
    description: string;
    banner: string,
    price: number
}

//Product list
export interface ProductListProps {
    products: ProductProperties[]
}

//Product card
export interface ProductCardProps {
  product: ProductProperties;
}

//Product modal
export interface ProductModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  children: React.ReactNode;
  submitLabel?: string;
  isSubmitting?: boolean
}

//Add Product
export type NewProduct = Omit<ProductProperties, "id">;

export interface AddProductProps {
  onAdd: (newProduct: NewProduct) => void;
}
