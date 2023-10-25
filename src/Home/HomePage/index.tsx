import style from "./home.module.css";
import { Link } from "react-router-dom";
import { ProductsType } from "../../types";


type Props = {
  product: ProductsType[];
};
export function HomePage({ product }: Props) {
  console.log(product)
  return (
    <>
      <div className={style["contain-vitrine"]}>
        <div className={style["container-app"]}>
          {product.map((produto: ProductsType) => (
            <div key={produto.id} className={style.card}>
              <Link to={`/product/${produto.id}`}>
                <img src={produto.image} alt="imagem do produto" />
                <div className={style.description}>
                  <span className={style["title-product"]}>
                    {produto.title}
                  </span>
                  <div>
                    <span className={style["vitrine-price"]}>
                      R$ {produto.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
