import React, { useState } from "react";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { Main } from "./components/Main";
import data from "./data";

function App() {
  const { products } = data;
  const [cartItems, setcartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setcartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setcartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setcartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setcartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const [counter, setcounter] = useState(5);
  const incrementer = () => {
    setcounter(counter + 5);
  };

  return (
    <div className='App'>
      <Header></Header>
      <div className='row'>
        <Main products={products} onAdd={onAdd}></Main>
        <Cart onAdd={onAdd} cartItems={cartItems} onRemove={onRemove}></Cart>
        <h3>{counter}</h3>
        <button onClick={incrementer}>counter</button>
      </div>
    </div>
  );
}

export default App;
