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


  try {
    if (!product) {
      return <p>Carregando...</p>; // Mostrar uma mensagem de carregamento enquanto os dados estão sendo buscados.
    }

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
} catch (error) {
  console.error("Erro na chamada à API:", error);
  return <p>Ocorreu um erro ao carregar os dados do produto.</p>;
}
}
