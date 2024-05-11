import SearchBox from "../../components/SearchBox/SearchBox";
import { Outlet } from "react-router-dom";

import "./GeneralLayout.scss";

const GeneralLayout = () => {
  return (
    <div className="root">
      <SearchBox />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default GeneralLayout;
