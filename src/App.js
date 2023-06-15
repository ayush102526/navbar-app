import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <div className='main-container'>
        <Outlet />
      </div>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default App;
