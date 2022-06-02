import React from "react";

const Layout = (props) => {
  const { children } = props;

  console.log("Children...", children);
  return (
    <div>
      <header style={{}}></header>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
