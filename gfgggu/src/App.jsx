import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Teams from "./components/Teams";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Teams />
    </div>
  );
}

export default App;
