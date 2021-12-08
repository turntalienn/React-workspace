import React from "react";
import "./Form.css";

const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className='form'>
      <div className='formName'>
        <label htmlFor='name'>Name</label>
        <input type='text' name='nameInput' id='nameInput' />
      </div>

      <div className='formEmail'>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
      </div>
      <button onClick={submitHandler} className='btnSubmit' type='submit'>
        submit
      </button>
    </form>
  );
};

export default Form;
