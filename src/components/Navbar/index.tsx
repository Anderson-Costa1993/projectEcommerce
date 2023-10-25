import style from "./navbar.module.css";
import { useNavigate } from "react-router-dom";


export function Navbar() {
  const navigate = useNavigate();

  return (
    <div className={style["caontainer-navBar"]}>
      <i className="bi bi-list"></i>
      <i className="bi bi-lightning-charge-fill" onClick={() => navigate("/")}></i>
      <i className="bi bi-handbag-fill" onClick={() => navigate("/cart")}></i>
    </div>
  );
}
