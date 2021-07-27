import { Fragment } from "react";
import HeaderElement from "./HeaderElement";

function Layout(props) {
  return (
    <Fragment>
      <HeaderElement toggleHandler={props.onToggle} count={props.cartCount} />
      {props.children}
      <footer />
    </Fragment>
  );
}

export default Layout;
