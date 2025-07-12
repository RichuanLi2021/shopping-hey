import type { Route } from "./+types/product";
import ProductContainer from "~/features/products/components/ProductContainer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Product" },
    { name: "description", content: "Product" },
  ];
}

export default function ProductPage() {
  return (
    <ProductContainer />
  )
}