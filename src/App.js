import './App.css';
import Machine from './Machine';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { Home } from './Home';
import { useState } from 'react';

function App() {
    return (
    <div className="App">
      <h1>Spooky <span>S</span>lot Machine</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/slot-machine' element={<Machine/>}></Route>
          <Route exact path='/signin' element={<SignIn />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
