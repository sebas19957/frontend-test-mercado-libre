import "./SearchSkeletonLoader.scss";

const SearchSkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-image"></div>
      <div className="skeleton-info">
        <div className="skeleton-price"></div>
        <div className="skeleton-title"></div>
      </div>
    </div>
  );
};

export default SearchSkeletonLoader;
