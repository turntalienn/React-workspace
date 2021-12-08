import React from "react";
import "./Form.css";

export const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='username'>Username</label>
      <input type='text' name='username' id='username' />
      <label htmlFor='age'>Age(years)</label>
      <input type='number' name='age' id='age' />
      <button>Submit</button>
    </form>
  );
};
