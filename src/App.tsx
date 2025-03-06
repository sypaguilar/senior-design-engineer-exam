import React from "react";
import "./App.css";
import Cards from "Cards";
import Banner from "Banner";
import Footer from "Footer";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center main-container">
      <Banner />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;