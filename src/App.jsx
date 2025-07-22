import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DigitalCard from './pages/DigitalCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qam-bio" element={<DigitalCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
