import "./App.css";
import Layout from "./Layout/Layout";
import Dishes from "./Components/Meals/Dishes";
import WelcomeNote from "./Components/Welcome/WelcomeNote";
import Cart from "./Components/Cart/Cart";
import React, { useState } from "react";

function App() {
  const [shoppingCart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const AddCartHandler = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const toggleCartHandler = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  const closeHandler = () => {
    setShowCart(false);
  };
  const renderCart = showCart ? (
    shoppingCart.length > 0 ? (
      <Cart cart={shoppingCart} onClose={closeHandler} />
    ) : (
      <p>Cart is Empty</p>
    )
  ) : (
    <br />
  );

  return (
    <div className="App">
      <Layout onToggle={toggleCartHandler} cartCount={shoppingCart.length}>
        <WelcomeNote />
        {renderCart}
        <Dishes onAddCart={AddCartHandler} />
      </Layout>
    </div>
  );
}

export default App;
