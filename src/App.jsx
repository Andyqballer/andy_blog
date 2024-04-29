import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import Home from './pages/views/home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}  />
    </Routes>
    </>
  )
}

export default App
