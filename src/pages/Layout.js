import React from "react";
import ResponsiveAppBar from "../components/AppBar";
import ContentWrapper from "../components/ContentWrapper";

const Layout = () => {
  return (
    <div className="layout">
      <ResponsiveAppBar />
      <ContentWrapper />
    </div>
  );
};

export default Layout;
