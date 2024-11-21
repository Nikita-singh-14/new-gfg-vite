import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Teams from "./components/Teams";
import "./index.css";
import Core from "./pages/core";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Core/>
      <Teams />
    </div>
  );
}

export default App;
