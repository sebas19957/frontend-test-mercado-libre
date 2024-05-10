import SearchBox from "../../components/SearchBox/SearchBox";
import { Outlet } from "react-router-dom";

import "./GeneralLayout.scss";

const GeneralLayout = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#EDEDED" }}>
      <SearchBox />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default GeneralLayout;
