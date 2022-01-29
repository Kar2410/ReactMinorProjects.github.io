import React, { useState } from "react";
import "./counter.css";
import Button from '@mui/material/Button';




function Counter() {

  const [count, setcount] = useState(0);

  function increase() {
   setcount(count+1)

  }
  function decrease() {
      if(count==0){
        alert("You Have Reached The 0 Limit")
        return;
      }
      setcount(count-1)


  }
  function reset() {
      setcount(0)

  }

  return (
    <>
         
      <div className="container col">
        <h1>Counter</h1>
        <div id="counter-num">{count}</div>
        <div className="container">
          <Button variant="contained" onClick={increase}>INCREASE</Button>
          <button onClick={decrease}>DECREASE</button>
          <Button  variant="contained" onClick={reset}>RESET</Button>
        </div>
      </div>
    </>
  );
}
export default Counter;
