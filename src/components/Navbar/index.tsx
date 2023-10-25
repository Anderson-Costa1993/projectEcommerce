import style from "./navbar.module.css";
import { useNavigate } from "react-router-dom";
import {useState} from "react"
import { UniqueCategory } from "../../routes/UniqueCategory";

export function Navbar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleComponent = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={style["caontainer-navBar"]}>
      <i className="bi bi-list" onClick={() => toggleComponent()}></i>
      <i className="bi bi-lightning-charge-fill" onClick={() => navigate("/")}></i>
      <i className="bi bi-handbag-fill" onClick={() => navigate("/cart")}></i>
    </div>
  );
}
