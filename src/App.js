import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route  index element={<About />}/>
            <Route path='portfolio'  element={<Portfolio />}/>
            <Route path='skills'  element={<Skills />}/>
            <Route path='contact'  element={<Contact />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
