import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";
import { ProductsType } from "../../types";
import { LoadingPage } from "../../components/Loading/LoadingPage";
import { DetailPage } from "./DetailsProductPage";

type ProductDataLoader = {
  product: Promise<ProductsType>;
};

export function Details() {
  const { product } = useLoaderData() as ProductDataLoader;
  

  return (
    <div>
      <Suspense fallback={<LoadingPage />}>
        <Await resolve={product}>
          {(resolveProduct: ProductsType) => (
            <DetailPage product={resolveProduct} />
          )}
        </Await>
      </Suspense>
    </div>
  );
}
