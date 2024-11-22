import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./index.css";
import Core from "./pages/core";
import TechnicalTeams from "./pages/TechnicalTeams";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Core/>
      <TechnicalTeams/>
    </div>
  );
}

export default App;
