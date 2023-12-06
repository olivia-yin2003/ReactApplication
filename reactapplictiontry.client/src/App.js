import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, FetchData, Tool, Ranking, Guide } from './containers';
import { NavMenu } from './components';
import './app.css';

const App = () => (
  <div className="App">
    <div>
      <NavMenu />
      <Routes><Route path="/" element={<Home />} /></Routes>
      <Routes><Route path="/fetchData" element={<FetchData />} /></Routes>
      <Routes><Route path="/tool" element={<Tool />} /></Routes>
      <Routes><Route path="/ranking" element={<Ranking />} /></Routes>
      <Routes><Route path="/guide" element={<Guide />} /></Routes>
    </div>
  </div>
);

export default App;