import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';

function Input(props){

  return <div id="inputContainer" ref={props.inputContainerClass}>

    <h2>BMI Calculator</h2>

    <form onSubmit={props.handleSubmit}>

      <label>Weight(kg): </label>
      <input type="number" onChange={props.handleChangeWeight} value={props.dataWeight} />

      <br/><br/>

      <label>Height(m): </label>
      <input type="number" onChange={props.handleChangeHeight} value={props.dataHeight} />

      <br/><br/>

      <input type="submit" value="Calculate" />
    </form>

  </div>

}

function Output(props){

  useEffect(() => {
    props.changeResponse(props.dataBmi);
  })

  return <div id="outputContainer" ref={props.outputContainerClass} className="hide">

    <h3>Your BMI is:</h3>
    <h2>{props.dataBmi}</h2>
    <p id="response" ref={props.responseClass}>{props.dataResponse}</p>
    <button onClick={() => {props.calculateAgain()}}>Calculate Again</button>

  </div>

}



function App(){

  let [weightValue, setWeightValue] = useState("");
  let [heightValue, setHeightValue] = useState("");
  let [bmiValue, setBmiValue] = useState("");
  let [response, setResponse] = useState("");

  const responseClass = useRef();
  const inputContainerClass = useRef();
  const outputContainerClass = useRef();


  function handleChangeWeight(e){
    setWeightValue(e.target.value)
  }

  function handleChangeHeight(e){
    setHeightValue(e.target.value)
  }

  function handleSubmit(e){
    let calculatedResult = (parseFloat(weightValue)/parseFloat(heightValue)**2).toFixed(2);
    setBmiValue(calculatedResult);

    inputContainerClass.current.className = "hide";
    outputContainerClass.current.className = "";


    e.preventDefault();
  }


  function changeResponse(value){
    if(value < 18.5){
      setResponse("You're Underweight!");
      responseClass.current.className = "underweight";

    } else if(value > 18.5 && value < 24.9){
      setResponse("You're Normal!");
      responseClass.current.className = "normal";

    } else if(value > 24.9 && value < 29.9){
      setResponse("You're Overweight!");
      responseClass.current.className = "overweight";

    } else {
      setResponse("You're Obese!");
      responseClass.current.className = "obese";

    }
  }


  function calculateAgain(){
    setWeightValue("");
    setHeightValue("");
    setBmiValue("");
    setResponse("");
    responseClass.current.className = "";
    inputContainerClass.current.className = "";
    outputContainerClass.current.className = "hide";
  }

  return <div>

    <Input 
    dataHeight={heightValue} 
    dataWeight={weightValue} 
    handleSubmit={handleSubmit}
    handleChangeWeight={handleChangeWeight}
    handleChangeHeight={handleChangeHeight}
    inputContainerClass={inputContainerClass}
    />

    <Output 
    dataBmi={bmiValue} 
    dataResponse={response} 
    changeResponse={changeResponse}
    responseClass={responseClass}
    outputContainerClass={outputContainerClass}
    calculateAgain={calculateAgain}
    />


  </div>

}



const el = <App/>

ReactDOM.render(el, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
