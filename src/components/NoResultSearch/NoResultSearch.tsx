import "./NoResultSearch.scss";

const NoResultSearch = () => {
  return (
    <div className="no-results">
      <div className="text-content">
        <h2>No hay publicaciones que coincidan con tu búsqueda.</h2>
        <ul>
          <li>Revisa la ortografía de la palabra.</li>
          <li>Utiliza palabras más genéricas o menos palabras.</li>
        </ul>
      </div>
    </div>
  );
};

export default NoResultSearch;
