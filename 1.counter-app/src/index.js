import React , { useState } from "react"; 
import ReactDOM from "react-dom"; 


function Button(props){
 const { handleClick } = props; 
  
  return (
     <button onClick={ handleClick }>
         +1
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
  const incrementCounter = ()=> setCounter(counter + 1);
  
  return (
    <div>
      <Button handleClick={incrementCounter}/>
      <Display counter={counter}/>
    </div>
  ); 
}


ReactDOM.render(
  <App/>, 
  document.getElementById("app")
); 