import React, {createContext, useState} from 'react';
import './App.css';
import Home from "./components/Home/home"
import Login from './components/Login/login';
import Result from './components/Result/result';
import NotFound from './components/NotFound/notfound';
import questionsData from "./data"

import {BrowserRouter, Routes, Route} from "react-router-dom"




export const quizState = createContext()
function App() {
  const [score, setScore] = useState(0)
  const [count, setCount] = useState(0)
  const [lock, setlock] = useState(false)
  
  return (
    <quizState.Provider value={{score, setScore, count, setCount, lock, setlock}}>
      <BrowserRouter>
      <Routes>
        <Route exact path='/login' Component={Login} />
        <Route exact path="/" element={<Home questionsData={questionsData}/>} />
        <Route exact path='/results' Component={Result} />
        <Route path='*' Component={NotFound} />
      </Routes>
      
    </BrowserRouter>
    </quizState.Provider>
    
  );
}

export default App;
