import style from "./uniqueCategory.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiEcommerceService } from "../../service/apiEcommerce";
import { CategoryType } from "../../types";

export function UniqueCategory() {
  const [category, setCategory] = useState<CategoryType>([]);

  const categoryList = category.map((categoryName) => ({
    name: categoryName,
  }));

  useEffect(() => {
    apiEcommerceService
      .getAllCategory()
      .then((response) => {
        setCategory(response);
      })
      .catch((error: Error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, [setCategory]);

  const navigate = useNavigate();

  return (
    <div className={style["contain-category"]}>
      <span className={style.allCategory} onClick={() => navigate("/")}>
        All
      </span>

      {categoryList.map((item, index) => (
        <span
          key={index}
          onClick={() => navigate(`/products/category/${item.name}`)}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}
