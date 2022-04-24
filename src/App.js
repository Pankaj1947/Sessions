import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { D9about } from './Day9Router/AliveClass/D9about';
import { D9home } from './Day9Router/AliveClass/D9home';
import { D9Login } from './Day9Router/AliveClass/D9Login';
import { D9navbar } from './Day9Router/AliveClass/D9navbar';
import { D9Users } from './Day9Router/AliveClass/D9Users';
import { UserDetails } from './Day9Router/AliveClass/UserDetails';






function App() {
  return (
    <div className='App'>
      <D9navbar />
      <Routes>
        <Route path='/' element={<D9home />} />
        <Route path='/about' element={<D9about />} />
        <Route path='/users' element={<D9Users />} />
        <Route path='/users/:id' element={<UserDetails />} />
        <Route path='/login' element={<D9Login />} />
      </Routes>
    </div>
  )
};
export default App;