import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { D9About } from './Day9Router/PreClass/D9About';
import { D9Home } from './Day9Router/PreClass/D9Home';
import { D9NavBar } from './Day9Router/PreClass/D9NavBar';
import { D9Products } from './Day9Router/PreClass/D9Products';





function App() {
  return (
    <div className='App'>
      <D9NavBar/>
      <Routes>
        <Route path={"/"} element={<D9Home/>}></Route>
        <Route path={"/about"} element={<D9About />}></Route>
        <Route path={"/products/:id"} element={<D9Products />}></Route>
      </Routes>
    </div>
  )
};
export default App;