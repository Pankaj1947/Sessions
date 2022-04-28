import React, { useContext } from 'react';
import './App.css';
import { D10Counter } from './Day10Redux/PreClass/D10Counter';
import { AppContext } from './Day10Redux/PreClass/Redux/AppContext';
import { D11Counter } from './Day11/AliveClass/D11Counter';
import { D11Todo } from './Day11/AliveClass/D11Todo';
import Main from './Day6/Assignment/GoogleTimer/Main';







function App() {
  return (
    <div className='App'>
      <D11Counter/>
      <hr/>
      <D11Todo/>
    </div>
  )
};
export default App;