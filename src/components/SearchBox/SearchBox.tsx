import { FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import isotipo from "../../assets/logos/isotipo.png";
import "./SearchBox.scss";

const SearchBox = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [query, setQuery] = useState<string>(queryParams.get("search") || "");

  useEffect(() => {
    const searchParam = queryParams.get("search");
    if (searchParam) {
      setQuery(searchParam);
    }
  }, [location]);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/items?search=${query}`);
  };

  return (
    <div className="search-box">
      <img src={isotipo} alt="logo" className="logo" />
      <form onSubmit={handleSearch} className="search-container">
        <input
          type="text"
          value={query}
          className="search-input"
          placeholder="Buscar productos, marcas y más..."
          onChange={(e) => setQuery(e.target.value)}
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
      </form>
    </div>
  );
};

export default SearchBox;
