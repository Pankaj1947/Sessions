import React from 'react';
import './App.css';
import { D12Counter } from './Day12/AliveClass/D12Counter';
import { D12Todo } from './Day12/AliveClass/D12Todo';



function App() {
  return (
    <div className='App'>
      <D12Counter/>
      <hr/>
      <D12Todo/>
    </div>
  )
};
export default App;