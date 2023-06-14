import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import About from './components/about/About'; // Import the About component

const App = () => {
  return (
    <div>
      <Navbar />
      <img src="/Banner 4 (1).png" alt="Full-size Photo" style={{ width: '100%' }} />
      <h1>Welcome to Socialize Up</h1>
      {/* Add more content or components */}
      <About /> {/* Render the About component */}
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default App;
