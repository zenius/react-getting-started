import React , { useState } from "react"; 
import ReactDOM from "react-dom"; 

function Button(props){
 	const { onClickFunction, incrementBy } = props; 
 	const handleClick = () => onClickFunction(incrementBy); 
  

 	return (
		<button onClick = { handleClick }>
		 	+{incrementBy}
		</button>
  	); 
}

function Display(props) {
  const {  counter } = props; 
  
  return (
    <div>
      { counter }
    </div>
  ); 
}

function App() {
  const [counter, setCounter] = useState(0); 
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
  
  return (
    <div>
      <Button onClickFunction = {incrementCounter} incrementBy = {1}/>
      <Button onClickFunction = {incrementCounter} incrementBy = {5}/>
      <Button onClickFunction = {incrementCounter} incrementBy = {10}/>
      <Display counter = {counter}/>
    </div>
  ); 
}


ReactDOM.render(
  <App/>, 
  document.getElementById("app")
); 