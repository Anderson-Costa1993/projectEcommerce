import { useContext } from "react";
import { CartItemType, ProductsType } from "../../../types";
import { ContextCart } from "../../../contextCart/ContextCart";
import style from "./cart.module.css";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  product: ProductsType[];
};

export function CartPage({product}: Props) {
  console.log(product)

  const context = useContext(ContextCart);

  if (!context) {
    throw new Error("O contexto não foi fornecido corretamente.");
  }
  const { cart, setCart } = context;
  console.log("cart", cart)

  function removeItemFromCart(index: number) {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  }

  function handleQuantityChange(index: number, change: number) {
    const updatedCart = [...cart];
    updatedCart[index].quantityCart += change;
    setCart(updatedCart);
    if (updatedCart[index].quantityCart < 1) {
      removeItemFromCart(index);
    }
  }

  function sumUnity(quantity: number, price: number) {
    const total = quantity * price;
    return total;
  }

  function sumCart() {
    const total = cart.reduce((accumulator: number, produto: CartItemType) => {
      return accumulator + produto.price * produto.quantityCart;
    }, 0);
    return total;
  }

  const navigate = useNavigate();


  return (
    <div>
      <div className={style["container-cart"]}>
        {cart.length === 0 ? (
          <div className={style.EmptyCart}>
            <div>
              <h1>Empty cart</h1>
            </div>
            <Link to="/">
              <span className={style["start-shopping"]}>Start shopping</span>
            </Link>
          </div>
        ) : (
          <div className={style["contain-card"]}>
            <div className={style.link}>
              <i
                className="bi bi-caret-left"
                style={{ fontSize: "25px", color: "#000000" }}
                onClick={() => navigate(-1)}
              ></i>
            </div>
            <h1 className={style["title-meuCarrinho"]}>My cart</h1>
            {cart.map((product: CartItemType, index: number) => (
              <div key={product.id} className={style["contain-info"]}>
                <div className={style["contain-ul"]}>
                  <ul className={style.ul}>
                    <li className={style.li}>
                      <span>Product</span>
                      <img className={style.img} src={product.image} alt="" />
                    </li>
                    <li className={style.li}>
                      <span>Description </span>
                      <span className={style.description}>
                        {product.description}
                      </span>
                    </li>

                    <div className={style["mobile-quantity"]}>
                      <li className={style.li}>
                        <span>Quantity</span>
                        <div className={style.quantity}>
                          <span>{product.quantityCart}</span>

                          <div className={style["contain-button"]}>
                            <button
                              className={style.button}
                              onClick={() => handleQuantityChange(index, 1)}
                            >
                              <i className="bi bi-chevron-compact-up"></i>
                            </button>
                            <button
                              className={style.button}
                              onClick={() => handleQuantityChange(index, -1)}
                            >
                              <i className="bi bi-chevron-compact-down"></i>
                            </button>
                          </div>
                          <button
                            className={style.button}
                            onClick={() => removeItemFromCart(index)}
                          >
                            <span>
                              <i
                                className="bi bi-x"
                                style={{ fontSize: "24px", fontWeight: "bold" }}
                              ></i>
                            </span>
                          </button>
                        </div>
                      </li>
                      <li className={style.li}>
                        <span>Unitary value</span>
                        <div className={style["span-valores"]}>
                          <span>R$ {product.price}</span>
                        </div>
                      </li>
                      <li className={style.li}>
                        <span>Subtotal</span>
                        <div className={style["span-valores"]}>
                          <span>
                            R${" "}
                            {sumUnity(
                              product.quantityCart,
                              product.price
                            ).toFixed(2)}
                          </span>
                        </div>
                      </li>
                    </div>
                  </ul>
                </div>
                <section className={style.section}></section>
              </div>
            ))}
            <Link to="/">
              <span className={style["continue-comprando"]}>Keep buying</span>
            </Link>
          </div>
        )}
        {cart.length ? (
          <div style={{ margin: "0 auto" }}>
            <div className={style.total}>
              <h1 style={{ margin: "10px", fontSize: "26px" }}>Resume</h1>
              <div style={{ margin: "10px" }}>
                <span>Total: R$ {sumCart().toFixed(2)}</span>
              </div>
            </div>
            <button className={style["btn-compra"]}>go to payment</button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

