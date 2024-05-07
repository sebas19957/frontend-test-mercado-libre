import React from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import { Outlet } from "react-router-dom";

const GeneralLayout = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#EDEDED" }}>
      <SearchBox />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default GeneralLayout;
