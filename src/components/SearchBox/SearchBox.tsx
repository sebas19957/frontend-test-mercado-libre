import isotipo from "../../assets/logos/isotipo.png";
import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width: "100vw",
        backgroundColor: "#FFE600",
        padding: "8px 0",
      }}
    >
      <img src={isotipo} alt="logo" style={{ width: "40px", height: "30px" }} />
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar productos, marcas y más..."
        />
        <button className="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#737373"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
