import React from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Catalog from "./pages/Catalog.jsx";
import About from "./pages/About.jsx";
import Admin from "./pages/Admin.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="text-success">Welcome to Our Shop!</h1>
      
      <Catalog />
      <About />
      <Admin />

      <Footer />
    </div>
  );
}

export default App;
