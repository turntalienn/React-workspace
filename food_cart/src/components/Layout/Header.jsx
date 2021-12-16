import React from "react";
import mealsImage from "../../Assets/meals.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <button>Cart</button>
        <button></button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table of food" />
      </div>
    </>
  );
};

export default Header;
