import React from 'react';



function Day2counter() {

  const [counter,setCounter]=React.useState(0);
  const handleInc=(value)=>{
    setCounter(counter+value);
  };

  return (
    <>
      <h1>{counter}</h1>
        <button onClick={()=>handleInc(-1)}>DEC</button>
        <button onClick={()=>handleInc(1)}>INC</button>
    </>
  )
}

export default Day2counter;