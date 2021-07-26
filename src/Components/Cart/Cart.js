import Card from "../UI/Card";
import CartItems from "./CartItems";

const Cart = (props) => {
  console.log("My Cart");
  return (
    <Card>
      <div>
        {props.cart.map((i) => {
          return (
            <CartItems
              title={i.title}
              price={i.price}
              quantity={1}
              totalPrice={i.price * 1}
            />
          );
        })}
      </div>
    </Card>
  );
};

export default Cart;
