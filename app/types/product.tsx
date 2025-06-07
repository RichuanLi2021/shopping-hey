export interface ProductItems {
    id: number
    name: string;
    description: string;
    banner: string,
    price: number
}

//Product list
export interface ProductListProps {
    products: ProductItems[]
}

//Product card
export interface ProductCardProps {
  product: ProductItems;
}

//Product modal
export interface ProductModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  children: React.ReactNode;
  submitLabel?: string;
}

//Add Product
export type NewProduct = Omit<ProductItems, "id">;

export interface AddProductProps {
  onAdd: (newProduct: NewProduct) => void;
}
