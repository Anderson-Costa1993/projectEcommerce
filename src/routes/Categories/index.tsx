import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import { ProductsType } from "../../types";
import { HomePage } from "../Home/HomePage";
import { LoadingPage } from "../../components/Loading/LoadingPage";

type ProductDataLoader = {
  product: Promise<ProductsType[]>;
};

export function Category() {
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
