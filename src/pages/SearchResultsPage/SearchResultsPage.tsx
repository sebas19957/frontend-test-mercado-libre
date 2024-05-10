import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import Container from "../../components/Container/Container";
import SearchSkeletonLoader from "../../components/SearchSkeletonLoader/SearchSkeletonLoader";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

import { SearchResult } from "../../interfaces/search";
import { searchItems } from "../../api/search";

import "./SearchResultsPage.scss";
import NoResultSearch from "../../components/NoResultSearch/NoResultSearch";
import formatNumberLocale from "../../utils/helpers/formatNumberLocale";
import NoSearchResponse from "../../components/NoSearchResponse/NoSearchResponse";
import capitalizeText from "../../utils/helpers/capitalizeText";

const SearchResultsPage = () => {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState<SearchResult>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("search");

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        setloading(true);
        try {
          const response = await searchItems(query);
          console.log(response);

          setData(response);
        } catch (error: any) {
          console.log(error);
        } finally {
          setloading(false);
        }
      };
      fetchData();
    }
  }, [query]);

  const onRedirectProduct = (id: string) => {
    navigate(`/items/${id}`);
  };

  return (
    <Container>
      <Helmet>
        <title>
          {query
            ? `${capitalizeText(query)} | MercadoLibre 📦`
            : "MercadoLibre 📦"}
        </title>
        <meta
          name="description"
          content={`Encuentra los mejores productos para ${query}`}
        />
        <meta
          name="keywords"
          content={`${query}, comprar, tienda online, ${data?.categories.join(
            ", "
          )}`}
        />
      </Helmet>

      {data?.items.length === 0 && !loading && <NoResultSearch />}

      {query === "" && !loading && <NoSearchResponse />}

      <div className="search-results">
        {data?.items.length !== 0 && query !== "" && (
          <div className="related-searches">
            <span className="related-title">Búsquedas relacionadas:</span>
            <Breadcrumbs categories={data?.categories!} />
          </div>
        )}
        <div className="results-container">
          {loading
            ? [...new Array(4)].map((_, index) => (
                <SearchSkeletonLoader key={index} />
              ))
            : query !== "" &&
              data?.items.map((item) => (
                <div key={item.id} className="result-item">
                  <div className="imagen-container">
                    <img
                      src={item.picture}
                      alt={item.title}
                      className="result-image"
                      onClick={() => onRedirectProduct(item.id)}
                    />
                  </div>
                  <div className="result-info">
                    <h2
                      className="result-price"
                      onClick={() => onRedirectProduct(item.id)}
                    >
                      ${formatNumberLocale(item.price.amount)}
                    </h2>
                    <h3 className="result-title">{item.title}</h3>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </Container>
  );
};

export default SearchResultsPage;
