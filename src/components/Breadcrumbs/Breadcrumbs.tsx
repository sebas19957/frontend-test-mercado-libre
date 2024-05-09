import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumbs.scss";

interface Props {
  categories: string[] | string;
}

const Breadcrumbs: React.FC<Props> = ({ categories }) => {
  const formatCategoryToUrl = (category: string) => {
    return `/items?search=${category?.toLowerCase()}`;
  };

  // Verificar si categories es un array o una cadena
  const categoryArray = Array.isArray(categories) ? categories : [categories];

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumbs">
        {categoryArray.map((category, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${
              index === categoryArray.length - 1 ? "active" : ""
            }`}
          >
            <Link to={formatCategoryToUrl(category)}>{category}</Link>
            {index < categoryArray.length - 1 && (
              <span className="breadcrumb-separator">›</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
