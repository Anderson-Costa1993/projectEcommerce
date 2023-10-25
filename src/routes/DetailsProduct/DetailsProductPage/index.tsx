import style from "./detailsProduct.module.css";
import { ProductsType } from "../../../types";
import { useNavigate, Link } from "react-router-dom";
import { ContextCart } from "../../../contextCart/ContextCart";
import { useContext } from "react";

type Props = {
  product: ProductsType;
};

export function DetailPage({ product }: Props) {
  const context = useContext(ContextCart);

  if (!context) {
    throw new Error("O contexto não foi fornecido corretamente.");
  }

  const { cart, setCart } = context;

  function addProduct() {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantityCart += product.quantity || 1;
    } else {
      updatedCart.push({ ...product, quantityCart: product.quantity || 1 });
    }
    setCart(updatedCart);
  }

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
        <Link to={`/cart`} onClick={() => addProduct()}>
          <button className={style.btn}>
            Add to cart{" "}
            <i className="bi bi-cart-plus" style={{ fontSize: "18px" }}></i>
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
