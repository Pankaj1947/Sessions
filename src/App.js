import React, { useState } from 'react';
import './App.css';
import { D8Card } from './Day8ContextApi/PreClass/D8Card';
import { D8Navbar } from './Day8ContextApi/PreClass/D8Navbar';





function App() {
  return (
    <div className='App'>
      <D8Navbar />
      <D8Card />
    </div>
  )
};
export default App;