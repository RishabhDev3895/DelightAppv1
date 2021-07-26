import "./App.css";
import Layout from "./Layout/Layout";
import Dishes from "./Components/Meals/Dishes";
import WelcomeNote from "./Components/Welcome/WelcomeNote";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";

function App() {
  const [shoppingCart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const AddCartHandler = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const toggleCartHandler = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };
  return (
    <div className="App">
      <Layout toggleHandler={toggleCartHandler} cartCount={shoppingCart.length}>
        <WelcomeNote />
        {showCart ? (
          shoppingCart.length > 0 ? (
            <Cart cart={shoppingCart} />
          ) : (
            <p>Cart is Empty</p>
          )
        ) : (
          <br />
        )}
        <Dishes onAddCart={AddCartHandler} />
      </Layout>
    </div>
  );
}

export default App;
