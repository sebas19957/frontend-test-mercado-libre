import React from "react";
import { Item } from "../../interfaces/search";
import formatNumberLocale from "../../utils/helpers/formatNumberLocale";

interface ResultItemProps {
  item: Item;
  onRedirectProduct: (id: string) => void;
}

const ResultItem: React.FC<ResultItemProps> = ({ item, onRedirectProduct }) => {
  return (
    <div className="result-item" onClick={() => onRedirectProduct(item.id)}>
      <div className="imagen-container">
        <img src={item.picture} alt={item.title} className="result-image" />
      </div>
      <div className="result-info">
        <h2 className="result-price">
          ${formatNumberLocale(item.price.amount)}
        </h2>
        <h3 className="result-title">{item.title}</h3>
      </div>
    </div>
  );
};

export default ResultItem;
