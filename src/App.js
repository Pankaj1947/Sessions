import React from 'react';
import './App.css';
import { AuthContextProvider } from './Day8ContextApi/Assignment/AuthContext/AuthContext';
import Displayuser from './Day8ContextApi/Assignment/AuthContext/DisplayUser';
import Navbar from './Day8ContextApi/Assignment/AuthContext/Navbar';



function App() {
  return (
    <div className='App'>
      <AuthContextProvider>
        <Navbar />
        <Displayuser />
      </AuthContextProvider>
    </div>
  )
};
export default App;