import { BrowserRouter, Routes, Route } from 'react-router-dom';


import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signout from './pages/Signout';
import Projects from './pages/Projects';
import Dashboard from './pages/Dashboard';
import Header from './component/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signout" element={<Signout />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    
    
    
    
    </BrowserRouter>
  )
}
