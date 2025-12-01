import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}

export default App