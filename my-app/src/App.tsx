import React from "react";
import Header from "./components/Header";
import HeroPage from "./components/HeroPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <HeroPage />
      </div>
      <Header />
    </div>
  );
}

export default App;
