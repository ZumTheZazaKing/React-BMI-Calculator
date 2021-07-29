import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';



function Input(){

  return <div className="inputContainer">

    <h2>BMI Calculator</h2>

    <form>

      <label>Weight(kg): </label>
      <input type="number" value="" />

      <br/><br/>

      <label>Height(m): </label>
      <input type="number" value="" />

      <br/><br/>

      <input type="submit" value="Calculate" />
    </form>

  </div>

}

function Output(){

  return <div>

    <h3>Your BMI is:</h3>
    <h2>Sample Text</h2>
    <p>Sample Text</p>

  </div>

}



function App(){

  return <div>

    <Input />
    <Output />


  </div>

}



const el = <App/>

ReactDOM.render(el, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
