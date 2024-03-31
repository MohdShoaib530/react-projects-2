// import Chai from "./Chai";
import { useState } from "react";

function App() {
  let [counter,setCounter] = useState(5)

  const username = "Mohd Shoaib"
  
  function IncValue(){
    if(counter <= 19){
      setCounter(++counter)
    }
  }

  function decValue(){
    if (counter >= 1){
      setCounter(--counter)
    }
  }

  return (
    <>
      <h1>Hello {username} is here.</h1>
      <h1>Counter value: {counter}</h1>       

      <button onClick={IncValue}>Increase Value </button>
      <br/>
      <button onClick={decValue}>Decrease Value</button>
    </>
  );
}

export default App;
