import style from "./detailsProduct.module.css";
import { ProductsType } from "../../../types";
import { useNavigate } from "react-router-dom";

type Props = {
  product: ProductsType;
};

export function DetailPage({ product }: Props) {
  const navigate = useNavigate();

  return (
    <div className={style["contain-details"]}>
      <div className={style.link}>
        <i
          className="bi bi-caret-left"
          style={{ fontSize: "25px", color: "#fff" }}
          onClick={() => navigate(-1)}
        ></i>
      </div>
      <section className={style["section-detaiils"]}>
        <div className={style.img}>
          <img src={product?.image} alt="" />
        </div>
        <h1 className={style.title}>{product?.title}</h1>
        <h4 className={style.description}>{product?.description}</h4>
        <span style={{ color: "#ccc" }}>R$ {product?.price.toFixed(2)}</span>
        <div className={style["contain-btn"]}>
          <button className={style.btn} onClick={() => navigate("/cart")}>
            Add to cart{" "}
            <i className="bi bi-cart-plus" style={{ fontSize: "18px" }}></i>
          </button>
        </div>
      </section>
    </div>
  );
}
