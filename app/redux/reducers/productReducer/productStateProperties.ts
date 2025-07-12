import type { ProductProperties } from "~/types/product";

export interface ProductState {
  items: ProductProperties[];
  loading: boolean;
  error: string | null;
  selectedProductId?: string | null; 
}