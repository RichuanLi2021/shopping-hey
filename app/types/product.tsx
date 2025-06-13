//Properties of the product
export interface ProductProperties {
    id: number
    name: string;
    description: string;
    banner: string,
    price: number
}

//Add Product Payload
export type NewProduct = Omit<ProductProperties, "id">;

//Update Product Payload
export type UpdateProduct = {
  id: number;
} & Partial<Omit<ProductProperties, 'id'>>;

export interface AddProductProps {
  onAdd: (newProduct: NewProduct) => void;
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