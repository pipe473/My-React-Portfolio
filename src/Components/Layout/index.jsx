import React from "react";
import Menu from "../Menu";

function Layout(props) {
  return (
    <div className="Menu">
      <Menu />
      {props.children}
    </div>
  );
}

export default Layout;
