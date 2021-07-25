import { Fragment } from "react";
import HeaderElement from "./HeaderElement";

function Layout(props) {
  return (
    <Fragment>
      <HeaderElement />
      {props.children}
      <footer />
    </Fragment>
  );
}

export default Layout;
