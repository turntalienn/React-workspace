import React from "react";
import "./Header.css";

export const Header = (props) => {
  const { countCartItems } = props;
  return (
    <header className='row block center'>
      <div>
        <a href='#'>
          <h1>Shopping Cart Model</h1>
        </a>
      </div>
      <div>
        <a href='#/cart'>
          Cart{" "}
          {countCartItems ? (
            <button className='badge'>{countCartItems}</button>
          ) : (
            ""
          )}
        </a>
        <a href='#/Signin'>Signin</a>
      </div>
    </header>
  );
};
