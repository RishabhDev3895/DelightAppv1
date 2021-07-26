import { Fragment } from "react";
import HeaderElement from "./HeaderElement";

function Layout(props) {
  return (
    <Fragment>
      <HeaderElement
        toggleHandler={props.toggleHandler}
        count={props.cartCount}
      />
      {props.children}
      <footer />
    </Fragment>
  );
}

export default Layout;
