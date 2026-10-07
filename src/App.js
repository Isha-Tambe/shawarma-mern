import React from "react";
import {
 BrowserRouter as Router,
 Routes,
 Route,
 Link
}
from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import logo from "./logo.png";   // <-- add your logo file in src folder

function App() {
 return (
  <Router>
    <div style={{ textAlign: "center" }}>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="App Logo" style={{ height: "60px" }} />
          <h1>SHAWARMAZIN</h1>
        </header> 
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/About"> About</Link> |
          <Link to="/Contact"> Contact</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  </Router>
 );
}

export default App;