import { BrowserRouter, Routes, Route } from 'react-router-dom';


import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Header from './component/Header';
import Footer1 from './component/Footer';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    <Footer1 />
    
    
    
    
    </BrowserRouter>
  )
}
