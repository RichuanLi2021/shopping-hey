import { api } from "~/api/central-axios";
import type { ProductProperties, NewProduct, UpdateProduct } from "~/types/product";

export async function getProducts(): Promise<ProductProperties[]> {
  const { data } = await api.get("/products");
  // Map _id to id for each product
  return data.map((p: any) => ({
    ...p,
    id: p.id || p._id,
  }));
}

export async function createProduct(newProduct: NewProduct): Promise<ProductProperties> {
  const { data } = await api.post("/products", newProduct);
  return data;
}

export async function updateProduct(update: UpdateProduct): Promise<ProductProperties> {
  const { data } = await api.put(`/products/${update.id}`, update);
  return data;
}

export async function deleteProduct(id: string): Promise<void> {
  await api.delete(`/products/${id}`);
}
