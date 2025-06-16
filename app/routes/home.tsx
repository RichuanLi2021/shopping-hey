import type { Route } from "./+types/home";
import Hero from "~/components/home/hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ProdManager" },
    { name: "description", content: "Welcome to ProdManager!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero/>
    </>
  )
}



