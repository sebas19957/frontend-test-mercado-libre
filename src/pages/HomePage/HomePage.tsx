import SearchBox from "../../components/SearchBox/SearchBox";
import SearchResult from "../../components/SearchResult/SearchResult";

const HomePage = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#EDEDED" }}>
      <SearchBox />
      <SearchResult />
    </div>
  );
};

export default HomePage;
