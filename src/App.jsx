import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BioCard from './components/BioCard';
import qamAvatar from '../public/qam.jpg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qam-io" element={
          <BioCard
            avatar={qamAvatar}
            name="Qamar Ibrahim"
            title="Python Django Developer"
            bio="Python Django Developer and DevOps Engineer with experience in AI chat integration, automation workflows, and cloud computing. Passionate about delivering high-impact solutions."
            socials={{
              linkedin: "https://linkedin.com/in/qamar62",
              github: "https://github.com/qamar62",
              website: "https://qamaribrahim.com",
              instagram: "https://instagram.com/qamar62"
            }}
            phone="+971-5xxxxxxx"
            email="qamar62@gmail.com"
            website="https://qamaribrahim.com"
          />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App
