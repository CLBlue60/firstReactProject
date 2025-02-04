import React from 'react';
import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Catalog from './pages/Catalog.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
