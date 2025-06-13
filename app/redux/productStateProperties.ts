import type { ProductProperties} from "~/types/product";

export default interface ProductState {
    items: ProductProperties[];
    loading: boolean;
    error: string | null;
}