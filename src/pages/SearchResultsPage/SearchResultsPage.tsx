import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import { SearchResult } from "../../interfaces/search";
import { searchItems } from "../../api/search";

import Container from "../../components/Container/Container";
import SearchSkeletonLoader from "../../components/SearchSkeletonLoader/SearchSkeletonLoader";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import NoResultSearch from "../../components/NoResultSearch/NoResultSearch";
import NoSearchResponse from "../../components/NoSearchResponse/NoSearchResponse";
import ResultItem from "../../components/ResultItem/ResultItem";

import capitalizeText from "../../utils/helpers/capitalizeText";

import "./SearchResultsPage.scss";

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
            : data?.items.map((item) => (
                <ResultItem
                  key={item.id}
                  item={item}
                  onRedirectProduct={onRedirectProduct}
                />
              ))}
        </div>
      </div>
    </Container>
  );
};

export default SearchResultsPage;
