// src/SignupForm.js
import React from 'react';
import './SignupForm.css';

const SignupForm = () => {
  return (
    <div className='container'>
    <h2 className='heading-text'>Ready to make a change? Fill out the form below and be a part of something great!</h2>
    <form className='form'>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="phone">Phone number:</label>
      <input type="number" id="phone" name="phone" />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

         <button className='button'type="submit">Plant a Tree, Secure Your Spot!</button>
    </form>
  </div>
  );
};

export default SignupForm;
