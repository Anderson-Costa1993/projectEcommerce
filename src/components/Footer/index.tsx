import style from "./footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className={style.footer}>
      <div className={style["contain-info"]}>
        <div>
        <i className="bi bi-lightning-charge-fill" onClick={() => navigate("/")}></i>
        </div>
        <ul className={style.Ulist}>
          <li className={style.list}>Privacy Policy</li>
          <li className={style.list}>Contact</li>
        </ul>
      </div>

      <div className={style["contain-rights"]}>
        <span className={style.rights}>
          © 2023 Store™. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
