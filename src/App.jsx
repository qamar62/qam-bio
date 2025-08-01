import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DigitalCard from './pages/DigitalCard';
import Bronze from './pages/Bronze';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qam-bio" element={<DigitalCard />} />
        <Route path="/bronze" element={<Bronze />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
