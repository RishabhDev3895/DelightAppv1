import Card from "../UI/Card";
import CartItems from "./CartItems";
import Modal from "../UI/Modal";

const Cart = (props) => {
  console.log("My Cart");
  return (
    <Modal onClose={props.onClose}>
      <Card>
        {props.cart.map((i) => {
          return (
            <CartItems
              key={i.id}
              title={i.title}
              price={i.price}
              quantity={1}
              totalPrice={i.price * 1}
            />
          );
        })}
      </Card>
    </Modal>
  );
};

export default Cart;
