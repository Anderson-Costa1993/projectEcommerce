import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import { ProductsType } from "../../types";
import { CartPage } from "./CartPage";
import { LoadingPage } from "../../components/Loading/LoadingPage";

type ProductDataLoader = {
  product: Promise<ProductsType[]>;
};

export function Cart() {
  const { product } = useLoaderData() as ProductDataLoader;

  return (
    <Suspense fallback={<LoadingPage />}>
      <Await resolve={product}>
        {(resolveProduct: ProductsType []) => <CartPage product={resolveProduct} />}
      </Await>
    </Suspense>
  );
}
