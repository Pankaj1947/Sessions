import React from 'react';
import './App.css';
import { D5Todo } from './Day5Useeffect/AliveClass/D5Todo';
// import D5Counter from './Day5Useeffect/PreClass/D5Counter';
// import { D5Demo } from './Day5Useeffect/PreClass/D5Demo';




function App() {
  // const [showCounter,setShowCounter]=React.useState(false);


  return (
    <div className='App'>
      {/* {showCounter && <D5Counter/>}
      <br/>
      <button onClick={()=>setShowCounter(!showCounter)}>SHOW</button> */}
      <D5Todo/>
    </div>
  )
};

export default App;