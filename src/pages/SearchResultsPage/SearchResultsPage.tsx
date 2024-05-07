const SearchResultsPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "0.7rem",
        }}
      >
        <span
          style={{
            fontSize: "0.875rem",
            color: "#6b7280",
            marginBottom: "0.5rem",
          }}
        >
          Búsquedas relacionadas:
        </span>
        <a
          href="#"
          style={{
            color: "#2563eb",
            fontSize: "0.875rem",
            textDecoration: "none",
          }}
        >
          ipad
        </a>
        <a
          href="#"
          style={{
            color: "#2563eb",
            fontSize: "0.875rem",
            textDecoration: "none",
          }}
        >
          apple
        </a>
        <a
          href="#"
          style={{
            color: "#2563eb",
            fontSize: "0.875rem",
            textDecoration: "none",
          }}
        >
          iphone
        </a>
        <a
          href="#"
          style={{
            color: "#2563eb",
            fontSize: "0.875rem",
            textDecoration: "none",
          }}
        >
          apple watch
        </a>
        <a
          href="#"
          style={{
            color: "#2563eb",
            fontSize: "0.875rem",
            textDecoration: "none",
          }}
        >
          apple pencil
        </a>
        <a
          href="#"
          style={{
            color: "#2563eb",
            fontSize: "0.875rem",
            textDecoration: "none",
          }}
        >
          airtags apple
        </a>
        <a
          href="#"
          style={{
            color: "#2563eb",
            fontSize: "0.875rem",
            textDecoration: "none",
          }}
        >
          apple headphones
        </a>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          gap: "1px",
        }}
      >
        {[...new Array(100)].map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              width: "100%",
              backgroundColor: "white",
              padding: "5px",
              gap: "15px",
            }}
          >
            <div>
              <img
                src="https://http2.mlstatic.com/D_620616-MLA49003338062_022022-I.jpg"
                alt="apple"
                style={{
                  width: "190px",
                  height: "190px",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "60%",
              }}
            >
              <h2>$ 64.999</h2>
              <h3 style={{ fontWeight: "normal" }}>
                Cargador Fast Apple Original iPhone 13 13 Pro Max Usb-c 20w
                Color Blanco - Distribuidor Autorizado
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
