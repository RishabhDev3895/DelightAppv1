import React, { Fragment } from "react";

const CartItems = (props) => {
  const { title, price, quantity, totalPrice } = props;
  return (
    <Fragment>
      <div className="">
        <h3>{title}</h3>
        <span className="">x {quantity}</span>
      </div>
      <div className="">
        <span>$ {price}</span>
        <br />
        <label>Total:</label>&nbsp;<span>$ {totalPrice}</span>
      </div>
    </Fragment>
  );
};

export default CartItems;
