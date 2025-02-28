import React from "react";
import "./App.css";
import Cards from "Cards";
import Banner from "Banner";
import Footer from "Footer";

function App() {

  const carData = {
    imageUrl: 'assets/images/Sports Car Purple.svg',
    title: 'Sports Car Purple',
    price: '32,000'
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Banner />
        <Cards data={carData}/>
        <Footer />
    </div>
  );
}

export default App;