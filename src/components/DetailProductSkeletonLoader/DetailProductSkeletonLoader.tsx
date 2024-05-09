import "./DetailProductSkeletonLoader.scss";

const DetailProductSkeletonLoader = () => {
  return (
    <div className="product-skeleton">
      <div className="skeleton-image-container">
        <div className="skeleton-product-image"></div>
      </div>
      <div className="skeleton-product-info">
        <div className="skeleton-product-title"></div>
        <div className="skeleton-product-price"></div>
        <div className="skeleton-compare-button"></div>
      </div>
      <div className="skeleton-product-description">
        <div className="skeleton-description-title"></div>
        <div className="skeleton-description-text"></div>
      </div>
    </div>
  );
};

export default DetailProductSkeletonLoader;
