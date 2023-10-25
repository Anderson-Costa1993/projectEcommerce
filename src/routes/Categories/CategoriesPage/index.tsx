import { ProductsType } from "../../../types";

type Props = {
  product: ProductsType[];
};

export function CategoryPage({ product }: Props) {
  console.log(product);
  return <></>;
}
