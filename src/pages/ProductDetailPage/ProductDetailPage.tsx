import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/product";

import { ProductResult } from "../../interfaces/detail-product";
import DetailProductSkeletonLoader from "../../components/DetailProductSkeletonLoader/DetailProductSkeletonLoader";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";

import "./ProductDetailPage.scss";
import formatNumberLocale from "../../utils/helpers/formatNumberLocale";

const ProductDetailPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ProductResult>();
  const params = useParams();
  const itemId = params.id;

  useEffect(() => {
    if (itemId) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await getProduct(itemId);
          setData(response);
        } catch (error: any) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [itemId]);

  return (
    <Container>
      <div className="product-detail">
        <div className="related-searches">
          <span className="related-title">Búsquedas relacionadas:</span>
          <Breadcrumbs categories={data?.item.category!} />
        </div>

        <div className="product-container">
          {loading ? (
            <DetailProductSkeletonLoader />
          ) : (
            data && (
              <>
                <div className="product-display">
                  <div className="image-container">
                    <img
                      src={data.item.picture}
                      alt={data.item.title}
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h2 className="product-title">{data.item.title}</h2>
                    <span className="product-price">
                      ${formatNumberLocale(data.item.price.amount)}
                    </span>
                    <button className="compare-button">Comparar Ahora</button>
                  </div>
                </div>
                <div className="product-description">
                  <span className="description-title">
                    Descripción del producto
                  </span>
                  <span className="description-text">
                    {data.item.description}
                  </span>
                </div>
              </>
            )
          )}
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailPage;
