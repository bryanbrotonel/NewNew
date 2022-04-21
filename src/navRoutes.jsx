import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './scenes/Home';
import Artist from './scenes/Artist';
import Share from './scenes/Share';
import About from './scenes/About';

const NavRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/artist/:artistID" element={<Artist />}></Route>
    <Route path="/share" element={<Share />}></Route>
    <Route
      path="*"
      element={
        <div className="container">
          <p>Nothing here!</p>
        </div>
      }
    />
  </Routes>
);

export default NavRoutes;
