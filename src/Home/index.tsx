import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import { ProductsType } from "../types";
import { LoadingPage } from "../components/Loading/LoadingPage";
import { HomePage } from "./HomePage";

type ProductDataLoader = {
  product: Promise<ProductsType[]>;
};

export function Home() {
  const { product } = useLoaderData() as ProductDataLoader;

  return (
    <div>
      <Suspense fallback={<LoadingPage />}>
        <Await resolve={product}>
          {(resolveProduct: ProductsType []) => <HomePage product={resolveProduct} />}
        </Await>
      </Suspense>
    </div>
  );
}
