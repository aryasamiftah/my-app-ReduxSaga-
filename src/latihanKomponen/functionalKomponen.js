import React, { useState } from "react";

export default function FunctionalKomponen() {
    const [Counter, setCounter] = useState(0)
    
    let Increment = ()=> {
        setCounter(Counter + 1)
    }

    let Decrement = ()=> {
        setCounter(Counter - 1)
    }


    return (
    <div>
      <h1>Hello React</h1>
      <h3>Counter : {Counter}</h3>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
    </div>
  );
}
